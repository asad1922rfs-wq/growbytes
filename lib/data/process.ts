export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: "◇",
    title: "Understand before we build.",
    description:
      "We learn about your business, audience and objectives, then turn them into a clear roadmap with scope, technology and measurable goals.",
  },
  {
    icon: "◈",
    title: "Create the experience and build it.",
    description:
      "Designers shape the interface and visual system while our engineers build, integrate and test for performance and scale.",
  },
  {
    icon: "◫",
    title: "Go live, then keep improving.",
    description:
      "We deploy and optimize for real users, then support, measure and improve as your business evolves.",
  },
];
