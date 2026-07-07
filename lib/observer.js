// One shared IntersectionObserver for every scroll-reveal element on the page.
// Dozens of Reveal/Stagger/AnimatedHeading instances previously each spun up
// their own observer + effect; funnelling them through a single instance cuts
// hydration effect count, observer allocations, and memory.
//
// All reveal consumers share identical geometry ({ threshold: 0, bottom margin
// -12% }), so a single observer serves them correctly. HeroVideo keeps its own
// observer because it needs a different threshold and play/pause (non-once)
// semantics.

let observer;
const callbacks = new Map();

function ensure() {
  if (observer || typeof IntersectionObserver === "undefined") return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const cb = callbacks.get(entry.target);
        if (cb) cb(entry);
      }
    },
    // threshold 0 + a bottom rootMargin fires as soon as the element edge
    // enters the viewport — reliable even for elements taller than the screen.
    { threshold: 0, rootMargin: "0px 0px -12% 0px" }
  );
  return observer;
}

/**
 * Observe `el`; `cb(entry)` runs on each intersection change. Returns a
 * disposer. When IntersectionObserver is unavailable, `cb` is invoked once
 * synchronously with `{ isIntersecting: true }` so content still reveals.
 */
export function observe(el, cb) {
  const io = ensure();
  if (!io) {
    cb({ isIntersecting: true });
    return () => {};
  }
  callbacks.set(el, cb);
  io.observe(el);
  return () => {
    callbacks.delete(el);
    io.unobserve(el);
  };
}
