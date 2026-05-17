import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import ProgressCard from "@/components/ProgressCard";
import SectionHeader from "@/components/SectionHeader";

const roles = [
  { name: "Founder / CEO", focus: "Vision, capital, dealmaking", weekly: "10h", revenue: "Equity" },
  { name: "Head of Sales", focus: "Pipeline, closing, scripts", weekly: "15h", revenue: "$3M target" },
  { name: "Media / Marketing", focus: "Paid ads, content, brand", weekly: "10h", revenue: "$2M target" },
  { name: "Operator / Ops", focus: "Systems, hiring, SOPs", weekly: "10h", revenue: "Cost reduction" },
  { name: "Coach / Educator", focus: "Adella Alim Academy, courses", weekly: "5h", revenue: "$1.5M target" },
  { name: "Investor", focus: "Property, farm, alt assets", weekly: "5h", revenue: "$3.5M target" },
];

const months = [
  { m: "M1", goal: 250_000, theme: "Foundation · offers · 30 calls/day" },
  { m: "M2", goal: 750_000, theme: "Paid ads on · sales hire · webinars" },
  { m: "M3", goal: 1_500_000, theme: "Team to 5 · partnerships · case studies" },
  { m: "M4", goal: 3_000_000, theme: "Scale ads · upsells · enterprise deals" },
  { m: "M5", goal: 4_500_000, theme: "Compounding · referrals · launches" },
];

export default function Business() {
  return (
    <>
      <Topbar
        title="6 Roles · Scale to $10M in 5 months"
        subtitle="Stack roles, install systems, compound revenue."
      />

      <section className="section-grid">
        <StatCard label="Revenue Target (5mo)" value="$10M" accent="gold" />
        <StatCard label="MRR" value="$0" accent="emerald" />
        <StatCard label="Pipeline Value" value="$0" accent="violet" />
        <StatCard label="Roles Active" value="0 / 6" accent="sky" />
      </section>

      <div className="mt-10">
        <SectionHeader title="The 6 roles" description="Each role has a weekly time budget and a revenue contribution target." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <div key={r.name} className="card card-hover">
              <div className="label">Role</div>
              <div className="text-lg font-semibold text-white mt-1">{r.name}</div>
              <p className="mt-2 text-sm text-gray-400">{r.focus}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-lg bg-ink-800 px-3 py-2">
                  <div className="label">Weekly</div>
                  <div className="text-white mt-0.5">{r.weekly}</div>
                </div>
                <div className="rounded-lg bg-ink-800 px-3 py-2">
                  <div className="label">Revenue</div>
                  <div className="text-white mt-0.5">{r.revenue}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <SectionHeader title="5-month revenue plan" description="$10M split across months · adjust as you go." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {months.map((m) => (
            <div key={m.m} className="card card-hover">
              <div className="label">{m.m}</div>
              <div className="metric mt-1 text-2xl">${(m.goal / 1000).toFixed(0)}K</div>
              <p className="mt-2 text-xs text-gray-400">{m.theme}</p>
              <div className="progress mt-3"><span style={{ width: "0%" }} /></div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <ProgressCard title="Path to $10M" current={0} target={10_000_000} />
        <ProgressCard title="Roles stacked" current={0} target={6} unit="roles" />
      </div>
    </>
  );
}
