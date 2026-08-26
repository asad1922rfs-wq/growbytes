import Link from "next/link";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { footerColumns, legalLinks, socialLinks } from "@/lib/data/footer";

export function Footer() {
  return (
    <footer className="border-t border-ink/[0.08] bg-white">
      <div className="mx-auto flex max-w-[1510px] flex-wrap items-stretch">
        <div className="flex min-w-0 flex-[1_1_620px] flex-col bg-white p-[clamp(48px,6vw,88px)_clamp(20px,4vw,56px)_clamp(28px,3vw,40px)]">
          <div className="flex flex-wrap gap-[clamp(26px,3.5vw,56px)]">
            <div className="max-w-[250px] flex-none">
              <Logo />
              <p className="mt-4 text-[14.5px] leading-[1.62] text-muted text-pretty">
                We design, build and grow digital experiences for ambitious
                businesses.
              </p>
            </div>
            <div className="grid min-w-0 flex-[1_1_460px] grid-cols-2 gap-[clamp(24px,3vw,44px)] sm:[grid-template-columns:repeat(auto-fit,minmax(min(100%,170px),1fr))]">
              {footerColumns.map((col) => (
                <div key={col.title}>
                  <h4 className="mb-[18px] text-[19px] font-extrabold tracking-[-0.02em] text-ink">
                    {col.title}
                    <span className="text-orange">.</span>
                  </h4>
                  <div className="flex flex-col items-start gap-2.5">
                    {col.links.map((link) => (
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
              ))}
            </div>
          </div>

          <div className="mt-auto pt-[clamp(34px,4vw,58px)]">
            <div className="flex flex-wrap items-center gap-4.5 border-t border-ink/[0.08] pt-5">
              {legalLinks.map((link, i) => (
                <span key={link.label} className="flex items-center gap-4.5">
                  {i > 0 && <span className="block h-3 w-px bg-ink/[0.14]" />}
                  <Link
                    href={link.href}
                    className="text-[12.5px] text-muted transition-colors duration-[220ms] hover:text-orange"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
            <p className="mt-3.5 text-[12.5px] text-muted-soft">
              © 2026 GrowBytes. All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-[clamp(34px,4vw,52px)] bg-cream-alt p-[clamp(48px,6vw,88px)_clamp(20px,4vw,56px)_clamp(36px,4vw,56px)]">
          <div>
            <h3 className="text-[clamp(28px,3vw,36px)] leading-[1.06] font-extrabold tracking-[-0.035em] text-ink">
              Get in touch<span className="text-orange">.</span>
            </h3>
            <div className="mt-5.5 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-ink/20 bg-transparent px-6.5 py-[15px] text-[15.5px] font-semibold text-ink transition-colors duration-[250ms] hover:border-ink/30 hover:bg-white"
              >
                Contact Us
              </Link>
              <a
                href="mailto:hello@growbytes.com"
                className="inline-flex items-center gap-2.5 rounded-xl bg-orange px-6.5 py-[15px] text-[15.5px] font-bold text-white transition-transform duration-[250ms] hover:-translate-y-0.5"
              >
                Start a Project →
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
                className="text-[15px] text-ink-soft transition-colors duration-[220ms] hover:text-orange"
              >
                +00 000 000 0000
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
