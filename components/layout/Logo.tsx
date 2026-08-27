import Link from "next/link";
import { LogoMark } from "./LogoMark";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="#top" className="flex flex-none items-center gap-2">
      <LogoMark className="h-[18px] w-[18px] min-[900px]:h-[22px] min-[900px]:w-[22px]" />
      <span
        className={`font-heading text-[20px] font-normal tracking-[-0.02em] min-[900px]:text-[26px] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        <span className="font-semibold">Grow</span>bytes
        <span className="text-orange">.</span>
      </span>
    </Link>
  );
}
