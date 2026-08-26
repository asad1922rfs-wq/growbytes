export type ServiceGroup =
  | "Product & Engineering"
  | "Cloud, Quality & Security"
  | "AI & Growth";

export interface Service {
  icon: string;
  title: string;
  description: string;
  href: string;
  theme: "dark" | "light" | "peach" | "cream";
  group: ServiceGroup;
}

export const services: Service[] = [
  {
    icon: "</>",
    title: "Custom Software Development",
    description:
      "Bespoke platforms and internal tools engineered around your exact business logic and workflows.",
    href: "/services/custom-software",
    theme: "dark",
    group: "Product & Engineering",
  },
  {
    icon: "◫",
    title: "Web Application Development",
    description:
      "High-performance, scalable web apps built for speed, reliability and growth.",
    href: "/services/web-development",
    theme: "light",
    group: "Product & Engineering",
  },
  {
    icon: "▦",
    title: "Mobile App Development",
    description:
      "Native iOS and Android apps, plus cross-platform builds that ship on one codebase.",
    href: "/services/mobile-app",
    theme: "peach",
    group: "Product & Engineering",
  },
  {
    icon: "◐",
    title: "MVP Development",
    description:
      "Validate an idea fast with a lean, launch-ready product built to gather real user feedback.",
    href: "/services/mvp-development",
    theme: "light",
    group: "Product & Engineering",
  },
  {
    icon: "◈",
    title: "UI/UX & Product Design",
    description:
      "Intuitive interfaces and product experiences designed around your customers.",
    href: "/services/ui-ux-design",
    theme: "light",
    group: "Product & Engineering",
  },
  {
    icon: "↗",
    title: "E-commerce Development",
    description: "Shopify, WooCommerce and custom storefronts engineered to convert.",
    href: "/services/e-commerce",
    theme: "cream",
    group: "Product & Engineering",
  },
  {
    icon: "⬡",
    title: "Cloud & DevOps",
    description:
      "Cloud architecture, migration and CI/CD pipelines that scale without breaking the budget.",
    href: "/services/cloud-devops",
    theme: "light",
    group: "Cloud, Quality & Security",
  },
  {
    icon: "✓",
    title: "QA & Software Testing",
    description:
      "Manual, automated and performance testing that catches issues before your users do.",
    href: "/services/qa-testing",
    theme: "light",
    group: "Cloud, Quality & Security",
  },
  {
    icon: "◎",
    title: "Cybersecurity",
    description:
      "Penetration testing and security hardening that protect your systems and your users.",
    href: "/services/cybersecurity",
    theme: "light",
    group: "Cloud, Quality & Security",
  },
  {
    icon: "◍",
    title: "Staff Augmentation & Dedicated Teams",
    description:
      "Senior engineers embedded with your team, on demand, without the hiring overhead.",
    href: "/services/staff-augmentation",
    theme: "light",
    group: "Cloud, Quality & Security",
  },
  {
    icon: "AI",
    title: "AI & Automation",
    description: "AI-powered workflows, automation and intelligent digital solutions.",
    href: "/solutions/ai-automation",
    theme: "dark",
    group: "AI & Growth",
  },
  {
    icon: "∑",
    title: "Machine Learning & Data Science",
    description:
      "Models and data pipelines that turn raw information into prediction and automation.",
    href: "/services/machine-learning",
    theme: "peach",
    group: "AI & Growth",
  },
  {
    icon: "▲",
    title: "Digital Marketing & SEO",
    description:
      "Data-driven campaigns and technical SEO that build durable, compounding growth.",
    href: "/services/digital-marketing",
    theme: "cream",
    group: "AI & Growth",
  },
  {
    icon: "✦",
    title: "Branding & Creative",
    description:
      "Distinctive visual identities, graphics and creative systems for modern brands.",
    href: "/services/branding-creative",
    theme: "light",
    group: "AI & Growth",
  },
];
