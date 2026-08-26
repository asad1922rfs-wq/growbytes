import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "outline-dark" | "ghost-dark";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange text-white hover:-translate-y-0.5",
  dark: "bg-ink text-white hover:bg-orange",
  outline:
    "bg-white text-ink border border-ink/[0.14] hover:bg-cream",
  "outline-dark":
    "bg-transparent text-white border border-white/20 hover:bg-white/[0.08]",
  "ghost-dark":
    "bg-white/10 border border-white/[0.16] text-white hover:bg-orange hover:border-orange",
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "",
  onClick,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `inline-flex items-center gap-2.5 rounded-xl px-6 py-4 text-[15.5px] font-semibold transition-transform duration-[250ms] ease-out ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && "→"}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
