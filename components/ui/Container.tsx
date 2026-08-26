import { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto max-w-[1510px] px-[clamp(20px,4vw,48px)] ${className}`}
    >
      {children}
    </div>
  );
}
