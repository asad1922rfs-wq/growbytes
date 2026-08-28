import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { team, openRoles } from "@/lib/data/team";

export function Team() {
  return (
    <section className="border-t border-ink/[0.06] bg-cream">
      <Container className="py-[clamp(64px,8vw,124px)]">
        <div className="mb-[clamp(32px,4vw,54px)] grid grid-cols-1 items-end gap-[clamp(18px,3vw,48px)] sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
          <h2 className="font-weight-600 text-[clamp(30px,3.7vw,50px)] leading-[1.06] tracking-[-0.035em]">
            The People Behind the Pixels.
          </h2>
          <p className="max-w-[440px] text-[clamp(15px,1.25vw,17px)] leading-[1.62] text-muted text-pretty">
            A senior, multidisciplinary team — you work with the people who
            actually do the work.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[clamp(12px,1.4vw,18px)] sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr))]">
          {team.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl border border-ink/[0.08] bg-white"
            >
              <div className="flex aspect-[4/5] items-end justify-center bg-[repeating-linear-gradient(135deg,#E9E5DF_0_8px,#F4F2EE_8px_16px)] p-3">
                <span className="text-center text-[10.5px] text-muted-softer">
                  team portrait
                </span>
              </div>
              <div className="p-4">
                <div className="text-[15.5px] font-bold">{member.name}</div>
                <div className="mt-1 text-[13px] text-muted-soft">{member.role}</div>
              </div>
            </div>
          ))}
          <div className="flex min-h-[200px] flex-col justify-between rounded-2xl border border-ink bg-ink p-5 text-white">
            <span className="text-[10.5px] tracking-[0.06em] text-orange uppercase">
              {openRoles.label}
            </span>
            <div>
              <div className="text-lg leading-tight font-bold tracking-[-0.02em]">
                {openRoles.title}
              </div>
              <Link
                href={openRoles.href}
                className="mt-3 inline-block text-[12.5px] text-orange"
              >
                See roles →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
