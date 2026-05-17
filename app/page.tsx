import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import ProgressCard from "@/components/ProgressCard";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { NAV } from "@/lib/nav";

export default function Overview() {
  return (
    <>
      <Topbar
        title="Command Center"
        subtitle="Every mission, every dollar, every rep — one view."
      />

      <section className="section-grid">
        <StatCard label="Pipeline Revenue (5mo target)" value="$10,000,000" hint="Stretch: $10M in 5 months" accent="gold" />
        <StatCard label="Mecca Fund Raised" value="$0" delta="+0% MoM" hint="Adella Alim Academy" accent="emerald" />
        <StatCard label="Active Roles Stacked" value="0 / 6" hint="Founder · Ops · Sales · Media · Coach · Investor" accent="violet" />
        <StatCard label="Kids Enrolled (AI Tools)" value="0" hint="Science · Reading · Math" accent="sky" />
        <StatCard label="Gym Sessions This Week" value="0 / 6" hint="Strength + conditioning" accent="rose" />
        <StatCard label="Quran Pages Memorized" value="0" hint="Daily ḥifẓ" accent="gold" />
      </section>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <ProgressCard title="Path to $10M (5 months)" current={0} target={10_000_000} caption="Sales + farm + ads + property income combined." />
        <ProgressCard title="Mecca Trip Fund" current={0} target={150_000} caption="Goal: send the first cohort of Adella Alim Academy kids to Mecca." />
      </div>

      <div className="mt-10">
        <SectionHeader title="Quick jump" description="All command-center sections." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {NAV.filter((n) => n.href !== "/").map((n) => (
            <Link key={n.href} href={n.href} className="card card-hover flex items-center gap-3">
              <span className="h-10 w-10 grid place-items-center rounded-xl bg-ink-800 border border-ink-700 text-lg">
                {n.icon}
              </span>
              <div>
                <div className="text-white text-sm font-medium">{n.label}</div>
                <div className="text-xs text-gray-400">{n.href}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
