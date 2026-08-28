import { ReactNode } from "react";
import Link from "next/link";
import { services, ServiceGroup } from "@/lib/data/services";
import { caseStudies } from "@/lib/data/work";
import { industries } from "@/lib/data/industries";

const groups: ServiceGroup[] = [
  "Product & Engineering",
  "Cloud, Quality & Security",
  "AI & Growth",
];

const featured = caseStudies[0];

function GroupLabel({ children }: { children: ReactNode }) {
  return (
    <span className="flex items-center gap-1.5 text-[12.5px] font-semibold tracking-[0.08em] text-ink uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-orange" />
      {children}
    </span>
  );
}

export function ServicesMenu() {
  const primaryGroup = groups[0];
  const secondaryGroups = groups.slice(1);

  return (
    <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-[260px_1fr] lg:gap-12 lg:py-10">
      <div className="rounded-2xl bg-cream p-6 lg:-my-10 lg:rounded-none lg:px-6 lg:pt-14 lg:pb-10">
        <h3 className="text-xl font-extrabold tracking-[-0.02em]">
          Services<span className="text-orange">.</span>
        </h3>
        <p className="mt-3 text-[14.5px] leading-[1.6] text-muted">
          Software, design and growth capabilities you can mix and match
          around whatever you&apos;re building.
        </p>
        <Link
          href="#contact"
          className="mt-5 inline-flex items-center gap-2 text-[12.5px] text-orange"
        >
          Talk to an expert →
        </Link>

        <div className="mt-7 border-t border-ink/[0.08] pt-6">
          <div className="group/case relative overflow-hidden rounded-xl border border-ink/[0.08]">
            <div className="flex aspect-[16/10] items-center justify-center bg-[repeating-linear-gradient(135deg,var(--color-cream)_0_9px,var(--color-cream-alt)_9px_18px)]">
              <span className="text-[10px] tracking-[0.05em] text-muted-soft uppercase">
                {featured.imageLabel}
              </span>
            </div>
            <span className="absolute top-2.5 left-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] text-ink uppercase backdrop-blur-sm">
              {featured.tags[0]}
            </span>
          </div>
          <p className="mt-3 text-[13.5px] leading-[1.5] font-semibold text-ink">
            {featured.title}
          </p>
          <div className="mt-1.5 flex items-baseline gap-1.5">
            <span className="text-[13.5px] font-bold text-orange">
              {featured.metric.value}
            </span>
            <span className="text-[11.5px] text-muted-soft">{featured.metric.label}</span>
          </div>
          <Link
            href={`/work/${featured.slug}`}
            className="mt-2 inline-block text-[12px] text-orange"
          >
            Read case study →
          </Link>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 2xl:grid-cols-[1.35fr_1fr_1fr_1fr] 2xl:gap-x-10 2xl:gap-y-10">
          <div>
            <GroupLabel>{primaryGroup}</GroupLabel>
            <div className="-mx-2 mt-3 flex flex-col">
              {services
                .filter((s) => s.group === primaryGroup)
                .map((s) => (
                  <Link
                    key={s.title}
                    href={s.href}
                    className="group/item flex items-start gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-cream"
                  >
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-cream text-[14px] font-bold text-orange transition-colors group-hover/item:bg-orange group-hover/item:text-white">
                      {s.icon}
                    </span>
                    <span className="min-w-0 pt-0.5">
                      <span className="block text-[14.5px] font-semibold text-ink transition-colors group-hover/item:text-orange">
                        {s.title}
                      </span>
                      <span className="mt-0.5 block truncate text-[12px] leading-snug text-muted">
                        {s.description}
                      </span>
                    </span>
                  </Link>
                ))}
            </div>
          </div>

          {secondaryGroups.map((group) => (
            <div key={group}>
              <GroupLabel>{group}</GroupLabel>
              <div className="mt-4 flex flex-col gap-1">
                {services
                  .filter((s) => s.group === group)
                  .map((s) => (
                    <Link
                      key={s.title}
                      href={s.href}
                      className="group/item -mx-2 flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-[14.5px] text-ink-soft transition-colors hover:bg-cream hover:text-orange"
                    >
                      <span className="flex h-7 w-7 flex-none items-center justify-center rounded-md bg-cream text-[12px] font-semibold text-orange transition-colors group-hover/item:bg-orange group-hover/item:text-white">
                        {s.icon}
                      </span>
                      {s.title}
                    </Link>
                  ))}
              </div>
            </div>
          ))}

          <div>
            <GroupLabel>By Industry</GroupLabel>
            <div className="mt-4 flex flex-wrap gap-2">
              {industries.map((industry) => (
                <Link
                  key={industry.title}
                  href={industry.href}
                  className="rounded-full border border-ink/[0.12] px-3.5 py-[7px] text-[12.5px] font-medium text-ink-soft transition-colors hover:border-orange/40 hover:bg-peach hover:text-orange"
                >
                  {industry.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-ink/[0.08] pt-5">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[16px] font-semibold text-ink transition-colors hover:text-orange"
          >
            All Services →
          </Link>
          <span className="text-[12.5px] text-muted-soft">
            {services.length} services · {industries.length} industries
          </span>
        </div>
      </div>
    </div>
  );
}
