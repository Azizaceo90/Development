import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import ProgressCard from "@/components/ProgressCard";
import SectionHeader from "@/components/SectionHeader";

const pipeline = [
  { stage: "Lead", count: 0, value: 0 },
  { stage: "Qualified", count: 0, value: 0 },
  { stage: "Proposal", count: 0, value: 0 },
  { stage: "Negotiation", count: 0, value: 0 },
  { stage: "Closed Won", count: 0, value: 0 },
];

const recent = [
  { name: "—", product: "—", value: 0, status: "Awaiting first deal", date: "—" },
];

export default function Sales() {
  return (
    <>
      <Topbar title="Sales Dashboard" subtitle="Pipeline, deals, and conversion at a glance." />

      <section className="section-grid">
        <StatCard label="MRR" value="$0" accent="emerald" delta="+0%" />
        <StatCard label="Closed This Month" value="$0" accent="gold" />
        <StatCard label="Calls Booked" value="0" accent="violet" hint="Target: 200" />
        <StatCard label="Show-up Rate" value="—" accent="sky" />
      </section>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <ProgressCard title="Month-to-date" current={0} target={500_000} caption="Monthly revenue goal" />
        <ProgressCard title="Quarter-to-date" current={0} target={2_500_000} caption="Quarterly revenue goal" />
      </div>

      <div className="mt-10">
        <SectionHeader title="Pipeline by stage" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {pipeline.map((p) => (
            <div key={p.stage} className="card card-hover">
              <div className="label">{p.stage}</div>
              <div className="metric mt-1 text-2xl">{p.count}</div>
              <div className="mt-1 text-xs text-gray-400">${p.value.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <SectionHeader title="Recent deals" />
        <div className="card p-0 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-ink-800/60 text-gray-400">
              <tr>
                <th className="text-left px-5 py-3">Client</th>
                <th className="text-left px-5 py-3">Product</th>
                <th className="text-left px-5 py-3">Value</th>
                <th className="text-left px-5 py-3">Status</th>
                <th className="text-left px-5 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((r, i) => (
                <tr key={i} className="border-t border-ink-700/60">
                  <td className="px-5 py-3 text-white">{r.name}</td>
                  <td className="px-5 py-3 text-gray-400">{r.product}</td>
                  <td className="px-5 py-3">${r.value.toLocaleString()}</td>
                  <td className="px-5 py-3"><span className="chip">{r.status}</span></td>
                  <td className="px-5 py-3 text-gray-400">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
