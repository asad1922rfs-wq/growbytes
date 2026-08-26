export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  theme: "light" | "dark";
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "GrowBytes took a vague brief and returned a roadmap we could actually fund. The storefront they shipped is the best-performing asset we own.",
    name: "Elena Marsh",
    role: "Head of Digital · Voltway",
    theme: "light",
  },
  {
    quote:
      "They embedded with our ops team for three months. Nobody had to translate between design and engineering — it was one group solving one problem.",
    name: "Daniel Okafor",
    role: "COO · Harborline",
    theme: "light",
  },
  {
    quote:
      "From naming to a shipped app in eleven weeks, without the quality drop we expected at that pace. They now run our growth work too.",
    name: "Priya Raman",
    role: "Founder · Meridia",
    theme: "dark",
  },
  {
    quote:
      "Our organic traffic doubled in two quarters, but the bigger win was finally having documentation and a team that answers questions.",
    name: "Marc Delacroix",
    role: "Marketing Director · Cedarworks",
    theme: "light",
  },
];
