import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { caseStudies } from "@/lib/data/work";

export function Work() {
  const [featured, ...rest] = caseStudies;

  return (
    <section id="work" className="border-t border-ink/[0.06] bg-cream">
      <Container className="py-[clamp(64px,8vw,124px)]">
        <div className="mb-[clamp(32px,4vw,54px)] grid grid-cols-1 items-end gap-[clamp(18px,3vw,48px)] sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
          <h2 className="text-[clamp(30px,3.7vw,50px)] leading-[1.06] font-extrabold tracking-[-0.035em]">
            Work That Speaks for Itself.
          </h2>
          <p className="max-w-[460px] text-[clamp(15px,1.25vw,17px)] leading-[1.62] text-muted text-pretty">
            From ambitious startups to established businesses, we create
            digital products that solve real business problems.
          </p>
        </div>

        <div className="flex flex-col gap-[clamp(16px,2vw,24px)]">
          <Link
            href={`/work/${featured.slug}`}
            className="grid grid-cols-1 gap-[clamp(20px,3vw,44px)] rounded-[20px] border border-ink/[0.08] bg-white p-[clamp(18px,2vw,24px)] text-ink transition-shadow duration-[350ms] hover:shadow-[0_34px_58px_-38px_rgba(16,17,18,0.42)] sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr))]"
          >
            <div className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl bg-[repeating-linear-gradient(135deg,#E9E5DF_0_9px,#F2F0EC_9px_18px)]">
              <span className="text-[11.5px] tracking-[0.05em] text-muted-soft uppercase">
                {featured.imageLabel}
              </span>
            </div>
            <div className="flex flex-col justify-center px-0 py-1 sm:px-2.5">
              <div className="mb-4 flex flex-wrap gap-1.5">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-cream px-2.5 py-1.5 text-[10.5px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-[clamp(23px,2.4vw,32px)] leading-[1.12] font-bold tracking-[-0.03em]">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-[480px] text-[15px] leading-[1.62] text-muted">
                {featured.description}
              </p>
              <div className="mt-[22px] flex flex-wrap gap-[clamp(20px,3vw,40px)]">
                <span>
                  <span className="block text-[26px] font-extrabold tracking-[-0.02em] text-orange">
                    {featured.metric.value}
                  </span>
                  <span className="text-[10.5px] tracking-[0.05em] text-muted-soft uppercase">
                    {featured.metric.label}
                  </span>
                </span>
                {featured.metric2 && (
                  <span>
                    <span className="block text-[26px] font-extrabold tracking-[-0.02em]">
                      {featured.metric2.value}
                    </span>
                    <span className="text-[10.5px] tracking-[0.05em] text-muted-soft uppercase">
                      {featured.metric2.label}
                    </span>
                  </span>
                )}
              </div>
              <span className="mt-6 text-[12.5px] text-orange">
                View Case Study →
              </span>
            </div>
          </Link>

          <div className="grid grid-cols-1 gap-[clamp(16px,2vw,24px)] sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
            {rest.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className={`flex flex-col rounded-[20px] border p-[clamp(18px,2vw,24px)] transition-shadow duration-[350ms] ${
                  study.theme === "dark"
                    ? "border-ink bg-ink text-white hover:shadow-[0_34px_58px_-34px_rgba(16,17,18,0.6)]"
                    : "border-ink/[0.08] bg-white text-ink hover:shadow-[0_34px_58px_-38px_rgba(16,17,18,0.42)]"
                }`}
              >
                <div
                  className={`flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl ${
                    study.theme === "dark"
                      ? "bg-[repeating-linear-gradient(135deg,#1C1F21_0_9px,#24282A_9px_18px)]"
                      : "bg-[repeating-linear-gradient(135deg,#E4E7E5_0_9px,#EFF1EF_9px_18px)]"
                  }`}
                >
                  <span
                    className={`text-[11.5px] tracking-[0.05em] uppercase ${
                      study.theme === "dark" ? "text-[#6E7377]" : "text-muted-soft"
                    }`}
                  >
                    {study.imageLabel}
                  </span>
                </div>
                <div className="mt-5 mb-3.5 flex flex-wrap gap-1.5">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-md px-2.5 py-1.5 text-[10.5px] ${
                        study.theme === "dark"
                          ? "bg-white/[0.08] text-muted-softer"
                          : "bg-cream text-muted"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[22px] leading-[1.18] font-bold tracking-[-0.025em]">
                  {study.title}
                </h3>
                <p
                  className={`mt-2.5 text-[14.5px] leading-[1.6] ${
                    study.theme === "dark" ? "text-muted-softer" : "text-muted"
                  }`}
                >
                  {study.description}
                </p>
                <div className="mt-auto flex items-baseline gap-2.5 pt-5">
                  <span className="text-[22px] font-extrabold tracking-[-0.02em] text-orange">
                    {study.metric.value}
                  </span>
                  <span
                    className={`text-[13px] ${
                      study.theme === "dark" ? "text-muted-softer" : "text-muted-soft"
                    }`}
                  >
                    {study.metric.label}
                  </span>
                </div>
                <span className="mt-3.5 text-[12.5px] text-orange">
                  View Case Study →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
