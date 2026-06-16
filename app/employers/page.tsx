import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import LeadForm from "@/components/LeadForm";
import { services, employerSteps, faqs, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Employers",
  description:
    "Hire vetted, reliable talent fast. 123 Go Staff offers temp, temp-to-hire, and direct placement across healthcare, warehouse, light industrial, and administrative roles — with payroll and compliance handled.",
};

export default function EmployersPage() {
  return (
    <>
      <PageHeader
        eyebrow="For Employers"
        title="Staff up with people who show up."
        description="Skip the resume pile. Tell us what you need and get pre-screened, motivated talent matched to your shift and culture — often within 48 hours, with payroll and compliance fully handled."
      />

      {/* Stats */}
      <section className="border-b border-navy-50 bg-navy-50/40">
        <div className="container-page grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-extrabold text-brand-600 sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs leading-snug text-navy-600/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Capabilities</p>
          <h2 className="section-title mt-4">One partner for your whole workforce</h2>
          <p className="section-sub">
            Whether you need one critical hire or a full crew, we cover the roles,
            the paperwork, and the accountability.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      </section>

      {/* Process */}
      <section className="border-y border-navy-50 bg-navy-50/40 py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">The process</p>
            <h2 className="section-title mt-4">Simple, fast, and accountable</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {employerSteps.map((step) => (
              <div key={step.step} className="rounded-2xl border border-navy-50 bg-white p-6 shadow-card">
                <span className="text-4xl font-black text-brand-100">{step.step}</span>
                <h3 className="mt-3 text-base font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + FAQ */}
      <section className="container-page grid gap-12 py-20 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Request talent</p>
          <h2 className="section-title mt-4">Tell us what you need</h2>
          <p className="section-sub mb-8">
            Share a few details and we'll come back within one business day with a
            plan and pricing — no obligation.
          </p>
          <div className="card">
            <LeadForm variant="employer" />
          </div>
        </div>

        <div className="lg:pt-16">
          <h3 className="text-xl font-bold text-navy-900">Employer FAQs</h3>
          <dl className="mt-6 divide-y divide-navy-50">
            {faqs.map((f) => (
              <div key={f.q} className="py-5">
                <dt className="flex items-start gap-3 text-base font-semibold text-navy-900">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-brand-500" />
                  {f.q}
                </dt>
                <dd className="mt-2 pl-7 text-sm leading-relaxed text-navy-600/80">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
