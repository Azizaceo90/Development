import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import LeadForm from "@/components/LeadForm";
import { seekerBenefits, industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Job Seekers",
  description:
    "Find real work fast with 123 Go Staff. Weekly pay, supportive team, and roles that can lead to permanent hire — across healthcare, warehouse, and office jobs. Always free for job seekers.",
};

const steps = [
  { title: "Apply in minutes", description: "Send us your info and what you're looking for. No long forms, no fees." },
  { title: "Talk to a recruiter", description: "We listen to your skills, schedule, and goals — then match you to the right openings." },
  { title: "Start working", description: "Get placed with a vetted employer, often within days, with weekly pay from day one." },
];

export default function JobSeekersPage() {
  return (
    <>
      <PageHeader
        eyebrow="For Job Seekers"
        title="Your next opportunity starts here."
        description="Reliable work, weekly pay, and a team that actually listens to what you want — at no cost to you, ever. Many of our roles lead to permanent positions."
      />

      {/* Steps */}
      <section className="container-page py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title mt-4">Three steps to your next job</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="card">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 text-base font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600/80">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-navy-50 bg-navy-50/40 py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">Why work with us</p>
            <h2 className="section-title mt-4">We're in your corner</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {seekerBenefits.map((b) => (
              <div key={b.title} className="flex gap-4 rounded-2xl border border-navy-50 bg-white p-6 shadow-card">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name="star" className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-900">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-600/80">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply form */}
      <section className="container-page grid gap-12 py-20 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Hiring now</p>
          <h2 className="section-title mt-4">We're staffing across these fields</h2>
          <p className="section-sub">
            New roles open every week. Apply once and we'll keep you in mind as the
            right fit comes up.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {industries.map((ind) => (
              <span key={ind} className="rounded-full border border-navy-100 bg-white px-4 py-2 text-sm font-medium text-navy-700 shadow-sm">
                {ind}
              </span>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-brand-200 bg-brand-50 p-6">
            <p className="flex items-center gap-2 text-sm font-semibold text-brand-700">
              <Icon name="check" className="h-5 w-5" /> Always 100% free for job seekers
            </p>
            <p className="mt-2 text-sm text-navy-600/80">
              You never pay a fee to work with 123 Go Staff. Our clients cover the
              cost — your job is to do great work.
            </p>
          </div>
        </div>

        <div>
          <div className="card">
            <h3 className="text-lg font-bold text-navy-900">Apply now</h3>
            <p className="mt-1 mb-6 text-sm text-navy-600/80">It takes about two minutes.</p>
            <LeadForm variant="seeker" />
          </div>
        </div>
      </section>
    </>
  );
}
