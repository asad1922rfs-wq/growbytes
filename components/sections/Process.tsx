"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { processSteps } from "@/lib/data/process";

export function Process() {
  const [step, setStep] = useState(0);

  return (
    <section id="solutions" className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute top-[18%] -left-[220px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(238,91,43,0.07),rgba(238,91,43,0)_68%)]" />
      <Container className="relative flex flex-wrap items-start gap-[clamp(40px,5vw,84px)] py-[clamp(64px,8vw,130px)]">
        <div className="min-w-0 flex-[1_1_380px]">
          <h2 className="text-[clamp(36px,4.3vw,60px)] leading-[1.02] font-extrabold tracking-[-0.038em] text-balance">
            A Simple Process.
            <br />
            Built Around Your <span className="text-orange">Goals.</span>
          </h2>

          <div className="relative mt-[clamp(34px,4vw,56px)] max-w-[460px]">
            <div className="flex aspect-[4/5] items-end justify-center rounded-[220px_26px_26px_120px] bg-[repeating-linear-gradient(135deg,#E9E5DF_0_10px,#F4F2EE_10px_20px)] p-6.5">
              <span className="text-center text-[11.5px] tracking-[0.05em] text-muted-soft uppercase">
                team at work — portrait photography
              </span>
            </div>
            <div className="animate-float absolute right-[-10px] bottom-[34px] rounded-2xl bg-ink px-[18px] py-4 text-white shadow-[0_24px_44px_-24px_rgba(16,17,18,0.55)]">
              <span className="block text-[10.5px] tracking-[0.08em] text-orange uppercase">
                Avg. kickoff
              </span>
              <span className="mt-1.5 block text-[19px] font-bold tracking-[-0.02em]">
                5 working days
              </span>
            </div>
            <span className="pointer-events-none absolute -top-3.5 -left-3.5 block h-16 w-16 rounded-full border border-orange/35" />
          </div>
        </div>

        <div className="relative min-w-0 flex-[1_1_520px] pt-1.5">
          <div className="absolute top-[34px] bottom-[118px] left-[22px] w-px bg-ink/[0.13]" />
          <div
            className="absolute top-[34px] left-[22px] w-px bg-orange transition-[height] duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ height: `${(step / 3) * 100}%` }}
          />

          {processSteps.map((s, i) => (
            <div
              key={s.title}
              onMouseEnter={() => setStep(i + 1)}
              onMouseLeave={() => setStep(0)}
              className="group relative grid grid-cols-[46px_1fr] gap-[clamp(16px,1.8vw,26px)] rounded-2xl bg-transparent p-[clamp(18px,2vw,24px)_clamp(14px,1.6vw,22px)] text-muted-softer transition-all duration-300 hover:translate-x-[5px] hover:bg-[#FFF7F3] hover:text-orange"
            >
              <span className="flex h-[46px] w-[46px] items-center justify-center rounded-2xl border border-ink/[0.12] bg-white text-[15px] text-current transition-colors duration-300">
                {s.icon}
              </span>
              <div className="min-w-0">
                <h3 className="text-[clamp(21px,2.1vw,27px)] leading-[1.16] font-bold tracking-[-0.028em] text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-[520px] text-[15.5px] leading-[1.62] text-muted">
                  {s.description}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-[clamp(26px,3vw,38px)] ml-[clamp(14px,1.6vw,22px)] flex flex-wrap items-center gap-[clamp(16px,2vw,28px)] border-t border-ink/10 pt-[clamp(24px,3vw,34px)]">
            <span className="text-[clamp(17px,1.6vw,21px)] font-bold tracking-[-0.025em]">
              Ready to get started?
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-xl bg-orange px-[23px] py-[15px] text-[15.5px] font-bold text-white transition-transform duration-[250ms] hover:-translate-y-0.5"
              >
                Start Your Project →
              </a>
              <a
                href="#contact"
                className="border-b border-ink/25 pb-0.5 text-[15px] font-semibold text-ink transition-colors duration-[250ms] hover:border-orange hover:text-orange"
              >
                Talk to Our Team
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
