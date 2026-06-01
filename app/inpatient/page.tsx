import Topbar from "@/components/Topbar";
import SectionHeader from "@/components/SectionHeader";
import EncounterCoder from "@/components/EncounterCoder";

const SAMPLE_NOTE = `ADMISSION NOTE — 68F admitted with acute hypoxic respiratory failure
secondary to COPD exacerbation. History of essential hypertension and
type 2 diabetes. Chest X-ray and ECG obtained. CBC and CMP drawn.
Plan: nebulizer treatments, monitor, manage comorbidities.`;

export default function InpatientCoding() {
  return (
    <>
      <Topbar
        title="Inpatient Coding"
        subtitle="Code the admission from clinical documentation — principal diagnosis, MCC/CC, and procedures."
      />
      <SectionHeader
        title="Encounter coder"
        description="Edit the documentation and codes; the claim summary updates live with severity (MCC) and compliance checks."
      />
      <EncounterCoder
        type="inpatient"
        sampleNote={SAMPLE_NOTE}
        sampleIcd={"J96.00, J44.1, I10, E11.9"}
        sampleCpt={"99223, 99232, 71046, 93000, 85025, 80053, 94640"}
      />
    </>
  );
}
