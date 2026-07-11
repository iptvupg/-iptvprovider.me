// Internal-linking engine. Pure, side-effect-free query helpers over the
// relationship graph in config/site-map.js. Each helper returns plain link
// objects ({ href, label }) that a page can render — the engine never renders
// or mutates anything itself, so importing it changes no existing HTML.

import { ROUTES } from "@/config/site-map";

/** @typedef {{ href: string, label: string }} SiteLink */

/** Resolve a path to a `{ href, label }` link, or null if it isn't in the map. */
function toLink(path) {
  const node = ROUTES[path];
  return node ? { href: path, label: node.label } : null;
}

function toLinks(paths) {
  return paths.map(toLink).filter(Boolean);
}

/** The raw graph node for a path, or null. */
export function getNode(path) {
  return ROUTES[path] ?? null;
}

/** Parent link for a path, or null at the root. */
export function getParent(path) {
  const node = ROUTES[path];
  return node && node.parent ? toLink(node.parent) : null;
}

/** Direct child links, in authored order. */
export function getChildren(path) {
  const node = ROUTES[path];
  return node ? toLinks(node.children) : [];
}

/** Sibling links (the parent's other children), excluding the page itself. */
export function getSiblings(path) {
  const node = ROUTES[path];
  if (!node || !node.parent) return [];
  const parent = ROUTES[node.parent];
  if (!parent) return [];
  return toLinks(parent.children.filter((child) => child !== path));
}

/**
 * Previous/next links within the parent's ordered children — useful for
 * paginating through a silo (e.g. the how-to device guides).
 * @returns {{ previous: SiteLink | null, next: SiteLink | null }}
 */
export function getPreviousNext(path) {
  const node = ROUTES[path];
  if (!node || !node.parent) return { previous: null, next: null };
  const parent = ROUTES[node.parent];
  if (!parent) return { previous: null, next: null };
  const i = parent.children.indexOf(path);
  if (i === -1) return { previous: null, next: null };
  return {
    previous: i > 0 ? toLink(parent.children[i - 1]) : null,
    next: i < parent.children.length - 1 ? toLink(parent.children[i + 1]) : null,
  };
}

/** Curated related links for a path. */
export function getRelated(path) {
  const node = ROUTES[path];
  return node ? toLinks(node.related) : [];
}

/** Breadcrumb trail from the root down to (and including) the page. */
export function getBreadcrumbTrail(path) {
  const trail = [];
  let current = path;
  const guard = new Set();
  while (current && ROUTES[current] && !guard.has(current)) {
    guard.add(current);
    trail.unshift(toLink(current));
    current = ROUTES[current].parent;
  }
  return trail;
}

/**
 * A deduped suggestion set for a page: curated related links first, then
 * siblings, then children — capped at `limit`. Handy for a "keep reading" block.
 */
export function getSuggested(path, limit = 4) {
  const seen = new Set([path]);
  const out = [];
  for (const link of [...getRelated(path), ...getSiblings(path), ...getChildren(path)]) {
    if (seen.has(link.href)) continue;
    seen.add(link.href);
    out.push(link);
    if (out.length >= limit) break;
  }
  return out;
}
