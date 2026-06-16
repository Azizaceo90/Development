import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with 123 Go Staff. Call, email, or send a message and we'll respond within one business day — for employers looking to hire and job seekers looking for work.",
};

const channels = [
  { icon: "phone", label: "Call us", value: site.phone, href: site.phoneHref },
  { icon: "mail", label: "Email", value: site.email, href: site.emailHref },
  { icon: "clock", label: "Hours", value: site.hours },
  { icon: "pin", label: "Coverage", value: site.address },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk staffing."
        description="Whether you're hiring or job hunting, we're quick to respond and easy to reach. Tell us how we can help and we'll get back to you within one business day."
      />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="eyebrow">Reach us directly</p>
          <h2 className="section-title mt-4">We're here to help</h2>
          <p className="section-sub mb-8">
            Prefer to talk to a person? Call or email and you'll reach a real
            member of our team — not a phone tree.
          </p>

          <div className="space-y-4">
            {channels.map((c) => (
              <div key={c.label} className="flex items-start gap-4 rounded-2xl border border-navy-50 bg-white p-5 shadow-card">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={c.icon} className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-base font-semibold text-navy-900 hover:text-brand-600">{c.value}</a>
                  ) : (
                    <p className="text-base font-semibold text-navy-900">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-xl border border-navy-100 p-3 text-navy-700 transition hover:border-brand-300 hover:text-brand-600">
              <Icon name="instagram" className="h-5 w-5" />
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-xl border border-navy-100 p-3 text-navy-700 transition hover:border-brand-300 hover:text-brand-600">
              <Icon name="linkedin" className="h-5 w-5" />
            </a>
            <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-xl border border-navy-100 p-3 text-navy-700 transition hover:border-brand-300 hover:text-brand-600">
              <Icon name="facebook" className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="card sm:p-8">
            <h3 className="text-lg font-bold text-navy-900">Send us a message</h3>
            <p className="mt-1 mb-6 text-sm text-navy-600/80">
              Fill out the form and we'll route it to the right person.
            </p>
            <LeadForm variant="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
