import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { services, Service } from "@/lib/data/services";

const themeClasses: Record<Service["theme"], string> = {
  dark: "bg-ink text-white border-ink hover:shadow-[0_26px_44px_-26px_rgba(16,17,18,0.55)]",
  light:
    "bg-white text-ink border-ink/10 hover:border-ink/[0.18] hover:shadow-[0_26px_44px_-30px_rgba(16,17,18,0.32)]",
  peach:
    "bg-warm text-ink border-orange/20 hover:shadow-[0_26px_44px_-30px_rgba(238,91,43,0.42)]",
  cream: "bg-cream text-ink border-ink/[0.08] hover:shadow-[0_26px_44px_-30px_rgba(16,17,18,0.32)]",
};

const iconBg: Record<Service["theme"], string> = {
  dark: "bg-orange text-white",
  light: "bg-cream-alt text-ink",
  peach: "bg-peach text-orange",
  cream: "bg-white border border-ink/10 text-ink",
};

const descColor: Record<Service["theme"], string> = {
  dark: "text-muted-softer",
  light: "text-muted",
  peach: "text-muted",
  cream: "text-muted",
};

export function Services() {
  return (
    <section id="services" className="bg-white">
      <Container className="py-[clamp(64px,8vw,124px)]">
        <div className="mb-[clamp(32px,4vw,54px)] grid grid-cols-1 items-end gap-[clamp(18px,3vw,48px)] sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
          <h2 className="text-[clamp(30px,3.7vw,50px)] leading-[1.06] font-extrabold tracking-[-0.035em] text-balance">
            Everything You Need to Build, Launch &amp; Grow.
          </h2>
          <p className="max-w-[460px] text-[clamp(15px,1.25vw,17px)] leading-[1.62] text-muted text-pretty">
            From strategy and design to development and growth, our
            multidisciplinary team brings everything together under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[clamp(14px,1.4vw,18px)] sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,272px),1fr))]">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className={`flex min-h-[250px] flex-col rounded-[18px] border p-[clamp(22px,2.2vw,28px)] transition-all duration-300 hover:-translate-y-[5px] ${themeClasses[service.theme]}`}
            >
              <span
                className={`flex h-[42px] w-[42px] items-center justify-center rounded-xl text-[15px] ${iconBg[service.theme]}`}
              >
                {service.icon}
              </span>
              <h3 className="mt-[clamp(30px,3vw,44px)] text-[21px] font-bold tracking-[-0.02em]">
                {service.title}
              </h3>
              <p className={`mt-2.5 text-[14.5px] leading-[1.6] ${descColor[service.theme]}`}>
                {service.description}
              </p>
              <span className="mt-auto pt-5 text-[12.5px] text-orange">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
