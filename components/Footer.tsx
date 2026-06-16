import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { site, nav } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-100/70">
              {site.tagline} A people-first staffing partner connecting great
              employers with reliable, motivated talent.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-lg border border-white/15 p-2 text-white/80 transition hover:border-brand-400 hover:text-brand-400">
                <Icon name="instagram" className="h-5 w-5" />
              </a>
              <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg border border-white/15 p-2 text-white/80 transition hover:border-brand-400 hover:text-brand-400">
                <Icon name="linkedin" className="h-5 w-5" />
              </a>
              <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-lg border border-white/15 p-2 text-white/80 transition hover:border-brand-400 hover:text-brand-400">
                <Icon name="facebook" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-navy-100/70 transition hover:text-brand-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-navy-100/70">
              <li>Healthcare & Care Staffing</li>
              <li>Light Industrial & Warehouse</li>
              <li>Administrative & Clerical</li>
              <li>Temp & Direct Hire</li>
              <li>Payroll & Compliance</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-100/70">
              <li className="flex items-start gap-2.5">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a href={site.phoneHref} className="hover:text-brand-400">{site.phone}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a href={site.emailHref} className="hover:text-brand-400">{site.email}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-navy-100/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Equal Opportunity Employer · E-Verify participant</p>
        </div>
      </div>
    </footer>
  );
}
