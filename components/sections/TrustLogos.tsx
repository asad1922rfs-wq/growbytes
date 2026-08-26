import { Container } from "@/components/ui/Container";
import { trustLogos } from "@/lib/data/hero";

export function TrustLogos() {
  return (
    <section className="border-y border-ink/[0.06] bg-cream">
      <Container className="grid grid-cols-1 items-center gap-[clamp(20px,3vw,44px)] py-[clamp(40px,4vw,56px)] sm:grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        <h2 className="max-w-[420px] text-[clamp(20px,2.1vw,27px)] leading-[1.28] font-bold tracking-[-0.025em] text-balance">
          Helping businesses build, launch and grow with confidence.
        </h2>
        <div className="grid grid-cols-2 gap-3.5 sm:[grid-template-columns:repeat(auto-fit,minmax(112px,1fr))]">
          {trustLogos.map((logo) => (
            <div
              key={logo}
              className="flex h-[52px] items-center justify-center rounded-[11px] border border-ink/[0.08] bg-white text-[13px] font-bold text-muted-softer"
            >
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
