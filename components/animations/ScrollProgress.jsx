// Zero-JS scroll indicator driven entirely by the CSS scroll-timeline.
export default function ScrollProgress() {
  return (
    <div
      aria-hidden
      className="scroll-progress fixed inset-x-0 top-0 z-[70] h-0.5 bg-gradient-to-r from-acid via-acid-hover to-acid"
    />
  );
}
