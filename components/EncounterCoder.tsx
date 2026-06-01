"use client";

import { useMemo, useState } from "react";
import {
  summarizeEncounter,
  type EncounterType,
  type CodedEncounter,
} from "@/lib/medical-codes";

type Props = {
  type: EncounterType;
  /** Pre-filled clinical documentation note for the demo. */
  sampleNote: string;
  sampleIcd: string;
  sampleCpt: string;
};

export default function EncounterCoder({ type, sampleNote, sampleIcd, sampleCpt }: Props) {
  const [note, setNote] = useState(sampleNote);
  const [icd, setIcd] = useState(sampleIcd);
  const [cpt, setCpt] = useState(sampleCpt);

  const summary = useMemo(() => {
    const enc: CodedEncounter = {
      type,
      icdCodes: icd.split(/[\n,]+/),
      cptCodes: cpt.split(/[\n,]+/),
    };
    return summarizeEncounter(enc);
  }, [type, icd, cpt]);

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {/* Documentation + code entry */}
      <div className="space-y-5">
        <div className="card">
          <label className="label">Clinical documentation</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={6}
            className="mt-3 w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-gray-200 outline-none focus:border-accent-gold/60"
          />
        </div>

        <div className="card">
          <label className="label">
            ICD-10-CM diagnoses{" "}
            <span className="text-gray-500 normal-case">
              (first = {type === "inpatient" ? "principal" : "first-listed"})
            </span>
          </label>
          <textarea
            value={icd}
            onChange={(e) => setIcd(e.target.value)}
            rows={3}
            spellCheck={false}
            className="mt-3 w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 font-mono text-sm text-white outline-none focus:border-accent-gold/60"
          />
        </div>

        <div className="card">
          <label className="label">CPT / HCPCS procedures &amp; services</label>
          <textarea
            value={cpt}
            onChange={(e) => setCpt(e.target.value)}
            rows={3}
            spellCheck={false}
            className="mt-3 w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-3 font-mono text-sm text-white outline-none focus:border-accent-gold/60"
          />
        </div>
      </div>

      {/* Live coding summary */}
      <div className="space-y-5">
        <div className={`card ${summary.billable ? "border-accent-emerald/40" : "border-accent-rose/40"}`}>
          <div className="flex items-center justify-between">
            <div className="label">Claim status</div>
            <span
              className={`chip ${
                summary.billable
                  ? "border-accent-emerald/50 text-accent-emerald"
                  : "border-accent-rose/50 text-accent-rose"
              }`}
            >
              {summary.billable ? "Ready to bill" : "Needs review"}
            </span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="metric text-2xl">${summary.totals.charges.toLocaleString()}</div>
              <div className="label mt-1">Charges</div>
            </div>
            <div>
              <div className="metric text-2xl">{summary.totals.workRvu.toFixed(2)}</div>
              <div className="label mt-1">Work RVU</div>
            </div>
            <div>
              <div className="metric text-2xl">{summary.totals.validProcedures}</div>
              <div className="label mt-1">Procedures</div>
            </div>
          </div>
          {type === "inpatient" && (
            <div className="mt-4 flex items-center gap-2 text-xs">
              <span className="chip">{summary.hasMcc ? "MCC present" : "No MCC"}</span>
              <span className="text-gray-400">
                {summary.hasMcc
                  ? "Higher-severity DRG likely."
                  : "Document complications/comorbidities to capture severity."}
              </span>
            </div>
          )}
        </div>

        <div className="card">
          <div className="label">Diagnoses ({summary.diagnoses.length})</div>
          <ul className="mt-3 space-y-2 text-sm">
            {summary.diagnoses.map((d, i) => (
              <li key={`${d.code}-${i}`} className="flex items-start gap-2">
                <span
                  className={`mt-1 h-2 w-2 rounded-full ${
                    d.validFormat ? "bg-accent-emerald" : "bg-accent-rose"
                  }`}
                />
                <span className="font-mono text-white">{d.code}</span>
                <span className="text-gray-400">
                  {d.record ? d.record.description : "— not in reference set"}
                  {d.record?.mcc && <span className="ml-2 chip">MCC</span>}
                  {i === 0 && <span className="ml-2 chip">{type === "inpatient" ? "Principal" : "First-listed"}</span>}
                </span>
              </li>
            ))}
            {summary.diagnoses.length === 0 && <li className="text-gray-500">No diagnoses entered.</li>}
          </ul>
        </div>

        <div className="card">
          <div className="label">Procedures ({summary.procedures.length})</div>
          <ul className="mt-3 space-y-2 text-sm">
            {summary.procedures.map((p, i) => (
              <li key={`${p.input}-${i}`} className="flex items-start gap-2">
                <span
                  className={`mt-1 h-2 w-2 rounded-full ${
                    p.status === "valid"
                      ? "bg-accent-emerald"
                      : p.status === "unrecognized"
                      ? "bg-accent-gold"
                      : "bg-accent-rose"
                  }`}
                />
                <span className="font-mono text-white">{p.normalized}</span>
                <span className="text-gray-400">
                  {p.record ? p.record.description : p.messages[0]}
                  {p.record && <span className="ml-2 text-gray-500">${p.record.fee}</span>}
                </span>
              </li>
            ))}
            {summary.procedures.length === 0 && <li className="text-gray-500">No procedures entered.</li>}
          </ul>
        </div>

        {summary.issues.length > 0 && (
          <div className="card border-accent-rose/40">
            <div className="label text-accent-rose">Compliance checks ({summary.issues.length})</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              {summary.issues.map((m, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent-rose">!</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
