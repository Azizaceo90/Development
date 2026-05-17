import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import ProgressCard from "@/components/ProgressCard";
import SectionHeader from "@/components/SectionHeader";

const recent = [
  { name: "Anonymous", amount: 0, note: "Awaiting first donor", date: "—" },
];

const tiers = [
  { name: "Seed", price: 25, perks: "Name on the academy wall" },
  { name: "Builder", price: 250, perks: "Sponsor 1 child's school month" },
  { name: "Pilgrim", price: 1500, perks: "Send 1 child to Mecca" },
  { name: "Founder", price: 10000, perks: "Sponsor a full classroom + trip" },
];

export default function Donations() {
  return (
    <>
      <Topbar
        title="Mecca Donations · Adella Alim Academy"
        subtitle="Tracking funds raised to send our kids to Mecca."
      />

      <section className="section-grid">
        <StatCard label="Total Raised" value="$0" accent="emerald" hint="Lifetime" />
        <StatCard label="Donors" value="0" accent="gold" />
        <StatCard label="Kids Sponsored" value="0" accent="violet" hint="Goal: 100" />
        <StatCard label="Avg Donation" value="$0" accent="sky" />
      </section>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <ProgressCard title="Mecca Trip Fund" current={0} target={150_000} caption="$1,500 covers travel for 1 child." />
        <ProgressCard title="Monthly Operating Fund" current={0} target={12_000} caption="Teachers, AI tools, lunches." />
      </div>

      <div className="mt-10">
        <SectionHeader title="Donation tiers" description="Choose a way to show up." />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {tiers.map((t) => (
            <div key={t.name} className="card card-hover">
              <div className="label">{t.name}</div>
              <div className="metric mt-2">${t.price.toLocaleString()}</div>
              <p className="mt-3 text-sm text-gray-400">{t.perks}</p>
              <button className="btn-primary mt-4 w-full">Donate</button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <SectionHeader title="Recent donations" />
        <div className="card overflow-hidden p-0">
          <table className="w-full text-sm">
            <thead className="bg-ink-800/60 text-gray-400">
              <tr>
                <th className="text-left px-5 py-3">Donor</th>
                <th className="text-left px-5 py-3">Amount</th>
                <th className="text-left px-5 py-3">Note</th>
                <th className="text-left px-5 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((r, i) => (
                <tr key={i} className="border-t border-ink-700/60">
                  <td className="px-5 py-3 text-white">{r.name}</td>
                  <td className="px-5 py-3">${r.amount.toLocaleString()}</td>
                  <td className="px-5 py-3 text-gray-400">{r.note}</td>
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
