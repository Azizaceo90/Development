import Topbar from "@/components/Topbar";
import SectionHeader from "@/components/SectionHeader";
import EncounterCoder from "@/components/EncounterCoder";

const SAMPLE_NOTE = `CLINIC VISIT — 54M established patient seen for chest pain, ruled
non-cardiac. Known hypertension and type 2 diabetes, both stable.
In-office ECG performed and interpreted. Counseled on diet; follow up
in 3 months. Moderate medical decision making.`;

export default function OutpatientCoding() {
  return (
    <>
      <Topbar
        title="Outpatient Coding"
        subtitle="Code the visit from clinical documentation — first-listed diagnosis, E/M level, and CPT services."
      />
      <SectionHeader
        title="Encounter coder"
        description="Edit the documentation and codes; the claim summary updates live with charges, RVUs, and compliance checks."
      />
      <EncounterCoder
        type="outpatient"
        sampleNote={SAMPLE_NOTE}
        sampleIcd={"R07.9, I10, E11.9"}
        sampleCpt={"99214-25, 93000"}
      />
    </>
  );
}
