import { ReactNode } from "react";
import Link from "next/link";
import { services, ServiceGroup } from "@/lib/data/services";
import { caseStudies } from "@/lib/data/work";

const groups: ServiceGroup[] = [
  "Product & Engineering",
  "Top Services",
  "AI & Growth",
  "Enterprise Solutions",
];

const featured = caseStudies[0];

function GroupLabel({ children }: { children: ReactNode }) {
  return (
    <span className="block border-b border-ink/[0.06] pb-3 text-[13.5px] font-semibold tracking-[0.09em] text-ink-soft uppercase">
      {children}
      <span className="text-[19px] leading-none text-orange">.</span>
    </span>
  );
}

export function ServicesMenu() {
  const primaryGroup = groups[0];
  const secondaryGroups = groups.slice(1);

  return (
    <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-[264px_1fr] lg:gap-0 lg:py-10">
      <div className="rounded-2xl bg-cream p-6 lg:-my-10 lg:-ml-[clamp(20px,4vw,48px)] lg:rounded-none lg:border-r lg:border-ink/[0.06] lg:pt-[36px] lg:pr-8 lg:pb-[15px] lg:pl-[clamp(20px,4vw,48px)]">
        <h3 className="font-weight-600 text-[21px] tracking-[-0.02em] text-ink">
          Services<span className="text-orange">.</span>
        </h3>
        <p className="mt-3 text-[14px] leading-[1.62] text-muted">
          Software, design and growth capabilities you can mix and match
          around whatever you&apos;re building.
        </p>
        <Link
          href="/services"
          className="mt-5 inline-block border-b border-ink/25 pb-0.5 text-[15px] font-semibold text-ink transition-colors duration-[250ms] hover:border-orange hover:text-orange"
        >
          View All Services
        </Link>

        <div className="mt-5 border-t border-ink/[0.08] pt-6">
          <Link href={`/work/${featured.slug}`} className="group/case block">
            <div className="relative overflow-hidden rounded-xl border border-ink/[0.08] transition-colors duration-300 group-hover/case:border-orange/30">
              <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-[repeating-linear-gradient(135deg,var(--color-cream)_0_9px,var(--color-cream-alt)_9px_18px)]">
                <span className="text-[10px] tracking-[0.05em] text-muted-soft uppercase motion-safe:transition-transform motion-safe:duration-500 group-hover/case:scale-[1.04]">
                  {featured.imageLabel}
                </span>
              </div>
              <span className="absolute top-2.5 left-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] text-ink uppercase backdrop-blur-sm">
                {featured.tags[0]}
              </span>
            </div>
            <p className="mt-3 text-[13.5px] leading-[1.5] font-semibold text-ink transition-colors duration-300 group-hover/case:text-orange">
              {featured.title}
            </p>
            <div className="mt-1.5 flex items-baseline gap-1.5">
              <span className="text-[13.5px] font-bold text-orange">
                {featured.metric.value}
              </span>
              <span className="text-[11.5px] text-muted-soft">{featured.metric.label}</span>
            </div>
            <span className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-medium text-orange">
              Read case study
              <span
                aria-hidden="true"
                className="motion-safe:transition-transform motion-safe:duration-300 group-hover/case:translate-x-1"
              >
                →
              </span>
            </span>
          </Link>
        </div>
      </div>

      <div className="lg:-mt-1 lg:pl-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-9 2xl:grid-cols-4 2xl:gap-x-10">
          <div>
            <GroupLabel>{primaryGroup}</GroupLabel>
            <div className="-mx-2.5 mt-3.5 flex flex-col">
              {services
                .filter((s) => s.group === primaryGroup)
                .map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.title}
                      href={s.href}
                      className="group/item flex items-start gap-3.5 rounded-xl border border-transparent px-2.5 py-1.5 transition-colors duration-200 hover:border-ink/[0.06] hover:bg-cream/70"
                    >
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-ink/[0.06] bg-white text-orange transition-colors duration-200 group-hover/item:border-orange group-hover/item:bg-orange group-hover/item:text-white">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} />
                      </span>
                      <span className="min-w-0 flex-1 pt-0.5">
                        <span className="block text-[14.5px] font-semibold text-ink transition-colors duration-200 group-hover/item:text-orange">
                          {s.title}
                        </span>
                        <span className="mt-0.5 block truncate text-[12px] leading-snug text-muted">
                          {s.description}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="mt-2 flex-none text-[13px] text-orange opacity-0 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                      >
                        →
                      </span>
                    </Link>
                  );
                })}
            </div>
          </div>

          {secondaryGroups.map((group) => (
            <div key={group}>
              <GroupLabel>{group}</GroupLabel>
              <div className="-mx-2 mt-3.5 flex flex-col gap-0.5">
                {services
                  .filter((s) => s.group === group)
                  .map((s) => (
                    <Link
                      key={s.title}
                      href={s.href}
                      className="group/item flex items-center rounded-lg border border-transparent px-2 py-1.5 text-[15px] font-medium text-ink transition-colors duration-200 hover:border-ink/[0.06] hover:bg-cream/70 hover:text-orange"
                    >
                      <span className="leading-snug">{s.title}</span>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-5 rounded-xl bg-cream/60 px-6 py-5">
          <div className="flex flex-wrap items-center gap-5">
            <div>
              <p className="text-[19px] font-normal text-ink">Need a dedicated team, fast?</p>
              <p className="mt-1 text-[13px] text-muted">
                We&apos;ll match you with senior engineers in days, not months.
              </p>
            </div>

            <div className="flex flex-none items-center -space-x-2.5">
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className="h-9 w-9 flex-none rounded-full bg-[linear-gradient(135deg,#ee5b2b,#101112)] p-[1px]"
                >
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-cream-alt text-muted-soft">
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="8" r="3.2" />
                      <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
                    </svg>
                  </span>
                </span>
              ))}
              <span className="flex h-9 w-9 flex-none items-center justify-center text-[22px] leading-none font-thin text-ink">
                +
              </span>
            </div>
          </div>

          <div className="flex flex-none items-center gap-6">
            <Link
              href="#contact"
              className="rounded-[11px] bg-[#4bb594] px-[16px] py-[12.5px] text-[15px] font-normal tracking-[0.02em] text-white transition-all duration-[250ms] hover:-translate-y-px hover:bg-[#3fa084]"
            >
              Hire a Team
            </Link>
            <Link
              href="#contact"
              className="border-b border-ink/25 pb-0.5 text-[15px] font-semibold text-ink transition-colors duration-[250ms] hover:border-orange hover:text-orange"
            >
              Talk to an expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
