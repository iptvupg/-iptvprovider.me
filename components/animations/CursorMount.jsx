"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Client-only, code-split: the custom cursor never blocks SSR/hydration and its
// chunk is only fetched on devices that actually have a fine pointer.
const Cursor = dynamic(() => import("@/components/animations/Cursor"), { ssr: false });

export default function CursorMount() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    setFine(window.matchMedia("(pointer: fine)").matches);
  }, []);

  return fine ? <Cursor /> : null;
}
