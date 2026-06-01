import Topbar from "@/components/Topbar";
import SectionHeader from "@/components/SectionHeader";
import CptVerifier from "@/components/CptVerifier";

export default function VerifyCpt() {
  return (
    <>
      <Topbar
        title="CPT Code Verifier"
        subtitle="Validate CPT Category I/II/III and HCPCS Level II codes — format, category, modifiers, and fee."
      />
      <SectionHeader
        title="Verify codes"
        description="Paste one or more codes. Each is checked for valid format, matched to the reference set, and any appended modifier is validated."
      />
      <CptVerifier />

      <div className="mt-10">
        <SectionHeader title="Code format reference" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Category I", d: "5 digits", e: "99214, 47562" },
            { t: "Category II", d: "4 digits + F", e: "0518F" },
            { t: "Category III", d: "4 digits + T", e: "0075T" },
            { t: "HCPCS Level II", d: "Letter + 4 digits", e: "J1885, G0008" },
          ].map((c) => (
            <div key={c.t} className="card">
              <div className="label">{c.t}</div>
              <div className="metric mt-1 text-xl">{c.d}</div>
              <div className="mt-2 font-mono text-xs text-gray-400">{c.e}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
