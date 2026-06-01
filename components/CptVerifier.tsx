"use client";

import { useMemo, useState } from "react";
import { verifyCpt, type CptVerifyResult } from "@/lib/medical-codes";

const STATUS_STYLE: Record<CptVerifyResult["status"], { chip: string; label: string }> = {
  valid: { chip: "border-accent-emerald/50 text-accent-emerald", label: "Valid" },
  unrecognized: { chip: "border-accent-gold/50 text-accent-gold", label: "Format OK · not in set" },
  "invalid-format": { chip: "border-accent-rose/50 text-accent-rose", label: "Invalid format" },
};

const SAMPLE = "99214-25, 47562, 80053, 1234, J1885, 0075T";

export default function CptVerifier() {
  const [raw, setRaw] = useState("");

  const results = useMemo<CptVerifyResult[]>(() => {
    return raw
      .split(/[\n,]+/)
      .map((c) => c.trim())
      .filter(Boolean)
      .map((c) => verifyCpt(c));
  }, [raw]);

  const counts = useMemo(() => {
    return results.reduce(
      (acc, r) => {
        acc[r.status] += 1;
        return acc;
      },
      { valid: 0, unrecognized: 0, "invalid-format": 0 } as Record<CptVerifyResult["status"], number>
    );
  }, [results]);

  return (
    <div className="space-y-5">
      <div className="card">
        <label className="label">Enter CPT / HCPCS codes (comma or newline separated)</label>
        <textarea
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          rows={3}
          spellCheck={false}
          placeholder={SAMPLE}
          className="mt-3 w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-white outline-none focus:border-accent-gold/60"
        />
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button className="btn-ghost" onClick={() => setRaw(SAMPLE)}>
            Load sample
          </button>
          <button className="btn-ghost" onClick={() => setRaw("")}>
            Clear
          </button>
          <span className="chip">Tip: append a modifier like 99214-25</span>
        </div>
      </div>

      {results.length > 0 && (
        <>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="card text-center">
              <div className="label">Valid</div>
              <div className="metric mt-1 text-accent-emerald">{counts.valid}</div>
            </div>
            <div className="card text-center">
              <div className="label">Format OK</div>
              <div className="metric mt-1 text-accent-gold">{counts.unrecognized}</div>
            </div>
            <div className="card text-center">
              <div className="label">Rejected</div>
              <div className="metric mt-1 text-accent-rose">{counts["invalid-format"]}</div>
            </div>
          </div>

          <div className="card p-0 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-ink-800/60 text-gray-400">
                <tr>
                  <th className="text-left px-5 py-3">Code</th>
                  <th className="text-left px-5 py-3">Status</th>
                  <th className="text-left px-5 py-3">Cat</th>
                  <th className="text-left px-5 py-3">Detail</th>
                  <th className="text-right px-5 py-3">Fee</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => {
                  const s = STATUS_STYLE[r.status];
                  return (
                    <tr key={`${r.input}-${i}`} className="border-t border-ink-700/60 align-top">
                      <td className="px-5 py-3 font-mono text-white">
                        {r.normalized}
                        {r.modifier && (
                          <span className={r.modifier.valid ? "text-accent-emerald" : "text-accent-rose"}>
                            -{r.modifier.code}
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-3">
                        <span className={`chip ${s.chip}`}>{s.label}</span>
                      </td>
                      <td className="px-5 py-3 text-gray-400">{r.category ?? "—"}</td>
                      <td className="px-5 py-3 text-gray-300">
                        {r.messages.map((m, j) => (
                          <div key={j} className="text-xs leading-relaxed">
                            {m}
                          </div>
                        ))}
                      </td>
                      <td className="px-5 py-3 text-right text-gray-300">
                        {r.record ? `$${r.record.fee.toLocaleString()}` : "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
