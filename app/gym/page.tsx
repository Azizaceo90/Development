import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import SectionHeader from "@/components/SectionHeader";

const split = [
  { day: "Mon", focus: "Push (Chest · Shoulders · Triceps)", lifts: ["Bench 5x5", "OHP 4x6", "Incline DB 3x8", "Dips 3x10"] },
  { day: "Tue", focus: "Pull (Back · Biceps)", lifts: ["Deadlift 5x3", "Pull-ups 4x AMRAP", "Row 4x8", "Curl 3x10"] },
  { day: "Wed", focus: "Legs", lifts: ["Squat 5x5", "RDL 4x8", "Lunges 3x10", "Calf raise 4x15"] },
  { day: "Thu", focus: "Conditioning", lifts: ["Sled 10 rounds", "Sprints 6x100m", "Core circuit"] },
  { day: "Fri", focus: "Upper hypertrophy", lifts: ["Incline bench 4x8", "Cable row 4x10", "Lateral raise 4x12", "Skullcrushers 3x10"] },
  { day: "Sat", focus: "Lower hypertrophy + abs", lifts: ["Front squat 4x6", "Hip thrust 4x8", "Leg curl 3x10", "Hanging leg raise 3x12"] },
  { day: "Sun", focus: "Recovery", lifts: ["Walk 60 min", "Mobility 30 min", "Sauna"] },
];

export default function Gym() {
  return (
    <>
      <Topbar title="Gym · Workouts" subtitle="6-day push/pull/legs split with conditioning." />

      <section className="section-grid">
        <StatCard label="Body Weight" value="—" accent="rose" />
        <StatCard label="Bench / Squat / DL" value="— / — / —" accent="gold" />
        <StatCard label="Sessions This Month" value="0 / 24" accent="emerald" />
        <StatCard label="Avg Sleep" value="—" accent="sky" />
      </section>

      <div className="mt-10">
        <SectionHeader title="Weekly split" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {split.map((d) => (
            <div key={d.day} className="card card-hover">
              <div className="flex items-center justify-between">
                <div className="metric text-2xl">{d.day}</div>
                <span className="chip">{d.focus.split(" ")[0]}</span>
              </div>
              <div className="mt-2 text-sm text-gray-300">{d.focus}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {d.lifts.map((l) => (
                  <li key={l} className="flex items-center gap-2 text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-rose" />
                    {l}
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
