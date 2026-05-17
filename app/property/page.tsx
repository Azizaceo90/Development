import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import ProgressCard from "@/components/ProgressCard";
import SectionHeader from "@/components/SectionHeader";

const checklist = [
  { step: "Identify market & neighborhood", done: false },
  { step: "Pre-approval / proof of funds", done: false },
  { step: "Walk 10 properties", done: false },
  { step: "Make first offer (brick property)", done: false },
  { step: "Inspection + appraisal", done: false },
  { step: "Close & deed transfer", done: false },
  { step: "Rehab + tenant placement", done: false },
];

export default function Property() {
  return (
    <>
      <Topbar
        title="Brick Property · Order Pipeline"
        subtitle="Acquire the first brick property. Build the rent + appreciation engine."
      />

      <section className="section-grid">
        <StatCard label="Down Payment Saved" value="$0" accent="gold" hint="Target: $60K" />
        <StatCard label="Target Price" value="$300K" accent="emerald" />
        <StatCard label="Projected Monthly Rent" value="$0" accent="violet" />
        <StatCard label="Cap Rate Target" value="8%" accent="sky" />
      </section>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <ProgressCard title="Down payment fund" current={0} target={60_000} caption="20% on a $300K brick property." />
        <ProgressCard title="Reserves (6mo PITI)" current={0} target={15_000} caption="Lender will want this before close." />
      </div>

      <div className="mt-10">
        <SectionHeader title="Acquisition checklist" />
        <div className="card">
          <ul className="space-y-3">
            {checklist.map((c, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className={`h-5 w-5 rounded-md border ${c.done ? "bg-accent-emerald border-accent-emerald" : "border-ink-600"}`} />
                <span className={`text-sm ${c.done ? "text-gray-500 line-through" : "text-white"}`}>{c.step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <SectionHeader title="Underwriting (sample)" />
        <div className="card overflow-hidden p-0">
          <table className="w-full text-sm">
            <thead className="bg-ink-800/60 text-gray-400">
              <tr>
                <th className="text-left px-5 py-3">Metric</th>
                <th className="text-left px-5 py-3">Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Purchase price", "$300,000"],
                ["Down payment (20%)", "$60,000"],
                ["Loan @ 7% / 30yr", "$240,000"],
                ["P&I", "≈ $1,597 / mo"],
                ["Taxes + insurance", "≈ $450 / mo"],
                ["Target rent", "$2,650 / mo"],
                ["Cash flow", "≈ $600 / mo"],
              ].map(([k, v]) => (
                <tr key={k} className="border-t border-ink-700/60">
                  <td className="px-5 py-3 text-gray-400">{k}</td>
                  <td className="px-5 py-3 text-white">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
