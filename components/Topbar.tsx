export default function Topbar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between border-b border-ink-700/50 pb-6 mb-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">{title}</h1>
        {subtitle && <p className="text-sm text-gray-400 mt-1">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-2">
        <button className="btn-ghost">Export</button>
        <button className="btn-primary">+ Add</button>
      </div>
    </div>
  );
}
