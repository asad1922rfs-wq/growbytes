import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { articles } from "@/lib/data/insights";

const gradients = [
  "bg-[repeating-linear-gradient(135deg,#E9E5DF_0_9px,#F4F2EE_9px_18px)]",
  "bg-[repeating-linear-gradient(135deg,#E4E7E5_0_9px,#EFF1EF_9px_18px)]",
  "bg-[repeating-linear-gradient(135deg,#EFE7E2_0_9px,#F7F2EF_9px_18px)]",
];

export function Insights() {
  return (
    <section id="insights" className="bg-white">
      <Container className="py-[clamp(64px,8vw,124px)]">
        <div className="mb-[clamp(28px,3.5vw,46px)] flex flex-wrap items-end justify-between gap-5">
          <h2 className="font-weight-600 text-[clamp(30px,3.7vw,50px)] leading-[1.06] tracking-[-0.035em]">
            Our Latest Insights.
          </h2>
          <Link href="/resources/blog" className="text-[12.5px] text-orange">
            All articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-[clamp(16px,2vw,26px)] sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr))]">
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              href={`/resources/blog/${article.slug}`}
              className="flex flex-col text-ink"
            >
              <div
                className={`flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl ${gradients[i % gradients.length]}`}
              >
                <span className="text-[11px] tracking-[0.05em] text-muted-soft uppercase">
                  article image
                </span>
              </div>
              <span className="mt-[18px] text-[10.5px] tracking-[0.07em] text-orange uppercase">
                {article.category}
              </span>
              <h3 className="mt-2.5 text-xl leading-[1.24] font-bold tracking-[-0.02em]">
                {article.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-muted">
                {article.excerpt}
              </p>
              <span className="mt-3.5 text-[12.5px] text-orange">
                Read Article →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
