"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, GROUPS } from "@/lib/nav";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden lg:flex lg:w-72 flex-col border-r border-ink-700/60 bg-ink-900/80 backdrop-blur sticky top-0 h-screen">
      <div className="px-6 py-6 border-b border-ink-700/60">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-accent-gold to-amber-700 grid place-items-center text-ink-950 font-bold">
            ⌘
          </div>
          <div>
            <div className="font-semibold tracking-tight text-white">MedCode</div>
            <div className="text-xs text-gray-400">Coding &amp; Billing</div>
          </div>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {GROUPS.map((g) => (
          <div key={g.key}>
            <div className="label px-3 pb-2">{g.label}</div>
            <ul className="space-y-1">
              {NAV.filter((n) => n.group === g.key).map((n) => {
                const active = pathname === n.href;
                return (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                        active
                          ? "bg-ink-800 text-white border border-ink-700"
                          : "text-gray-300 hover:bg-ink-800/60 hover:text-white"
                      }`}
                    >
                      <span className="w-5 text-center text-gray-400">{n.icon}</span>
                      <span>{n.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      <div className="px-6 py-4 border-t border-ink-700/60 text-xs text-gray-500">
        v0.1 · built {new Date().getFullYear()}
      </div>
    </aside>
  );
}
