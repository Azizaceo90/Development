import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import ProgressCard from "@/components/ProgressCard";
import SectionHeader from "@/components/SectionHeader";

const surahs = [
  { name: "Al-Fatiha", ayat: 7, status: "Memorized" },
  { name: "Al-Baqarah", ayat: 286, status: "In progress" },
  { name: "Aal-Imran", ayat: 200, status: "Queued" },
  { name: "An-Nisa", ayat: 176, status: "Queued" },
  { name: "Al-Maidah", ayat: 120, status: "Queued" },
];

export default function Quran() {
  return (
    <>
      <Topbar title="Spiritual Growth · Quran" subtitle="Daily recitation, memorization, and tafsir." />

      <section className="section-grid">
        <StatCard label="Pages Memorized" value="0" accent="gold" hint="of 604" />
        <StatCard label="Daily Recitation Streak" value="0 days" accent="emerald" />
        <StatCard label="Tafsir Lessons" value="0" accent="violet" />
        <StatCard label="Salah On Time" value="0 / 35 wk" accent="sky" />
      </section>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <ProgressCard title="Ḥifẓ progress (full Quran)" current={0} target={604} unit="pages" />
        <ProgressCard title="Khatm this year" current={0} target={4} unit="completions" caption="Read the full Quran 4× this year." />
      </div>

      <div className="mt-10">
        <SectionHeader title="Surah tracker" description="First 5 surahs · expand as you go." />
        <div className="card p-0 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-ink-800/60 text-gray-400">
              <tr>
                <th className="text-left px-5 py-3">Surah</th>
                <th className="text-left px-5 py-3">Ayat</th>
                <th className="text-left px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {surahs.map((s) => (
                <tr key={s.name} className="border-t border-ink-700/60">
                  <td className="px-5 py-3 text-white">{s.name}</td>
                  <td className="px-5 py-3 text-gray-400">{s.ayat}</td>
                  <td className="px-5 py-3">
                    <span className="chip">{s.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
