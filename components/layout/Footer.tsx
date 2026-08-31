import Link from "next/link";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { footerColumns, legalLinks, socialLinks } from "@/lib/data/footer";
import { services } from "@/lib/data/services";

export function Footer() {
  return (
    <footer className="border-t border-ink/[0.08] bg-white">
      <div className="mx-auto flex max-w-[1510px] flex-wrap items-stretch">
        <div className="order-2 flex min-w-0 flex-[1_1_620px] flex-col bg-white p-[clamp(48px,6vw,88px)_clamp(20px,4vw,56px)_40px]">
          <div className="flex flex-col gap-[clamp(26px,3.5vw,44px)]">
            <div className="max-w-[420px]">
              <Logo />
              <p className="mt-4 text-[14.5px] leading-[1.62] text-muted text-pretty">
                We design, build and grow digital experiences for ambitious
                businesses.
              </p>
            </div>
            <div className="grid min-w-0 grid-cols-2 gap-x-[clamp(20px,2.5vw,40px)] gap-y-[clamp(24px,3vw,44px)] sm:grid-cols-3">
              {footerColumns.map((col) => {
                const isServices = col.title === "Services";
                const links = isServices
                  ? services.slice(0, 10).map((s) => ({ label: s.title, href: s.href }))
                  : col.links;
                return (
                  <div key={col.title}>
                    <h4 className="mb-[18px] text-[19px] font-extrabold tracking-[-0.02em] text-ink">
                      {col.title}
                      <span className="text-orange">.</span>
                    </h4>
                    <div className="flex flex-col items-start gap-2.5">
                      {links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="text-[15px] text-ink-soft transition-all duration-[220ms] hover:translate-x-[3px] hover:text-orange"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-auto pt-[clamp(34px,4vw,58px)]">
            <div className="flex flex-wrap items-center gap-4.5 border-t border-ink/[0.08] pt-5">
              {legalLinks.map((link, i) => (
                <span key={link.label} className="flex items-center gap-4.5">
                  {i > 0 && <span className="block h-3 w-px bg-ink/[0.14]" />}
                  <Link
                    href={link.href}
                    className="text-[12.5px] text-ink transition-colors duration-[220ms] hover:text-orange"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
            <p className="mt-8 text-[12.5px] text-ink">
              © 2026 GrowBytes. All rights reserved.
            </p>
          </div>
        </div>

        <div className="order-1 flex min-w-0 flex-[0_0_500px] flex-col gap-[clamp(20px,2.5vw,30px)] bg-cream-alt p-[clamp(48px,6vw,88px)_clamp(20px,4vw,56px)_40px]">
          <div>
            <h3 className="text-[clamp(28px,3vw,36px)] leading-[1.06] font-extrabold tracking-[-0.035em] text-ink">
              Get in touch<span className="text-orange">.</span>
            </h3>
            <div className="mt-5.5 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-ink/20 bg-transparent px-[16px] py-[12.5px] text-[17px] font-normal tracking-[0.02em] text-ink transition-colors duration-[250ms] hover:border-ink/30 hover:bg-white"
              >
                Contact Us
              </Link>
              <a
                href="mailto:hello@growbytes.com"
                className="inline-flex items-center gap-2.5 rounded-xl bg-orange px-[16px] py-[12.5px] text-[17px] font-normal tracking-[0.02em] text-white transition-transform duration-[250ms] hover:-translate-y-0.5"
              >
                Start a Project
              </a>
            </div>
            <p className="mt-6.5 text-[16.5px] font-bold tracking-[-0.02em] text-ink">
              Let&apos;s build something great together.
            </p>
            <div className="mt-3.5 flex flex-col gap-2.5">
              <a
                href="mailto:hello@growbytes.com"
                className="text-[15px] text-ink-soft transition-colors duration-[220ms] hover:text-orange"
              >
                hello@growbytes.com
              </a>
              <a
                href="tel:+000000000000"
                className="text-[18px] text-ink-soft transition-colors duration-[220ms] hover:text-orange"
              >
                <span className="text-orange">+</span>00 000 000 0000
              </a>
              <span className="text-[15px] text-muted-soft">Global / Remote</span>
            </div>
          </div>

          <div className="border-t border-ink/10 pt-[clamp(26px,3vw,34px)]">
            <h4 className="text-[clamp(20px,2vw,23px)] leading-[1.2] font-extrabold tracking-[-0.025em] text-ink">
              Stay ahead of what&apos;s next<span className="text-orange">.</span>
            </h4>
            <p className="mt-2.5 max-w-[400px] text-[14.5px] leading-[1.6] text-muted text-pretty">
              Get practical insights on technology, e-commerce, AI, digital
              growth and building better digital experiences.
            </p>
            <NewsletterForm />
            <p className="mt-3 text-[12.5px] text-muted-soft">
              By subscribing, you agree to our{" "}
              <Link href="/legal/privacy" className="border-b border-ink/[0.22] text-muted hover:text-orange">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="mt-auto">
            <h4 className="mb-4 text-[clamp(18px,1.8vw,21px)] font-extrabold tracking-[-0.025em] text-ink">
              Follow GrowBytes<span className="text-orange">.</span>
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-ink/[0.14] bg-white text-[12.5px] text-muted transition-all duration-[250ms] hover:scale-[1.07] hover:border-orange/50 hover:text-orange"
                >
                  {social.short}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
