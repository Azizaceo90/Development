import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import SectionHeader from "@/components/SectionHeader";

const tracks = [
  {
    name: "Science",
    color: "from-accent-sky/30",
    tools: ["NotebookLM for lesson research", "Khanmigo science tutor", "Wolfram Alpha", "PhET interactive sims"],
    goal: "1 experiment / week, documented with AI",
  },
  {
    name: "Reading",
    color: "from-accent-emerald/30",
    tools: ["Claude reading buddy", "Beanstack tracker", "Audible Kids", "Speechify for fluency"],
    goal: "1 book / 2 weeks · oral comprehension log",
  },
  {
    name: "Math",
    color: "from-accent-violet/30",
    tools: ["Khanmigo math coach", "Math Academy", "Photomath check work", "Brilliant.org puzzles"],
    goal: "Grade-level mastery + 1 grade above by EOY",
  },
];

export default function KidsAI() {
  return (
    <>
      <Topbar
        title="Kids AI Tools"
        subtitle="Adella Alim Academy — science, reading, math through AI tutors."
      />

      <section className="section-grid">
        <StatCard label="Active Students" value="0" accent="sky" hint="Goal: 25 in cohort 1" />
        <StatCard label="Weekly Hours / Student" value="0h" accent="emerald" hint="Target 6h" />
        <StatCard label="Tools Onboarded" value="0 / 12" accent="violet" />
        <StatCard label="Parent NPS" value="—" accent="gold" />
      </section>

      <div className="mt-10">
        <SectionHeader title="Learning tracks" description="Curriculum + AI tool stack per subject." />
        <div className="grid gap-5 lg:grid-cols-3">
          {tracks.map((t) => (
            <div key={t.name} className="card card-hover relative overflow-hidden">
              <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl bg-gradient-to-br ${t.color} to-transparent`} />
              <div className="label">Track</div>
              <div className="metric mt-1">{t.name}</div>
              <p className="mt-3 text-xs text-gray-400">{t.goal}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {t.tools.map((tool) => (
                  <li key={tool} className="flex items-center gap-2 text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
