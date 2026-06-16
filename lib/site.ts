export const site = {
  name: "123 Go Staff",
  tagline: "Staffing made simple. People made the priority.",
  phone: "(123) 467-8255",
  phoneHref: "tel:+11234678255",
  email: "hello@123gostaff.com",
  emailHref: "mailto:hello@123gostaff.com",
  address: "Serving employers & job seekers nationwide",
  hours: "Mon–Fri, 8am–6pm · On-call support 24/7",
  social: {
    instagram: "https://www.instagram.com/123gostaff/",
    linkedin: "https://www.linkedin.com/company/123-go-staff/",
    facebook: "https://www.facebook.com/123gostaff",
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/employers", label: "For Employers" },
  { href: "/job-seekers", label: "For Job Seekers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: "Healthcare & Care Staffing",
    description:
      "RNs, LPNs, CNAs, caregivers, and home-health professionals — credential-verified and ready for shifts, contracts, or permanent roles.",
    icon: "heart",
  },
  {
    title: "Light Industrial & Warehouse",
    description:
      "Pickers, packers, machine operators, forklift drivers, and general labor scaled up or down to match your production demand.",
    icon: "box",
  },
  {
    title: "Administrative & Clerical",
    description:
      "Front-desk, data entry, customer service, and office support talent vetted for reliability and the right soft skills.",
    icon: "clipboard",
  },
  {
    title: "Temp, Temp-to-Hire & Direct Hire",
    description:
      "Flexible engagement models — try talent on a contract basis or hire directly. We adapt to how you want to grow.",
    icon: "switch",
  },
  {
    title: "Vendor Management (VMS)",
    description:
      "A single point of accountability for your contingent workforce — streamlined ordering, compliance, and consolidated billing.",
    icon: "layers",
  },
  {
    title: "Payroll & Compliance",
    description:
      "We carry the workers' comp, payroll taxes, onboarding, and I-9 verification so you stay focused on the work.",
    icon: "shield",
  },
];

export const industries = [
  "Healthcare & Senior Care",
  "Warehouse & Distribution",
  "Manufacturing",
  "Logistics & Fulfillment",
  "Hospitality & Events",
  "Office & Administrative",
];

export const stats = [
  { value: "48 hrs", label: "Average time to first placement" },
  { value: "97%", label: "Client fill rate" },
  { value: "5,000+", label: "Candidates in our network" },
  { value: "24/7", label: "On-call staffing support" },
];

export const employerSteps = [
  {
    step: "01",
    title: "Tell us what you need",
    description:
      "Share the role, shift, skills, and timeline. We listen first and ask the right questions before we ever send a resume.",
  },
  {
    step: "02",
    title: "We match & vet",
    description:
      "Every candidate is interviewed for qualifications and soft skills, background-checked, and credential-verified.",
  },
  {
    step: "03",
    title: "Talent shows up ready",
    description:
      "You meet pre-screened people who fit your culture. Approve, and they're on-site — often within 48 hours.",
  },
  {
    step: "04",
    title: "We stay accountable",
    description:
      "Dedicated support, performance check-ins, and fast replacements. One partner, fully on the hook for results.",
  },
];

export const seekerBenefits = [
  {
    title: "Real opportunities, fast",
    description:
      "From your first conversation to your first shift in days, not weeks — with roles that actually fit your goals.",
  },
  {
    title: "Weekly pay & support",
    description:
      "Reliable weekly pay, a real human to call, and a team that has your back on every assignment.",
  },
  {
    title: "A path to permanent",
    description:
      "Many of our temp and temp-to-hire roles turn into full-time careers with great employers.",
  },
  {
    title: "We listen first",
    description:
      "We get to know your skills and what motivates you, then match you to work where you'll thrive.",
  },
];

export const values = [
  {
    title: "People before placements",
    description:
      "Behind every order is a person and a livelihood. We treat candidates and clients like partners, not transactions.",
  },
  {
    title: "Match-making, not resume-shuffling",
    description:
      "We listen first and ask pertinent questions so the people we refer are genuinely enthusiastic and engaged.",
  },
  {
    title: "Accountability you can feel",
    description:
      "One responsive point of contact, clear communication, and follow-through from the first call to day 90.",
  },
];

export const testimonials = [
  {
    quote:
      "123 Go Staff filled three warehouse shifts in under two days when we were drowning in orders. The people they sent actually showed up and worked hard.",
    name: "Operations Manager",
    role: "Regional Distribution Center",
  },
  {
    quote:
      "As a nurse-owned agency, they understand healthcare staffing in a way most agencies don't. Credentialing was spotless and their caregivers are kind and capable.",
    name: "Director of Nursing",
    role: "Assisted Living Community",
  },
  {
    quote:
      "They listened to what I actually wanted instead of throwing me at any open job. Two weeks later I was hired on permanently.",
    name: "Maria T.",
    role: "Placed Candidate",
  },
];

export const faqs = [
  {
    q: "How quickly can you fill a position?",
    a: "For most light-industrial and administrative roles we present qualified candidates within 24–48 hours, and we keep an active bench so you're never starting from zero. Specialized healthcare roles may take a little longer to credential properly.",
  },
  {
    q: "What does it cost to work with 123 Go Staff?",
    a: "There's no cost to candidates — ever. For employers, we bill a transparent rate that includes wages, payroll taxes, workers' compensation, and onboarding. You only pay for hours worked, with no obligation until you say go.",
  },
  {
    q: "Do you handle payroll, taxes, and workers' comp?",
    a: "Yes. For contract and temp placements we are the employer of record. We carry workers' compensation, manage payroll and taxes, and handle I-9 and onboarding compliance so you don't have to.",
  },
  {
    q: "What if a placement isn't the right fit?",
    a: "Tell us early and we'll make it right with a fast replacement. Our model is built on accountability — we'd rather fix a fit issue quickly than leave you short-staffed.",
  },
];
