type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-navy-50 bg-navy-900">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-30" />
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl" />
      <div className="container-page relative py-16 sm:py-20">
        <p className="eyebrow border-white/15 bg-white/5 text-brand-300">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100/80">{description}</p>
        )}
      </div>
    </section>
  );
}
