import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import Cta from "@/components/Cta";
import { values, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "123 Go Staff is a nurse-owned, people-first staffing agency built on listening first and matching carefully. Learn about our mission, values, and the difference we make for employers and job seekers.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Staffing built on listening first."
        description="123 Go Staff was founded on a simple belief: great staffing isn't about pushing resumes — it's about understanding people and connecting them to work where they'll truly thrive."
      />

      {/* Story */}
      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="section-title mt-4">A nurse's eye for people and care</h2>
            <div className="mt-5 space-y-4 text-navy-600/85">
              <p>
                Founded and led by a registered nurse, 123 Go Staff brings a
                caregiver's attention to detail into every placement. We know
                firsthand that the right person in the right role changes
                everything — for a patient, a production line, or a front desk.
              </p>
              <p>
                That's why we listen first and ask the pertinent questions before
                we ever make a match. We interview every candidate for both
                qualifications and soft skills, so the people we refer aren't just
                available — they're genuinely enthusiastic and ready to become
                engaged, dependable employees.
              </p>
              <p>
                From healthcare and senior care to warehouse, light industrial, and
                administrative roles, we've grown by doing right by both sides:
                employers who need reliable people, and people who deserve
                meaningful work.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-navy-50 bg-white p-6 text-center shadow-card">
                <p className="text-3xl font-extrabold text-brand-600">{s.value}</p>
                <p className="mt-2 text-xs leading-snug text-navy-600/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission banner */}
      <section className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-14 sm:px-12">
          <div className="pointer-events-none absolute -right-16 -top-10 h-56 w-56 rounded-full bg-brand-500/25 blur-3xl" />
          <div className="relative max-w-3xl">
            <Icon name="quote" className="h-10 w-10 text-brand-400" />
            <p className="mt-4 text-2xl font-semibold leading-snug text-white sm:text-3xl">
              "Behind every job order is a person and a livelihood. We treat
              candidates and clients like partners — not transactions."
            </p>
            <p className="mt-5 text-sm font-medium uppercase tracking-wider text-brand-300">
              The 123 Go Staff promise
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-page py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">What we stand for</p>
          <h2 className="section-title mt-4">Values that guide every placement</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <div key={v.title} className="card card-hover">
              <span className="text-sm font-black text-brand-200">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-bold text-navy-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600/80">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Cta />
    </>
  );
}
