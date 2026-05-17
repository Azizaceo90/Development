export default function StatCard({
  label,
  value,
  delta,
  hint,
  accent = "gold",
}: {
  label: string;
  value: string;
  delta?: string;
  hint?: string;
  accent?: "gold" | "emerald" | "violet" | "sky" | "rose";
}) {
  const ring = {
    gold: "from-accent-gold/30",
    emerald: "from-accent-emerald/30",
    violet: "from-accent-violet/30",
    sky: "from-accent-sky/30",
    rose: "from-accent-rose/30",
  }[accent];
  return (
    <div className={`card card-hover relative overflow-hidden`}>
      <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl bg-gradient-to-br ${ring} to-transparent`} />
      <div className="label">{label}</div>
      <div className="metric mt-2">{value}</div>
      <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
        {delta && (
          <span className="text-accent-emerald font-medium">{delta}</span>
        )}
        {hint && <span>{hint}</span>}
      </div>
    </div>
  );
}
