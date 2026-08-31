import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CodeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <polyline points="8 6 2 12 8 18" />
      <polyline points="16 6 22 12 16 18" />
    </svg>
  );
}

export function BrowserIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <line x1="2.5" y1="8.5" x2="21.5" y2="8.5" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="2" width="10" height="20" rx="2.2" />
      <line x1="10.5" y1="18" x2="13.5" y2="18" />
    </svg>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.5c3 2 5 5.8 5 9.3 0 2.1-.9 4.1-2 5.4l-3 3.1-3-3.1c-1.1-1.3-2-3.3-2-5.4 0-3.5 2-7.3 5-9.3Z" />
      <circle cx="12" cy="10.5" r="1.7" />
      <path d="M9 17.5 7 21M15 17.5l2 3.5" />
    </svg>
  );
}

export function PenIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="20" r="1.3" />
      <circle cx="18" cy="20" r="1.3" />
      <path d="M2.5 3h2.4l2.4 12.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21.3 8H6.1" />
    </svg>
  );
}

export function CloudIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M17.5 19H8.5a5 5 0 0 1-.6-9.97A6.5 6.5 0 0 1 20 12.5a4 4 0 0 1-2.5 6.5Z" />
    </svg>
  );
}

export function ChecklistIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 3.5h6a1 1 0 0 1 1 1V6H8V4.5a1 1 0 0 1 1-1Z" />
      <path d="M8.5 13.2 10.3 15l4.2-4.2" />
    </svg>
  );
}

export function ShieldLockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7.5-3.6 7.5-9.4V5.6L12 3 4.5 5.6v6C4.5 17.4 12 21 12 21Z" />
      <circle cx="12" cy="11.3" r="1.6" />
      <path d="M12 12.9V15" />
    </svg>
  );
}

export function TeamIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20c0-3.6 2.5-6 5.5-6s5.5 2.4 5.5 6" />
      <circle cx="17.5" cy="9" r="2.3" />
      <path d="M15.3 20c.2-2.9 1.9-4.7 3.9-4.7" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 L14.2 9.8 L21 12 L14.2 14.2 L12 21 L9.8 14.2 L3 12 L9.8 9.8 Z" />
    </svg>
  );
}

export function BarsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20V11M9.3 20V4M14.7 20v-6.5M20 20V8.5" />
    </svg>
  );
}

export function TrendUpIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <polyline points="3 17 9.5 10.5 13.5 14.5 21 6.5" />
      <polyline points="15 6.5 21 6.5 21 12.5" />
    </svg>
  );
}

export function PaletteIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.9-.9 1.6-1.9-.2-.6.1-1.3.7-1.6.5-.2 1-.2 1.5 0a2 2 0 0 0 2.6-1.1A9 9 0 0 0 12 3Z" />
      <circle cx="8" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="10.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
