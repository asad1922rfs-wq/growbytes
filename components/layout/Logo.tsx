import Link from "next/link";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="#top" className="flex flex-none items-center">
      <span
        className={`text-[20px] font-normal tracking-[-0.02em] min-[900px]:text-[26px] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        <span className="font-semibold">Grow</span>Bytes
        <span className="text-orange">.</span>
      </span>
    </Link>
  );
}
