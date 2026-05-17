import Topbar from "@/components/Topbar";
import SectionHeader from "@/components/SectionHeader";

const facts = [
  {
    year: "1930",
    title: "Founding in Detroit",
    body: "W.D. Fard Muhammad establishes the Nation of Islam in Detroit, Michigan, teaching self-knowledge, discipline, and economic independence.",
  },
  {
    year: "1934",
    title: "Elijah Muhammad assumes leadership",
    body: "After Fard's departure, the Honorable Elijah Muhammad becomes the leader of the Nation, building temples and the Muhammad University of Islam.",
  },
  {
    year: "1945",
    title: "Economic Blueprint",
    body: "Elijah Muhammad publishes the 'Economic Blueprint' encouraging the community to pool resources, buy land, and build businesses.",
  },
  {
    year: "1952",
    title: "Malcolm X joins the Nation",
    body: "Malcolm Little, after meeting the Nation in prison, takes the X and becomes the most prominent national spokesperson.",
  },
  {
    year: "1959",
    title: "'The Hate That Hate Produced'",
    body: "Mike Wallace's documentary thrusts the Nation of Islam into national American consciousness.",
  },
  {
    year: "1961",
    title: "Muhammad Speaks newspaper",
    body: "Launched as the Nation's official paper; at peak, the most widely circulated Black newspaper in America.",
  },
  {
    year: "1964",
    title: "Cassius Clay → Muhammad Ali",
    body: "Heavyweight champion Cassius Clay announces his membership and is renamed Muhammad Ali by Elijah Muhammad.",
  },
  {
    year: "1975",
    title: "Transition under W. Deen Mohammed",
    body: "After Elijah Muhammad's passing, his son W. Deen Mohammed leads a transition toward Sunni Islam for much of the community.",
  },
  {
    year: "1977",
    title: "Reconstitution under Minister Farrakhan",
    body: "Minister Louis Farrakhan rebuilds the original Nation of Islam, returning to the teachings of the Honorable Elijah Muhammad.",
  },
  {
    year: "1995",
    title: "Million Man March",
    body: "On October 16, Minister Farrakhan convenes the Million Man March in Washington, D.C. — atonement, reconciliation, responsibility.",
  },
];

export default function NOIHistory() {
  return (
    <>
      <Topbar
        title="Nation of Islam · Historical Facts"
        subtitle="Key milestones for study and reference."
      />

      <SectionHeader title="Timeline" description="Chronological reference card stack." />
      <ol className="relative border-l border-ink-700/70 pl-6 space-y-6">
        {facts.map((f) => (
          <li key={f.year} className="card card-hover">
            <div className="absolute -left-[34px] mt-1 h-3 w-3 rounded-full bg-accent-gold ring-4 ring-ink-950" />
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-white font-semibold">{f.title}</h3>
              <span className="chip">{f.year}</span>
            </div>
            <p className="mt-2 text-sm text-gray-300 leading-relaxed">{f.body}</p>
          </li>
        ))}
      </ol>

      <p className="mt-8 text-xs text-gray-500">
        Educational reference. Verify against primary sources (Muhammad Speaks archive, The Final Call, autobiographies).
      </p>
    </>
  );
}
