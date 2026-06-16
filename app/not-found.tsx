import Link from "next/link";
import Icon from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-6xl font-black text-brand-200">404</p>
      <h1 className="mt-4 text-2xl font-bold text-navy-900">Page not found</h1>
      <p className="mt-3 max-w-md text-navy-600/80">
        That page took a different shift. Let's get you back to where the work is.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back home <Icon name="arrow" className="h-4 w-4" />
      </Link>
    </section>
  );
}
