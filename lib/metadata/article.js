import { pageMetadata } from "./base";

// Editorial-page metadata: identical to pageMetadata but defaults the
// OpenGraph type to "article". Used by the Learn deep-dive, the How-to device
// guides and the Compare articles (they all share the article OG shape).
export function articleMetadata({ openGraph, ...rest }) {
  return pageMetadata({
    ...rest,
    openGraph: { type: "article", ...openGraph },
  });
}
