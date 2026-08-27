export interface ServiceCategory {
  title: string;
  description: string;
  services: string[];
  technologies: string[];
  href: string;
  icon?: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Software Engineering",
    description:
      "Scalable digital products engineered for performance, reliability and growth.",
    services: [
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "SaaS Development",
      "API Development",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL"],
    href: "/services/software-engineering",
    icon: "/images/services/icons/software-engineering.png",
  },
  {
    title: "AI & Generative AI",
    description:
      "Emerging AI capabilities turned into reliable products, intelligent workflows and business automation.",
    services: [
      "Generative AI",
      "AI Agents",
      "LLM Applications",
      "RAG Systems",
      "AI Automation",
    ],
    technologies: [
      "OpenAI",
      "Anthropic",
      "LLMs",
      "Python",
      "LangChain",
      "Vector Databases",
    ],
    href: "/solutions/ai-automation",
    icon: "/images/services/icons/ai.png",
  },
  {
    title: "Product Design",
    description:
      "Digital experiences that are intuitive, scalable and ready for real-world users.",
    services: [
      "UI/UX Design",
      "Product Design",
      "Design Systems",
      "UX Research",
      "Prototyping",
    ],
    technologies: ["Figma", "Design Tokens", "Framer", "Storybook", "Sketch", "Miro"],
    href: "/services/ui-ux-design",
    icon: "/images/services/icons/product-design.png",
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform apps built to feel fast on every device your users carry.",
    services: [
      "iOS Development",
      "Android Development",
      "Cross-Platform Development",
      "App Store Delivery",
      "App Maintenance & Support",
    ],
    technologies: [
      "Swift",
      "Kotlin",
      "React Native",
      "Flutter",
      "Firebase",
      "Android Studio",
    ],
    href: "/services/mobile-app",
    icon: "/images/services/icons/mobile.png",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Systems architected and operated to stay fast, secure and available at scale.",
    services: [
      "Cloud Solutions",
      "DevOps",
      "System Architecture",
      "Database Engineering",
      "Cloud Migration",
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "PostgreSQL"],
    href: "/services/cloud-devops",
  },
  {
    title: "Quality Engineering",
    description:
      "Confidence built into every release, with testing woven through the pipeline, not bolted on.",
    services: [
      "QA Testing",
      "Test Automation",
      "Performance Testing",
      "Security Testing",
      "API Testing",
    ],
    technologies: [
      "Playwright",
      "Selenium",
      "Cypress",
      "Jest",
      "Postman",
      "CI/CD",
    ],
    href: "/services/qa-testing",
  },
];
