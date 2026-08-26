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

export function ServicesMenu() {
  return (
    <div className="grid grid-cols-[260px_1fr] gap-12 py-10">
      <div className="border-r border-ink/[0.08] pr-10">
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
          <div className="overflow-hidden rounded-xl border border-ink/[0.08]">
            <div className="flex aspect-[16/10] items-center justify-center bg-[repeating-linear-gradient(135deg,#E9E5DF_0_9px,#F4F2EE_9px_18px)]">
              <span className="text-[10px] tracking-[0.05em] text-muted-soft uppercase">
                {featured.imageLabel}
              </span>
            </div>
          </div>
          <p className="mt-3 text-[13.5px] leading-[1.5] font-semibold text-ink">
            {featured.title}
          </p>
          <Link
            href={`/work/${featured.slug}`}
            className="mt-1.5 inline-block text-[12px] text-orange"
          >
            Read case study →
          </Link>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-4 gap-10">
          {groups.map((group) => (
            <div key={group}>
              <span className="flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.08em] text-ink uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                {group}
              </span>
              <div className="mt-4 flex flex-col gap-3">
                {services
                  .filter((s) => s.group === group)
                  .map((s) => (
                    <Link
                      key={s.title}
                      href={s.href}
                      className="text-[16px] text-ink-soft transition-colors hover:text-orange"
                    >
                      {s.title}
                    </Link>
                  ))}
              </div>
            </div>
          ))}

          <div>
            <span className="flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.08em] text-ink uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              By Industry
            </span>
            <div className="mt-4 flex flex-col gap-3">
              {industries.map((industry) => (
                <Link
                  key={industry.title}
                  href={industry.href}
                  className="text-[16px] text-ink-soft transition-colors hover:text-orange"
                >
                  {industry.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-ink/[0.08] pt-5">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[16px] font-semibold text-ink transition-colors hover:text-orange"
          >
            All Services →
          </Link>
        </div>
      </div>
    </div>
  );
}
