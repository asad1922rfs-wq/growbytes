"use client";

import { useEffect, useRef, useState } from "react";
import { primaryNav } from "@/lib/data/navigation";
import { Logo } from "./Logo";
import { ServicesMenu } from "./ServicesMenu";

export function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastY = useRef(0);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = Math.max(0, window.scrollY);
        const delta = y - lastY.current;

        if (y <= 120) {
          setHidden(false);
        } else if (delta > 6) {
          setHidden(true);
        } else if (delta < -6) {
          setHidden(false);
        }

        lastY.current = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-[60] border-b border-ink/[0.07] bg-white/[0.82] backdrop-blur-[14px] transition-[opacity,transform] duration-300 ease-out ${
          hidden && !servicesOpen
            ? "pointer-events-none -translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div className="flex h-[clamp(66px,7vw,82px)] w-full items-center gap-7 px-[clamp(20px,4vw,48px)]">
          <Logo />

          <nav className="ml-auto hidden items-center gap-[clamp(14px,2vw,30px)] min-[900px]:flex">
            <div onMouseEnter={openServices} onMouseLeave={scheduleCloseServices}>
              <a
                href="#services"
                className={`flex items-center gap-1.5 text-[clamp(15px,1vw,17px)] font-medium transition-colors ${
                  servicesOpen ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                Services
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                >
                  <path
                    d="M1.5 3.5L5 7l3.5-3.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {servicesOpen && (
                <div
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleCloseServices}
                  className="absolute inset-x-0 top-full border-b border-ink/[0.08] bg-white shadow-[0_28px_48px_-30px_rgba(16,17,18,0.28)]"
                >
                  <div className="w-full px-[clamp(20px,4vw,48px)]">
                    <ServicesMenu />
                  </div>
                </div>
              )}
            </div>

            {primaryNav
              .filter((link) => link.href !== "#services")
              .map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[clamp(15px,1vw,17px)] font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
          </nav>
          <a
            href="#contact"
            className="ml-2 hidden flex-none items-center gap-2 rounded-[11px] bg-ink px-5 py-3 text-[14.5px] font-semibold text-white transition-all duration-[250ms] hover:-translate-y-px hover:bg-orange min-[900px]:inline-flex"
          >
            Let&apos;s Talk →
          </a>

          <button
            type="button"
            onClick={() => setNavOpen(true)}
            aria-label="Open menu"
            className="ml-auto flex h-[46px] w-[46px] flex-col items-center justify-center rounded-xl bg-white min-[900px]:hidden"
          >
            <span className="block h-[1.8px] w-[22px] rounded-sm bg-ink" />
            <span className="mt-[6px] block h-[1.8px] w-[14px] rounded-sm bg-ink" />
            <span className="mt-[6px] block h-[1.8px] w-[22px] rounded-sm bg-ink" />
          </button>
        </div>
      </header>

      {navOpen && (
        <div className="animate-rise fixed inset-0 z-[80] flex flex-col bg-ink px-[clamp(20px,6vw,40px)] pt-6 pb-10 text-white">
          <div className="flex items-center justify-between">
            <Logo dark />
            <button
              type="button"
              onClick={() => setNavOpen(false)}
              aria-label="Close menu"
              className="flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-transparent text-3xl font-light text-white"
            >
              ×
            </button>
          </div>
          <nav className="mt-11 flex flex-col gap-1">
            {primaryNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setNavOpen(false)}
                className="border-b border-white/[0.09] py-2.5 text-[22px] font-normal tracking-[-0.01em] text-white last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setNavOpen(false)}
            className="mt-auto flex items-center justify-center gap-2.5 rounded-[13px] bg-orange p-[18px] text-[17px] font-bold text-white"
          >
            Let&apos;s Talk →
          </a>
        </div>
      )}
    </>
  );
}
