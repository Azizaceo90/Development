"use client";

import { useState } from "react";
import Icon from "./Icon";
import { site } from "@/lib/site";

type Variant = "employer" | "seeker" | "contact";

const fieldBase =
  "w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100";

export default function LeadForm({ variant = "contact" }: { variant?: Variant }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const lines = Array.from(data.entries())
      .filter(([, v]) => String(v).trim().length > 0)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    const subject =
      variant === "employer"
        ? "Talent request — 123 Go Staff"
        : variant === "seeker"
        ? "Job application — 123 Go Staff"
        : "Website inquiry — 123 Go Staff";
    // Graceful fallback with no backend: open a pre-filled email.
    window.location.href = `${site.emailHref}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white">
          <Icon name="check" className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-lg font-bold text-navy-900">Thanks — we're on it!</h3>
        <p className="mt-2 text-sm text-navy-600/80">
          Your email app should have opened with the details ready to send. Prefer
          to talk now? Call us at{" "}
          <a href={site.phoneHref} className="font-semibold text-brand-600">{site.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-800">Full name</label>
          <input id="name" name="Name" required className={fieldBase} placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-800">Email</label>
          <input id="email" name="Email" type="email" required className={fieldBase} placeholder="jane@example.com" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-800">Phone</label>
          <input id="phone" name="Phone" type="tel" className={fieldBase} placeholder="(555) 123-4567" />
        </div>
        {variant === "employer" && (
          <div>
            <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-navy-800">Company</label>
            <input id="company" name="Company" className={fieldBase} placeholder="Acme Distribution" />
          </div>
        )}
        {variant === "seeker" && (
          <div>
            <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-navy-800">Desired role</label>
            <input id="role" name="Desired role" className={fieldBase} placeholder="Warehouse, CNA, admin…" />
          </div>
        )}
        {variant === "contact" && (
          <div>
            <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-navy-800">I'm a…</label>
            <select id="topic" name="I am a" className={fieldBase}>
              <option>Employer looking to hire</option>
              <option>Job seeker</option>
              <option>Something else</option>
            </select>
          </div>
        )}
      </div>

      {variant === "employer" && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="positions" className="mb-1.5 block text-sm font-medium text-navy-800"># of positions</label>
            <input id="positions" name="Positions" className={fieldBase} placeholder="e.g. 5" />
          </div>
          <div>
            <label htmlFor="industry" className="mb-1.5 block text-sm font-medium text-navy-800">Industry</label>
            <select id="industry" name="Industry" className={fieldBase}>
              <option>Healthcare & Senior Care</option>
              <option>Warehouse & Distribution</option>
              <option>Manufacturing</option>
              <option>Logistics & Fulfillment</option>
              <option>Office & Administrative</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-800">
          {variant === "employer" ? "Tell us about the roles" : variant === "seeker" ? "Tell us about your experience" : "How can we help?"}
        </label>
        <textarea id="message" name="Details" rows={4} className={fieldBase} placeholder="A few details help us match faster…" />
      </div>

      <button type="submit" className="btn-primary w-full text-base">
        {variant === "employer" ? "Request talent" : variant === "seeker" ? "Apply now" : "Send message"}
        <Icon name="arrow" className="h-4 w-4" />
      </button>
      <p className="text-center text-xs text-navy-500">
        We'll respond within one business day. No spam, ever.
      </p>
    </form>
  );
}
