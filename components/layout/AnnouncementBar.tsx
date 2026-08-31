"use client";

import { useState } from "react";
import Link from "next/link";
import { announcement } from "@/lib/data/announcement";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative flex items-center justify-center gap-2.5 bg-ink px-10 py-[13.5px] text-center text-white">
      <p className="text-[clamp(12.5px,3vw,15px)] leading-snug">
        {announcement.message}{" "}
        <Link
          href={announcement.cta.href}
          className="font-semibold text-orange underline-offset-2 hover:underline"
        >
          {announcement.cta.label} →
        </Link>
      </p>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        suppressHydrationWarning
        className="absolute right-3 flex h-6 w-6 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        ×
      </button>
    </div>
  );
}
