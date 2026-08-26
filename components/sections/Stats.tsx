"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { stats } from "@/lib/data/stats";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const runCount = () => {
      const start = performance.now();
      const duration = 1400;
      const tick = (now: number) => {
        const k = Math.min(1, (now - start) / duration);
        setProgress(easeOutCubic(k));
        if (k < 1) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runCount();
              io.disconnect();
            }
          });
        },
        { threshold: 0.3 },
      );
      io.observe(el);
      return () => {
        io.disconnect();
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }

    runCount();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-ink text-white">
      <Container className="py-[clamp(56px,7vw,104px)]">
        <div className="mb-[clamp(32px,4vw,52px)] flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[clamp(30px,3.7vw,50px)] leading-[1.06] font-extrabold tracking-[-0.035em]">
            Built to Deliver.
          </h2>
          <p className="max-w-[380px] text-[14.5px] leading-[1.6] text-muted-soft">
            Placeholder figures — replace with verified GrowBytes numbers
            before launch.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[18px] border border-white/[0.12] bg-white/[0.12] sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,190px),1fr))]">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-ink p-[clamp(24px,3vw,36px)]">
              <div
                className={`text-[clamp(38px,4.6vw,60px)] leading-none font-extrabold tracking-[-0.04em] ${
                  stat.accent ? "text-orange" : ""
                }`}
              >
                {Math.round(stat.target * progress)}
                {stat.suffix}
              </div>
              <div className="mt-2.5 text-sm text-muted-softer">{stat.label}</div>
            </div>
          ))}
          <div className="bg-ink p-[clamp(24px,3vw,36px)]">
            <div className="text-[clamp(38px,4.6vw,60px)] leading-none font-extrabold tracking-[-0.04em]">
              Global
            </div>
            <div className="mt-2.5 text-sm text-muted-softer">Client reach</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
