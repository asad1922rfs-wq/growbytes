import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ServicesGrid } from "./ServicesGrid";

export function Services() {
  return (
    <section id="services" className="border-t border-ink/[0.06] bg-white">
      <Container className="py-[clamp(64px,8vw,124px)]">
        <div className="mb-[clamp(40px,5vw,64px)] grid grid-cols-1 items-end gap-[clamp(18px,3vw,48px)] sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
          <div>
            <span className="text-[13px] font-semibold tracking-[0.08em] text-ink uppercase">
              Services<span className="text-orange">.</span>
            </span>
            <h2 className="font-weight-600 mt-3.5 max-w-[480px] text-[clamp(30px,3.7vw,50px)] leading-[1.15] tracking-[-0.02em] text-balance">
              Six Capabilities. One Accountable{" "}
              <span className="text-orange">Team</span>
              <span className="text-orange">.</span>
            </h2>
          </div>
          <div className="max-w-full">
            <p className="text-[clamp(15px,1.25vw,17px)] leading-[1.62] text-ink text-pretty">
              Software engineering, AI, product design, mobile, cloud and
              quality — brought together to take your product from idea to
              production.
            </p>
            <Link
              href="/services"
              className="group mt-4 inline-flex items-center gap-4 border-b border-ink/25 pb-0.5 text-[15px] font-semibold text-ink transition-colors duration-[250ms] hover:border-orange hover:text-orange"
            >
              View All Services
              <span
                aria-hidden="true"
                className="text-[18px] font-bold motion-safe:transition-transform motion-safe:duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        <ServicesGrid />
      </Container>
    </section>
  );
}
