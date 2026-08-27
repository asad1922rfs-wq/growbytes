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

export function SoftwareEngineeringIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <polyline points="8 6 2 12 8 18" />
      <polyline points="16 6 22 12 16 18" />
    </svg>
  );
}

export function AiIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 L14.2 9.8 L21 12 L14.2 14.2 L12 21 L9.8 14.2 L3 12 L9.8 9.8 Z" />
    </svg>
  );
}

export function ProductDesignIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  );
}

export function MobileIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="2" width="10" height="20" rx="2.2" />
      <line x1="10.5" y1="18" x2="13.5" y2="18" />
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

export function QualityIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7.5-3.6 7.5-9.4V5.6L12 3 4.5 5.6v6C4.5 17.4 12 21 12 21Z" />
      <polyline points="8.75 12 10.75 14 15.25 9.5" />
    </svg>
  );
}
