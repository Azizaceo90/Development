export default function ProgressCard({
  title,
  current,
  target,
  unit = "$",
  caption,
}: {
  title: string;
  current: number;
  target: number;
  unit?: string;
  caption?: string;
}) {
  const pct = Math.min(100, Math.round((current / target) * 100));
  const fmt = (n: number) =>
    unit === "$" ? `$${n.toLocaleString()}` : `${n.toLocaleString()} ${unit}`;
  return (
    <div className="card card-hover">
      <div className="flex items-start justify-between">
        <div className="label">{title}</div>
        <span className="chip">{pct}%</span>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <div className="metric">{fmt(current)}</div>
        <div className="text-sm text-gray-400">of {fmt(target)}</div>
      </div>
      <div className="progress mt-4">
        <span style={{ width: `${pct}%` }} />
      </div>
      {caption && <p className="mt-3 text-xs text-gray-400">{caption}</p>}
    </div>
  );
}
