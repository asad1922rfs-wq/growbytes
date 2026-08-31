import { NavLink } from "./navigation";

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Services",
    links: [],
  },
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
