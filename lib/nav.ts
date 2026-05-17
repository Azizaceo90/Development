export type NavItem = {
  href: string;
  label: string;
  group: "overview" | "mission" | "growth" | "business";
  icon: string;
};

export const NAV: NavItem[] = [
  { href: "/", label: "Overview", group: "overview", icon: "▦" },
  { href: "/donations", label: "Mecca Donations", group: "mission", icon: "🕋" },
  { href: "/kids-ai", label: "Kids AI Tools", group: "mission", icon: "🎓" },
  { href: "/quran", label: "Quran Growth", group: "growth", icon: "📖" },
  { href: "/noi-history", label: "NOI History", group: "growth", icon: "🏛" },
  { href: "/personal", label: "Personal Dev", group: "growth", icon: "✦" },
  { href: "/gym", label: "Gym Workouts", group: "growth", icon: "🏋" },
  { href: "/business", label: "6 Roles · $10M", group: "business", icon: "⚡" },
  { href: "/sales", label: "Sales", group: "business", icon: "$" },
  { href: "/property", label: "Brick Property", group: "business", icon: "🏠" },
  { href: "/farm", label: "Farm", group: "business", icon: "🌾" },
  { href: "/ads", label: "Local Paid Ads", group: "business", icon: "◎" },
];

export const GROUPS: { key: NavItem["group"]; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "mission", label: "Mission" },
  { key: "growth", label: "Personal Growth" },
  { key: "business", label: "Business" },
];
