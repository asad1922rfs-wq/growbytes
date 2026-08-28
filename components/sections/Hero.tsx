"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { heroSlides, trustLogos } from "@/lib/data/hero";

export function Hero() {
  const [slide, setSlide] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setSlide((s) => (s + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white"
      style={{ height: "100%" }}
    >
      <div className="absolute inset-0 bg-[url('/images/hero/hero.webp')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#fff_0%,#fff_38%,rgba(255,255,255,0.85)_50%,rgba(255,255,255,0.5)_59%,rgba(255,255,255,0.18)_67%,rgba(255,255,255,0)_75%)] sm:bg-[linear-gradient(90deg,#fff_0%,#fff_38%,rgba(255,255,255,0.85)_50%,rgba(255,255,255,0.5)_59%,rgba(255,255,255,0.18)_67%,rgba(255,255,255,0)_75%)]" />

      <div
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        className="relative"
      >
        <Container className="pt-[80px] pb-[clamp(32px,3.5vw,48px)] sm:pt-[clamp(56px,7vw,96px)]">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              {heroSlides.map((s) => (
                <div
                  key={s.heading}
                  className="flex min-h-[320px] w-full min-w-0 flex-none flex-col items-center justify-start text-center sm:min-h-[clamp(400px,44vw,520px)] sm:items-start sm:justify-center sm:pr-[clamp(20px,4vw,48px)] sm:text-left"
                >
                  <h1 className="font-weight-600 max-w-[820px] text-[clamp(30px,4.3vw,60px)] leading-[1.15] tracking-[-0.03em] text-balance">
                    {s.heading} <span className="text-orange">{s.highlight}</span>
                  </h1>
                  <p className="mt-[clamp(18px,2.4vw,26px)] max-w-[90%] text-[clamp(15px,1.6vw,24px)] leading-[1.55] font-medium text-ink-soft text-pretty sm:max-w-[50%] sm:leading-[1.62]">
                    {s.description}
                  </p>
                  <div className="mt-[clamp(24px,3vw,34px)] flex flex-wrap justify-center gap-3 sm:justify-start">
                    <Link
                      href={s.primaryCta.href}
                      className="font-sans inline-flex items-center gap-2.5 rounded-xl bg-orange px-[14px] py-[14px] text-[15px] leading-none font-medium text-white transition-transform duration-[250ms] hover:-translate-y-0.5 sm:px-[16px] sm:py-[12.5px] sm:text-[20px]"
                    >
                      {s.primaryCta.label}
                    </Link>
                    <Link
                      href={s.secondaryCta.href}
                      className="font-sans inline-flex items-center gap-2.5 rounded-xl border border-ink/[0.14] bg-white px-[14px] py-[14px] text-[15px] leading-none font-medium text-ink transition-colors duration-[250ms] hover:bg-cream sm:px-[clamp(20px,1.8vw,28px)] sm:py-[clamp(14px,1.4vw,18px)] sm:text-[20px]"
                    >
                      {s.secondaryCta.label} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>

        <Container className="pb-[clamp(40px,5vw,64px)]">
          <div className="no-scrollbar overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
            <div className="animate-marquee flex w-max">
              {[0, 1].map((rep) => (
                <div
                  key={rep}
                  aria-hidden={rep === 1}
                  className="flex items-center gap-[clamp(38px,6vw,74px)] pr-[clamp(38px,6vw,74px)]"
                >
                  {trustLogos.map((logo) => (
                    <span
                      key={logo}
                      className="text-[17px] font-bold tracking-[-0.01em] text-muted-faint"
                    >
                      {logo}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
