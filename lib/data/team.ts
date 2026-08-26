export interface TeamMember {
  name: string;
  role: string;
}

export const team: TeamMember[] = [
  { name: "Amara Idris", role: "Creative Designer" },
  { name: "Jonas Weber", role: "UI/UX Designer" },
  { name: "Sana Qureshi", role: "Lead Developer" },
  { name: "Tomás Rivera", role: "SEO Specialist" },
  { name: "Leah Bergström", role: "Digital Marketer" },
];

export const openRoles = {
  label: "We're hiring",
  title: "Project Manager & two engineers",
  href: "/company/careers",
};
