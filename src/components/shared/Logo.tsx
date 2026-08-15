import Link from "next/link";
import { Tv2 } from "lucide-react";

export function Logo() {
  return (
    <Link href="/tv" className="flex shrink-0 items-center gap-2" aria-label="IPTV Provider homepage">
      <Tv2 className="h-7 w-7 shrink-0 text-primary" />
      <strong className="whitespace-nowrap font-headline text-xl font-bold tracking-tight">
        IPTV Provider
      </strong>
    </Link>
  );
}
