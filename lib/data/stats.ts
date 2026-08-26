export interface Stat {
  target: number;
  suffix: string;
  label: string;
  accent?: boolean;
}

export const stats: Stat[] = [
  { target: 500, suffix: "+", label: "Projects & digital deliverables" },
  { target: 50, suffix: "+", label: "Brands supported", accent: true },
  { target: 10, suffix: "+", label: "Digital capabilities" },
];
