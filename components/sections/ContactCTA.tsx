import { Container } from "@/components/ui/Container";

const steps = [
  { number: "01", text: "Share your goals, timeline and budget range" },
  { number: "02", text: "We reply within one business day with next steps" },
  { number: "03", text: "A 45-minute call with the people who'd do the work" },
];

export function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -right-[160px] -bottom-[200px] h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle_at_45%_45%,rgba(238,91,43,0.28),rgba(238,91,43,0)_66%)]" />
      <Container className="relative grid grid-cols-1 items-center gap-[clamp(28px,4vw,64px)] py-[clamp(64px,8vw,132px)] sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr))]">
        <div>
          <h2 className="font-weight-600 text-[clamp(32px,4.2vw,58px)] leading-[1.04] tracking-[-0.035em] text-balance">
            Have an Idea?
            <br />
            Let&apos;s Build Something Great.
          </h2>
          <p className="mt-5 max-w-[480px] text-[clamp(15.5px,1.3vw,18px)] leading-[1.62] text-muted-softer text-pretty">
            Tell us what you&apos;re working on and we&apos;ll help you turn
            the idea into a digital solution that works.
          </p>
          <div className="mt-[clamp(26px,3vw,36px)] flex flex-wrap gap-3">
            <a
              href="mailto:hello@growbytes.com"
              className="inline-flex items-center gap-2.5 rounded-xl bg-orange px-[16px] py-[12.5px] text-[17px] font-bold text-white transition-transform duration-[250ms] hover:-translate-y-0.5"
            >
              Start a Conversation
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-transparent px-6 py-4 text-[17px] font-semibold text-white transition-colors duration-[250ms] hover:bg-white/[0.08]"
            >
              Book a Discovery Call →
            </a>
          </div>
        </div>
        <div className="grid gap-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-center gap-3.5 rounded-2xl border border-white/[0.12] bg-white/[0.03] p-5"
            >
              <span className="text-xs text-orange">{step.number}</span>
              <span className="text-[15px] leading-[1.45]">{step.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
