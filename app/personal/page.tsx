import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import ProgressCard from "@/components/ProgressCard";
import SectionHeader from "@/components/SectionHeader";

const habits = [
  { name: "Fajr on time", streak: 0, target: 30 },
  { name: "Read 30 min", streak: 0, target: 30 },
  { name: "Cold shower", streak: 0, target: 30 },
  { name: "Journal", streak: 0, target: 30 },
  { name: "No screens after 9pm", streak: 0, target: 30 },
];

const books = [
  "The 48 Laws of Power · Robert Greene",
  "The Autobiography of Malcolm X",
  "Message to the Blackman in America · Elijah Muhammad",
  "Atomic Habits · James Clear",
  "Deep Work · Cal Newport",
];

export default function Personal() {
  return (
    <>
      <Topbar title="Personal Development" subtitle="Discipline compounds. Show up daily." />

      <section className="section-grid">
        <StatCard label="Current Streak" value="0 days" accent="gold" />
        <StatCard label="Books This Year" value="0" accent="emerald" hint="Goal: 24" />
        <StatCard label="Deep Work Hours" value="0h" accent="violet" hint="Weekly goal: 25h" />
        <StatCard label="Sleep Avg" value="—" accent="sky" />
      </section>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="card">
          <SectionHeader title="Daily habits" />
          <ul className="space-y-3">
            {habits.map((h) => (
              <li key={h.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white">{h.name}</span>
                  <span className="text-gray-400">
                    {h.streak} / {h.target}
                  </span>
                </div>
                <div className="progress mt-2">
                  <span style={{ width: `${(h.streak / h.target) * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <SectionHeader title="Reading queue" />
          <ul className="space-y-2 text-sm">
            {books.map((b) => (
              <li key={b} className="flex items-center gap-2 text-gray-300">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <ProgressCard title="90-Day Discipline Run" current={0} target={90} unit="days" />
        <ProgressCard title="Skill Stack Hours" current={0} target={500} unit="hrs" caption="Sales · media · ops · capital · health · faith" />
      </div>
    </>
  );
}
