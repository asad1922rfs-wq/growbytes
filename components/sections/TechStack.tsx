import { Container } from "@/components/ui/Container";
import { techStack } from "@/lib/data/techStack";

export function TechStack() {
  return (
    <section id="industries" className="bg-ink text-white">
      <Container className="py-[clamp(64px,8vw,124px)]">
        <h2 className="max-w-[760px] text-[clamp(30px,3.7vw,50px)] leading-[1.06] font-extrabold tracking-[-0.035em]">
          Built for the Modern Digital World.
        </h2>
        <p className="mt-[18px] max-w-[560px] text-[clamp(15px,1.25vw,17px)] leading-[1.62] text-muted-softer text-pretty">
          One team covering the creative and the technical — from
          storefronts and brand systems to APIs, automation and enterprise
          platforms.
        </p>
        <div className="mt-[clamp(32px,4vw,52px)] flex flex-wrap gap-2.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-[11px] border border-white/[0.14] px-[18px] py-[11px] text-[15px] font-semibold transition-all duration-[250ms] hover:-translate-y-[3px] hover:border-orange hover:bg-orange"
            >
              {tech}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
