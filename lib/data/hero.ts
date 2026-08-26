export interface HeroSlide {
  heading: string;
  highlight: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export const heroSlides: HeroSlide[] = [
  {
    heading: "We Build Digital Experiences That Move",
    highlight: "Businesses Forward.",
    description:
      "Strategy, design, technology and digital growth — all working together to turn ambitious ideas into measurable results.",
    primaryCta: { label: "Start Your Project", href: "#contact" },
    secondaryCta: { label: "Explore Our Work", href: "#work" },
  },
  {
    heading: "Storefronts Built to Sell,",
    highlight: "Scale, Convert.",
    description:
      "Shopify, WooCommerce and custom commerce — designed around the buying journey and tuned for revenue per session.",
    primaryCta: { label: "Scale Your Store", href: "#contact" },
    secondaryCta: { label: "See Our Services", href: "#services" },
  },
  {
    heading: "Put AI to Work Where It Actually",
    highlight: "Pays Off.",
    description:
      "Automation, intelligent assistants and integrations that remove manual work from the operations you already run.",
    primaryCta: { label: "Explore AI Solutions", href: "/solutions/ai-automation" },
    secondaryCta: { label: "Talk to an Expert", href: "#contact" },
  },
];

export const trustLogos: string[] = [
  "NORTHWIND",
  "velocity.co",
  "LUMENFORM",
  "Harborline",
  "MERIDIA",
  "stackroot",
  "Voltway",
  "CEDARWORKS",
];
