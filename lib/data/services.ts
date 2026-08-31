import { ComponentType, SVGProps } from "react";
import {
  CodeIcon,
  BrowserIcon,
  PhoneIcon,
  RocketIcon,
  PenIcon,
  CartIcon,
  CloudIcon,
  ChecklistIcon,
  ShieldLockIcon,
  TeamIcon,
  SparkleIcon,
  BarsIcon,
  TrendUpIcon,
  PaletteIcon,
} from "@/components/layout/ServicesMenuIcons";

export type ServiceGroup =
  | "Product & Engineering"
  | "Top Services"
  | "AI & Growth"
  | "Enterprise Solutions";

export interface Service {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  href: string;
  theme: "dark" | "light" | "peach" | "cream";
  group: ServiceGroup;
}

export const services: Service[] = [
  {
    icon: CodeIcon,
    title: "Custom Software Development",
    description: "Built for your workflows.",
    href: "/services/custom-software",
    theme: "dark",
    group: "Product & Engineering",
  },
  {
    icon: BrowserIcon,
    title: "Web Application Development",
    description: "Fast, scalable web apps.",
    href: "/services/web-development",
    theme: "light",
    group: "Product & Engineering",
  },
  {
    icon: PhoneIcon,
    title: "Mobile App Development",
    description: "Native & cross-platform.",
    href: "/services/mobile-app",
    theme: "peach",
    group: "Product & Engineering",
  },
  {
    icon: RocketIcon,
    title: "MVP Development",
    description: "Launch a lean MVP fast.",
    href: "/services/mvp-development",
    theme: "light",
    group: "Product & Engineering",
  },
  {
    icon: PenIcon,
    title: "UI/UX & Product Design",
    description: "Designed around your users.",
    href: "/services/ui-ux-design",
    theme: "light",
    group: "Product & Engineering",
  },
  {
    icon: CartIcon,
    title: "E-commerce Development",
    description: "Storefronts that convert.",
    href: "/services/e-commerce",
    theme: "cream",
    group: "Product & Engineering",
  },
  {
    icon: ChecklistIcon,
    title: "QA & Software Testing",
    description:
      "Manual, automated and performance testing that catches issues before your users do.",
    href: "/services/qa-testing",
    theme: "light",
    group: "Top Services",
  },
  {
    icon: TeamIcon,
    title: "Staff Augmentation & Dedicated Teams",
    description:
      "Senior engineers embedded with your team, on demand, without the hiring overhead.",
    href: "/services/staff-augmentation",
    theme: "light",
    group: "Top Services",
  },
  {
    icon: CodeIcon,
    title: "Back-end Development",
    description: "Robust server-side systems, APIs and business logic built to scale.",
    href: "/services/backend-development",
    theme: "light",
    group: "Top Services",
  },
  {
    icon: BrowserIcon,
    title: "Front-end Development",
    description: "Fast, accessible interfaces built with modern frameworks.",
    href: "/services/frontend-development",
    theme: "light",
    group: "Top Services",
  },
  {
    icon: ChecklistIcon,
    title: "CMS Development",
    description: "Flexible content platforms your team can manage without engineering.",
    href: "/services/cms-development",
    theme: "light",
    group: "Top Services",
  },
  {
    icon: CloudIcon,
    title: "SaaS Development",
    description: "Multi-tenant SaaS products architected for scale from day one.",
    href: "/services/saas-development",
    theme: "light",
    group: "Top Services",
  },
  {
    icon: ShieldLockIcon,
    title: "Cryptocurrency & Blockchain",
    description: "Smart contracts, wallets and blockchain platforms built securely.",
    href: "/services/blockchain-development",
    theme: "light",
    group: "Top Services",
  },
  {
    icon: CloudIcon,
    title: "DevOps",
    description: "CI/CD pipelines that scale without breaking the budget.",
    href: "/services/cloud-devops",
    theme: "light",
    group: "Enterprise Solutions",
  },
  {
    icon: ShieldLockIcon,
    title: "Cybersecurity",
    description: "Penetration testing and security hardening.",
    href: "/services/cybersecurity",
    theme: "light",
    group: "Enterprise Solutions",
  },
  {
    icon: TeamIcon,
    title: "CRM & ERP Development",
    description: "Custom CRM and ERP systems that unify your operations.",
    href: "/services/crm-erp-development",
    theme: "light",
    group: "Enterprise Solutions",
  },
  {
    icon: ChecklistIcon,
    title: "Backup Solutions",
    description: "Reliable backup and disaster recovery.",
    href: "/services/backup-solutions",
    theme: "light",
    group: "Enterprise Solutions",
  },
  {
    icon: BarsIcon,
    title: "Big Data",
    description: "Systems built to handle data at enterprise scale.",
    href: "/services/big-data",
    theme: "light",
    group: "Enterprise Solutions",
  },
  {
    icon: CloudIcon,
    title: "Cloud Applications",
    description: "Enterprise apps built cloud-native from day one.",
    href: "/services/cloud-applications",
    theme: "light",
    group: "Enterprise Solutions",
  },
  {
    icon: SparkleIcon,
    title: "Business Automation",
    description: "Automate the manual work slowing your team down.",
    href: "/services/business-automation",
    theme: "light",
    group: "Enterprise Solutions",
  },
  {
    icon: TrendUpIcon,
    title: "Digital Transformation",
    description: "Modernize legacy systems and ways of working.",
    href: "/services/digital-transformation",
    theme: "light",
    group: "Enterprise Solutions",
  },
  {
    icon: SparkleIcon,
    title: "AI & Automation",
    description: "AI-powered workflows, automation and intelligent digital solutions.",
    href: "/solutions/ai-automation",
    theme: "dark",
    group: "AI & Growth",
  },
  {
    icon: SparkleIcon,
    title: "Generative AI Development",
    description: "Custom LLM apps and generative AI products.",
    href: "/services/generative-ai",
    theme: "light",
    group: "AI & Growth",
  },
  {
    icon: BarsIcon,
    title: "Machine Learning & Data Science",
    description:
      "Models and data pipelines that turn raw information into prediction and automation.",
    href: "/services/machine-learning",
    theme: "peach",
    group: "AI & Growth",
  },
  {
    icon: TrendUpIcon,
    title: "Digital Marketing & SEO",
    description:
      "Data-driven campaigns and technical SEO that build durable, compounding growth.",
    href: "/services/digital-marketing",
    theme: "cream",
    group: "AI & Growth",
  },
  {
    icon: PaletteIcon,
    title: "Branding & Creative",
    description:
      "Distinctive visual identities, graphics and creative systems for modern brands.",
    href: "/services/branding-creative",
    theme: "light",
    group: "AI & Growth",
  },
  {
    icon: BarsIcon,
    title: "Data Engineering",
    description: "Pipelines and warehouses that turn raw data into something usable.",
    href: "/services/data-engineering",
    theme: "light",
    group: "AI & Growth",
  },
  {
    icon: TrendUpIcon,
    title: "Business Intelligence",
    description: "Dashboards and reporting that turn data into decisions.",
    href: "/services/business-intelligence",
    theme: "light",
    group: "AI & Growth",
  },
];
