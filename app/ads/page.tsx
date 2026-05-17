import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import SectionHeader from "@/components/SectionHeader";

const channels = [
  { name: "Meta (Facebook + Instagram)", spend: 0, leads: 0, cpl: "—", best: "Local awareness · video reels · radius 15mi" },
  { name: "Google Local Service Ads", spend: 0, leads: 0, cpl: "—", best: "Pay-per-lead for local services" },
  { name: "Google Search", spend: 0, leads: 0, cpl: "—", best: "High-intent keywords + call extensions" },
  { name: "YouTube (Local)", spend: 0, leads: 0, cpl: "—", best: "In-feed + skippable, geo-targeted" },
  { name: "TikTok Spark Ads", spend: 0, leads: 0, cpl: "—", best: "Boost organic creator content locally" },
  { name: "Nextdoor", spend: 0, leads: 0, cpl: "—", best: "Hyperlocal trust + farm box subscriptions" },
];

const playbook = [
  "Pick ONE offer per channel (farm box, donation match, free Quran class trial).",
  "Geo-target a 15-mile radius around farm + masjid.",
  "Use UGC video — 9:16, 15–30s, hook in first 1.5s.",
  "Send to a single-purpose landing page (one CTA, one form).",
  "Budget rule: start at $30/day per channel, cut anything > 2x target CPL after 3 days.",
  "Track every lead in the Sales dashboard. Call within 5 minutes.",
];

export default function Ads() {
  return (
    <>
      <Topbar
        title="Local Paid Ads"
        subtitle="Run paid traffic locally — farm, academy, donations, services."
      />

      <section className="section-grid">
        <StatCard label="Monthly Ad Spend" value="$0" accent="rose" />
        <StatCard label="Leads Generated" value="0" accent="emerald" />
        <StatCard label="Avg CPL" value="—" accent="gold" />
        <StatCard label="ROAS" value="—" accent="violet" hint="Target: 4x" />
      </section>

      <div className="mt-10">
        <SectionHeader title="Channels" description="Local-first paid traffic stack." />
        <div className="card p-0 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-ink-800/60 text-gray-400">
              <tr>
                <th className="text-left px-5 py-3">Channel</th>
                <th className="text-left px-5 py-3">Spend</th>
                <th className="text-left px-5 py-3">Leads</th>
                <th className="text-left px-5 py-3">CPL</th>
                <th className="text-left px-5 py-3">Best for</th>
              </tr>
            </thead>
            <tbody>
              {channels.map((c) => (
                <tr key={c.name} className="border-t border-ink-700/60">
                  <td className="px-5 py-3 text-white">{c.name}</td>
                  <td className="px-5 py-3">${c.spend}</td>
                  <td className="px-5 py-3">{c.leads}</td>
                  <td className="px-5 py-3 text-gray-400">{c.cpl}</td>
                  <td className="px-5 py-3 text-gray-400">{c.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="card">
          <SectionHeader title="Local-ads playbook" />
          <ul className="space-y-2 text-sm text-gray-300">
            {playbook.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-accent-gold">→</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <SectionHeader title="Creative pipeline" />
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• 5 hooks / week tested</li>
            <li>• 3 angles: emotional, practical, social proof</li>
            <li>• Subtitle every video (85% watch muted)</li>
            <li>• Refresh creative every 7–10 days to fight fatigue</li>
            <li>• Save winning ads to swipe file</li>
          </ul>
        </div>
      </div>
    </>
  );
}
