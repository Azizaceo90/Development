import Link from "next/link";
import Icon from "@/components/Icon";
import Cta from "@/components/Cta";
import { services, industries, stats, employerSteps, testimonials } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900">
        <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:34px_34px] opacity-30" />
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />

        <div className="container-page relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <p className="eyebrow border-white/15 bg-white/5 text-brand-300">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-400" />
              Nurse-owned · People-first staffing
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              The right people,
              <br />
              <span className="text-brand-400">ready to go.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100/80">
              123 Go Staff connects great employers with reliable, vetted talent in
              healthcare, warehouse, light industrial, and office roles — often
              within 48 hours. We listen first, match carefully, and stay
              accountable.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/employers" className="btn-primary text-base">
                Hire Talent
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/job-seekers" className="btn-on-dark text-base">
                Find Work
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-navy-100/70">
              <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-brand-400" /> No cost to job seekers</span>
              <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-brand-400" /> Vetted & background-checked</span>
              <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-brand-400" /> 24/7 support</span>
            </div>
          </div>

          {/* Hero card */}
          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Request talent</p>
                <span className="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold text-brand-300">
                  Avg. 48 hrs to fill
                </span>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  { role: "Certified Nursing Assistant", tag: "Healthcare", shift: "Nights · Full-time" },
                  { role: "Warehouse Associate (×4)", tag: "Industrial", shift: "1st shift · Temp-to-hire" },
                  { role: "Front Desk Coordinator", tag: "Administrative", shift: "Mon–Fri · Direct hire" },
                ].map((r) => (
                  <div key={r.role} className="flex items-center justify-between rounded-xl border border-white/10 bg-navy-800/60 p-4">
                    <div>
                      <p className="text-sm font-semibold text-white">{r.role}</p>
                      <p className="text-xs text-navy-100/60">{r.shift}</p>
                    </div>
                    <span className="rounded-md bg-white/5 px-2 py-1 text-[11px] font-medium text-brand-300">{r.tag}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 rounded-xl bg-brand-500 p-4 text-navy-900">
                <Icon name="spark" className="h-5 w-5" />
                <p className="text-sm font-semibold">3 roles matched & ready to interview</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-white/10 bg-navy-950/40">
          <div className="container-page grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <p className="text-2xl font-extrabold text-brand-400 sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-navy-100/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What we staff</p>
          <h2 className="section-title mt-4">Staffing solutions across every shift</h2>
          <p className="section-sub">
            From a single critical hire to a full crew, we deliver people who are
            ready, reliable, and the right fit for your team.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card card-hover group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
                <Icon name={s.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600/80">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {industries.map((ind) => (
            <span key={ind} className="rounded-full border border-navy-100 bg-navy-50/50 px-4 py-2 text-sm font-medium text-navy-700">
              {ind}
            </span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-navy-50 bg-navy-50/40 py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">How it works</p>
            <h2 className="section-title mt-4">From request to ready in four steps</h2>
            <p className="section-sub">
              A simple, accountable process built on listening first — so the
              people you meet actually fit.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {employerSteps.map((step) => (
              <div key={step.step} className="relative rounded-2xl border border-navy-50 bg-white p-6 shadow-card">
                <span className="text-4xl font-black text-brand-100">{step.step}</span>
                <h3 className="mt-3 text-base font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-column value: employers vs seekers */}
      <section className="container-page py-20 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col rounded-3xl border border-navy-50 bg-white p-8 shadow-card sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon name="users" className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-navy-900">For Employers</h3>
            <p className="mt-3 text-navy-600/80">
              Stop drowning in resumes. Get pre-screened, motivated talent matched
              to your shift, your skills, and your culture — with one partner
              accountable for results.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-navy-700">
              {["Flexible temp, temp-to-hire & direct hire", "We handle payroll, taxes & workers' comp", "Fast replacements, no questions asked"].map((li) => (
                <li key={li} className="flex items-start gap-2.5">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  {li}
                </li>
              ))}
            </ul>
            <Link href="/employers" className="btn-primary mt-8 self-start">
              Request talent <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col rounded-3xl border border-navy-50 bg-navy-900 p-8 shadow-card sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-300">
              <Icon name="spark" className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-white">For Job Seekers</h3>
            <p className="mt-3 text-navy-100/80">
              Real opportunities with great employers, weekly pay, and a team that
              listens to what you actually want — at no cost to you, ever.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-navy-100/90">
              {["Get to work in days, not weeks", "Weekly pay & a real person to call", "Many roles lead to permanent hire"].map((li) => (
                <li key={li} className="flex items-start gap-2.5">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  {li}
                </li>
              ))}
            </ul>
            <Link href="/job-seekers" className="btn-primary mt-8 self-start">
              Find work <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-navy-50 bg-navy-50/40 py-20 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What people say</p>
            <h2 className="section-title mt-4">Trusted on both sides of the table</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-2xl border border-navy-50 bg-white p-7 shadow-card">
                <Icon name="quote" className="h-8 w-8 text-brand-200" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy-700">“{t.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-navy-50 pt-4">
                  <p className="text-sm font-bold text-navy-900">{t.name}</p>
                  <p className="text-xs text-navy-600/70">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
