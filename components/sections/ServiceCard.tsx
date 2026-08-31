import { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { ServiceCategory } from "@/lib/data/serviceCategories";

type Variant = "primary" | "compact" | "wide";

export function ServiceCard({
  category,
  icon: Icon,
  variant,
  dark = false,
  className = "",
}: {
  category: ServiceCategory;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  variant: Variant;
  dark?: boolean;
  className?: string;
}) {
  const isWide = variant === "wide";

  return (
    <Link
      href={category.href}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-colors duration-300 ${
        dark
          ? "border-ink bg-ink text-white hover:border-orange/60"
          : "border-ink/[0.08] bg-cream hover:border-ink/20"
      } ${
        variant === "primary"
          ? "p-6 sm:p-8 lg:p-9"
          : isWide
            ? "p-6 sm:p-7 lg:p-8"
            : "p-5 sm:p-6 lg:p-7"
      } ${className}`}
    >
      {dark && !isWide && (
        <>
          <div className="pointer-events-none absolute -top-20 -right-20 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(238,91,43,0.35),rgba(238,91,43,0)_70%)] transition-opacity duration-300 group-hover:opacity-80" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.25] [background-image:radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1.4px)] [background-size:18px_18px] [mask-image:radial-gradient(ellipse_60%_60%_at_75%_25%,#000_0%,transparent_70%)]"
          />
        </>
      )}

      {isWide && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[url('/images/services/quality-engineering.webp')] bg-cover bg-[center_30%]"
          />
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 ${
              dark
                ? "bg-[linear-gradient(90deg,#101112_0%,#101112_34%,rgba(16,17,18,0.55)_58%,rgba(16,17,18,0.15)_100%)]"
                : "bg-[linear-gradient(90deg,#fff_0%,#fff_36%,rgba(255,255,255,0.4)_58%,rgba(255,255,255,0.05)_100%)]"
            }`}
          />
        </>
      )}

      <div
        className={`relative flex flex-1 flex-col ${isWide ? "lg:flex-row lg:items-center lg:gap-10" : ""}`}
      >
        <div className={isWide ? "lg:w-[300px] lg:flex-none" : ""}>
          <span
            className={`flex h-11 w-11 flex-none items-center justify-center rounded-2xl motion-safe:transition-colors motion-safe:duration-300 sm:h-14 sm:w-14 ${
              dark
                ? "bg-orange text-white group-hover:bg-orange-dark"
                : "bg-white text-orange group-hover:bg-orange group-hover:text-white"
            }`}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
          </span>
          <h3
            className={`mt-4 font-bold tracking-[-0.02em] sm:mt-5 ${
              variant === "primary"
                ? "text-[22px] sm:text-[clamp(24px,2.1vw,29px)]"
                : isWide
                  ? "text-[22px] sm:text-[clamp(24px,2.1vw,29px)]"
                  : "text-[20px] sm:text-[24px]"
            }`}
          >
            {category.title}
          </h3>
          <p
            className={`mt-2.5 leading-[1.6] text-pretty ${
              variant === "compact"
                ? "text-[14px] sm:text-[15px]"
                : "max-w-[380px] text-[15px] sm:text-[16px]"
            } ${dark ? "text-muted-softer" : "text-muted"}`}
          >
            {category.description}
          </p>
        </div>

        <div className={isWide ? "mt-5 flex-1 lg:mt-0" : "mt-5"}>
          <ul
            className={`gap-x-4 gap-y-1.5 ${
              variant === "primary"
                ? "grid grid-cols-1 sm:grid-cols-2"
                : isWide
                  ? "flex flex-wrap gap-x-6 gap-y-1.5"
                  : "flex flex-col gap-1.5"
            }`}
          >
            {category.services.map((service) => (
              <li
                key={service}
                className={`flex items-center gap-2.5 text-[15px] leading-snug font-medium sm:text-[17px] ${
                  dark ? "text-white" : "text-ink-soft"
                }`}
              >
                <span className="h-[5px] w-[5px] flex-none rounded-[2px] bg-orange" />
                {service}
              </li>
            ))}
          </ul>

          <div className={`mt-8 flex flex-wrap gap-2 ${isWide ? "max-w-[540px]" : ""}`}>
            {category.technologies.map((tech) => (
              <span
                key={tech}
                className={`rounded-full border font-medium motion-safe:transition-colors motion-safe:duration-300 ${
                  isWide
                    ? "px-3 py-1.5 text-[12.5px] sm:px-4 sm:py-2 sm:text-[14px]"
                    : "px-3 py-1.5 text-[12.5px]"
                } ${
                  dark
                    ? "border-white/25 text-white/85 group-hover:border-white/40 group-hover:text-white"
                    : "border-ink/20 text-ink-soft group-hover:border-ink/35 group-hover:text-ink"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <span
        className={`relative mt-6 inline-flex items-center gap-2 self-start text-[14.5px] font-semibold motion-safe:transition-colors motion-safe:duration-300 ${
          dark ? "text-white group-hover:text-orange" : "text-ink group-hover:text-orange"
        }`}
      >
        Explore service
        <span
          aria-hidden="true"
          className="motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </Link>
  );
}
