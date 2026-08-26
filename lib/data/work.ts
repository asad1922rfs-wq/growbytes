export interface CaseStudy {
  slug: string;
  tags: string[];
  title: string;
  description: string;
  imageLabel: string;
  metric: { value: string; label: string; accent?: boolean };
  metric2?: { value: string; label: string };
  theme: "light" | "dark";
  size: "large" | "small";
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "voltway",
    tags: ["Retail", "Shopify", "UX · CRO"],
    title: "Voltway — replatforming a 12-market storefront",
    description:
      "Rebuilt the buying experience, unified product data and cut checkout steps from five to two.",
    imageLabel: "e-commerce store mockup",
    metric: { value: "+38%", label: "Revenue / session", accent: true },
    metric2: { value: "−52%", label: "Checkout drop-off" },
    theme: "light",
    size: "large",
  },
  {
    slug: "harborline",
    tags: ["Logistics", "Custom software"],
    title: "Harborline — an operations console for 400 drivers",
    description:
      "Replaced spreadsheets with a real-time dispatch and reporting platform.",
    imageLabel: "dashboard mockup",
    metric: { value: "9 hrs", label: "saved per week, per depot", accent: true },
    theme: "light",
    size: "small",
  },
  {
    slug: "meridia",
    tags: ["Fintech", "Brand · App"],
    title: "Meridia — identity and product launch in 11 weeks",
    description:
      "Naming through to shipped mobile app, marketing site and design system.",
    imageLabel: "brand / app visual",
    metric: { value: "18k", label: "signups in first quarter", accent: true },
    theme: "dark",
    size: "small",
  },
];
