import Link from "next/link";
import Icon from "./Icon";

type CtaProps = {
  title?: string;
  subtitle?: string;
};

export default function Cta({
  title = "Ready to get staffed up?",
  subtitle = "Whether you need reliable people or your next opportunity, let's talk. Tell us what you need and we'll take it from there.",
}: CtaProps) {
  return (
    <section className="container-page py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 text-center sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-40" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-navy-100/80">{subtitle}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/employers" className="btn-primary">
              Request Talent
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link href="/job-seekers" className="btn-on-dark">
              Find a Job
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
