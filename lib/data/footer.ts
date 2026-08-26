import { NavLink } from "./navigation";

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore GrowBytes",
    links: [
      { label: "About Us", href: "/company/about" },
      { label: "Our Work", href: "#work" },
      { label: "Our Process", href: "#solutions" },
      { label: "Industries", href: "#industries" },
      { label: "Careers", href: "/company/careers" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Custom Software Development", href: "/services/custom-software" },
      { label: "Web Application Development", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-app" },
      { label: "MVP Development", href: "/services/mvp-development" },
      { label: "UI/UX & Product Design", href: "/services/ui-ux-design" },
      { label: "E-commerce Development", href: "/services/e-commerce" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "QA & Software Testing", href: "/services/qa-testing" },
      { label: "AI & Automation", href: "/solutions/ai-automation" },
      { label: "Machine Learning & Data Science", href: "/services/machine-learning" },
      { label: "Staff Augmentation", href: "/services/staff-augmentation" },
      { label: "Cybersecurity", href: "/services/cybersecurity" },
      { label: "Digital Marketing & SEO", href: "/services/digital-marketing" },
      { label: "Branding & Creative", href: "/services/branding-creative" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "#work" },
      { label: "Insights", href: "#insights" },
      { label: "Blog", href: "/resources/blog" },
      { label: "E-commerce Resources", href: "/resources/blog" },
      { label: "Technology", href: "#industries" },
      { label: "FAQs", href: "#contact" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms & Conditions", href: "/legal/terms" },
  { label: "Cookie Policy", href: "/legal/cookies" },
];

export const socialLinks: { label: string; href: string; short: string }[] = [
  { label: "LinkedIn", href: "#", short: "in" },
  { label: "Instagram", href: "#", short: "ig" },
  { label: "Facebook", href: "#", short: "f" },
  { label: "X", href: "#", short: "X" },
  { label: "YouTube", href: "#", short: "▶" },
];
