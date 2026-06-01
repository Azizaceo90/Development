import Link from "next/link";
import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import SectionHeader from "@/components/SectionHeader";
import { CPT_CODES, ICD_CODES, MODIFIERS } from "@/lib/medical-codes";

const workflows = [
  {
    href: "/inpatient",
    title: "Inpatient Coding",
    icon: "🛏",
    desc: "Principal diagnosis, MCC/CC capture, and procedures coded from the admission note with DRG severity.",
  },
  {
    href: "/outpatient",
    title: "Outpatient Coding",
    icon: "🩺",
    desc: "First-listed diagnosis, E/M level, and CPT services for clinic, ED, and same-day surgery encounters.",
  },
  {
    href: "/verify",
    title: "CPT Verifier",
    icon: "✓",
    desc: "Validate CPT Category I/II/III and HCPCS Level II codes — format, category, modifiers, and fee.",
  },
];

const queue = [
  { mrn: "—", type: "Inpatient", note: "Awaiting first chart", status: "Unassigned" },
  { mrn: "—", type: "Outpatient", note: "Awaiting first chart", status: "Unassigned" },
];

export default function Home() {
  return (
    <>
      <Topbar
        title="Medical Coding & Billing"
        subtitle="Epic-style coding workspace — inpatient & outpatient, ICD-10-CM + CPT/HCPCS, with CPT verification."
      />

      <section className="section-grid">
        <StatCard label="CPT / HCPCS in set" value={String(CPT_CODES.length)} accent="gold" hint="Category I/II/III + HCPCS" />
        <StatCard label="ICD-10-CM in set" value={String(ICD_CODES.length)} accent="emerald" hint="Diagnosis reference" />
        <StatCard label="Modifiers" value={String(MODIFIERS.length)} accent="violet" />
        <StatCard label="Charts in queue" value={String(queue.length)} accent="sky" hint="Pending coder review" />
      </section>

      <div className="mt-10">
        <SectionHeader title="Coding workflows" description="Pick a setting or verify codes directly." />
        <div className="grid gap-4 md:grid-cols-3">
          {workflows.map((w) => (
            <Link key={w.href} href={w.href} className="card card-hover block">
              <div className="text-2xl">{w.icon}</div>
              <div className="mt-3 text-lg font-semibold text-white">{w.title}</div>
              <p className="mt-2 text-sm text-gray-400">{w.desc}</p>
              <div className="mt-4 text-sm text-accent-gold">Open →</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <SectionHeader title="Coding queue" description="Charts pending review from clinical documentation." />
        <div className="card p-0 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-ink-800/60 text-gray-400">
              <tr>
                <th className="text-left px-5 py-3">MRN</th>
                <th className="text-left px-5 py-3">Setting</th>
                <th className="text-left px-5 py-3">Note</th>
                <th className="text-left px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {queue.map((q, i) => (
                <tr key={i} className="border-t border-ink-700/60">
                  <td className="px-5 py-3 font-mono text-white">{q.mrn}</td>
                  <td className="px-5 py-3 text-gray-300">{q.type}</td>
                  <td className="px-5 py-3 text-gray-400">{q.note}</td>
                  <td className="px-5 py-3"><span className="chip">{q.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
