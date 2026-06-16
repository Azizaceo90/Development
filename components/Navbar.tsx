"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-50 bg-white/85 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                  active
                    ? "text-brand-600"
                    : "text-navy-600/90 hover:bg-brand-50 hover:text-brand-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className="btn-ghost px-4 py-2">
            Find Work
          </Link>
          <Link href="/employers" className="btn-primary px-4 py-2">
            Hire Talent
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy-100 text-navy-800 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-navy-50 bg-white md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  pathname === item.href ? "bg-brand-50 text-brand-600" : "text-navy-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-3">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-ghost flex-1">
                Find Work
              </Link>
              <Link href="/employers" onClick={() => setOpen(false)} className="btn-primary flex-1">
                Hire Talent
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
