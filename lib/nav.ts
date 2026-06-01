export type NavItem = {
  href: string;
  label: string;
  group: "coding";
  icon: string;
};

export const NAV: NavItem[] = [
  { href: "/", label: "Overview", group: "coding", icon: "▦" },
  { href: "/inpatient", label: "Inpatient Coding", group: "coding", icon: "🛏" },
  { href: "/outpatient", label: "Outpatient Coding", group: "coding", icon: "🩺" },
  { href: "/verify", label: "CPT Verifier", group: "coding", icon: "✓" },
];

export const GROUPS: { key: NavItem["group"]; label: string }[] = [
  { key: "coding", label: "Coding & Billing" },
];
