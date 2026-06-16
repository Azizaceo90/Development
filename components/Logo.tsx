import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="123 Go Staff home">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-sm font-black text-white shadow-glow transition group-hover:scale-105">
        123
      </span>
      <span className={`text-lg font-extrabold tracking-tight ${dark ? "text-white" : "text-navy-900"}`}>
        Go<span className="text-brand-500">Staff</span>
      </span>
    </Link>
  );
}
