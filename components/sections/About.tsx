import { Container } from "@/components/ui/Container";
import { valueProps } from "@/lib/data/techStack";

export function About() {
  return (
    <section id="about" className="bg-white">
      <Container className="py-[clamp(64px,8vw,124px)]">
        <div className="grid grid-cols-1 gap-[clamp(28px,4vw,64px)] sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
          <div>
            <h2 className="text-[clamp(30px,3.7vw,50px)] leading-[1.06] font-extrabold tracking-[-0.035em] text-balance">
              More Than an Agency. A Digital Growth Partner.
            </h2>
            <p className="mt-[18px] max-w-[440px] text-[clamp(15px,1.25vw,17px)] leading-[1.62] text-muted text-pretty">
              We stay involved after launch — measuring, iterating and
              extending the systems we build with you.
            </p>
            <div className="mt-[clamp(26px,3vw,38px)] overflow-hidden rounded-[18px] border border-ink/[0.09]">
              <div className="flex aspect-[16/10] items-center justify-center bg-[repeating-linear-gradient(135deg,#EFECE7_0_9px,#F7F5F2_9px_18px)]">
                <span className="text-[11.5px] tracking-[0.05em] text-muted-soft uppercase">
                  workshop photography
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 content-start gap-[clamp(14px,1.6vw,20px)] sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))]">
            {valueProps.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink/[0.09] bg-white p-6 transition-colors duration-300 hover:border-orange/40"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-peach text-sm text-orange">
                  {item.icon}
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
