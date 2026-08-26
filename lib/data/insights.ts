export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
}

export const articles: Article[] = [
  {
    slug: "where-ai-pays-off",
    category: "AI",
    title: "Where AI actually pays off in a mid-sized business",
    excerpt: "Three automation patterns worth building before you touch a model.",
  },
  {
    slug: "shopify-or-custom",
    category: "E-commerce",
    title: "Shopify or custom? A decision framework",
    excerpt: "The four constraints that decide your platform — none of them are features.",
  },
  {
    slug: "technical-seo-debt",
    category: "SEO",
    title: "Technical SEO debt is a product problem",
    excerpt: "Why rankings stall even when the content calendar is full.",
  },
];
