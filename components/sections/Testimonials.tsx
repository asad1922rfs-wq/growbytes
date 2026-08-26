"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.getBoundingClientRect().width + 18 : 380;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-cream">
      <Container className="py-[clamp(64px,8vw,124px)]">
        <div className="mb-[clamp(28px,3.5vw,44px)] flex flex-wrap items-end justify-between gap-5">
          <h2 className="text-[clamp(30px,3.7vw,50px)] leading-[1.06] font-extrabold tracking-[-0.035em]">
            What Our Clients Say.
          </h2>
          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="flex h-[46px] w-[46px] items-center justify-center rounded-xl border border-ink/[0.14] bg-white text-[17px] text-ink transition-colors duration-[250ms] hover:bg-ink hover:text-white"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="flex h-[46px] w-[46px] items-center justify-center rounded-xl border border-ink/[0.14] bg-white text-[17px] text-ink transition-colors duration-[250ms] hover:bg-ink hover:text-white"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-[clamp(14px,1.6vw,20px)] overflow-x-auto pb-1.5 [scroll-behavior:smooth]"
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className={`flex flex-[0_0_min(100%,400px)] snap-start flex-col rounded-[18px] border p-[clamp(22px,2.4vw,30px)] ${
                t.theme === "dark"
                  ? "border-ink bg-ink text-white"
                  : "border-ink/[0.08] bg-white text-ink shadow-[0_20px_40px_-34px_rgba(16,17,18,0.4)]"
              }`}
            >
              <span className="text-[22px] leading-none text-orange">
                &ldquo;
              </span>
              <blockquote
                className={`mt-3.5 text-[16.5px] leading-[1.62] ${
                  t.theme === "dark" ? "" : "text-[#2C3033]"
                }`}
              >
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-6.5">
                <span
                  className={`block h-[42px] w-[42px] flex-none rounded-full ${
                    t.theme === "dark"
                      ? "bg-[repeating-linear-gradient(135deg,#22262A_0_6px,#2C3136_6px_12px)]"
                      : "bg-[repeating-linear-gradient(135deg,#E9E5DF_0_6px,#F4F2EE_6px_12px)]"
                  }`}
                />
                <span className="text-sm leading-snug">
                  <strong className="font-bold">{t.name}</strong>
                  <br />
                  <span className={t.theme === "dark" ? "text-muted-softer" : "text-muted-soft"}>
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
