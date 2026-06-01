// Medical Coding & Billing domain logic for the Epic-style coding workflow.
//
// Covers ICD-10-CM diagnosis codes, CPT / HCPCS procedure codes, modifiers,
// CPT verification (format + reference lookup), and encounter-level coding
// summaries for both inpatient and outpatient settings.
//
// NOTE: The reference tables below are a representative teaching subset, not a
// licensed/complete code set. Descriptions follow public CMS/AMA conventions.

export type EncounterType = "inpatient" | "outpatient";

export type IcdCode = {
  code: string; // ICD-10-CM
  description: string;
  chapter: string;
  /** Major complication/comorbidity — drives inpatient DRG severity. */
  mcc?: boolean;
};

export type CptCategory = "I" | "II" | "III" | "HCPCS";

export type CptCode = {
  code: string;
  description: string;
  category: CptCategory;
  /** AMA CPT section the code belongs to. */
  section:
    | "E/M"
    | "Anesthesia"
    | "Surgery"
    | "Radiology"
    | "Pathology/Lab"
    | "Medicine"
    | "Cat II"
    | "Cat III"
    | "HCPCS";
  /** Settings where the code is appropriate. */
  setting: EncounterType[];
  /** Some surgical codes are on the CMS Inpatient-Only (IPO) list. */
  inpatientOnly?: boolean;
  workRvu: number;
  /** Sample fee-schedule amount in USD (illustrative). */
  fee: number;
};

export type Modifier = { code: string; description: string };

// ---------------------------------------------------------------------------
// Reference data
// ---------------------------------------------------------------------------

export const ICD_CODES: IcdCode[] = [
  { code: "I10", description: "Essential (primary) hypertension", chapter: "Circulatory" },
  { code: "E11.9", description: "Type 2 diabetes mellitus without complications", chapter: "Endocrine" },
  { code: "E11.65", description: "Type 2 diabetes mellitus with hyperglycemia", chapter: "Endocrine" },
  { code: "J18.9", description: "Pneumonia, unspecified organism", chapter: "Respiratory" },
  { code: "J44.1", description: "COPD with (acute) exacerbation", chapter: "Respiratory", mcc: true },
  { code: "J96.00", description: "Acute respiratory failure, unspecified", chapter: "Respiratory", mcc: true },
  { code: "I21.4", description: "Non-ST elevation (NSTEMI) myocardial infarction", chapter: "Circulatory", mcc: true },
  { code: "I50.21", description: "Acute systolic (congestive) heart failure", chapter: "Circulatory", mcc: true },
  { code: "N17.9", description: "Acute kidney failure, unspecified", chapter: "Genitourinary", mcc: true },
  { code: "N39.0", description: "Urinary tract infection, site not specified", chapter: "Genitourinary" },
  { code: "A41.9", description: "Sepsis, unspecified organism", chapter: "Infectious", mcc: true },
  { code: "K35.80", description: "Unspecified acute appendicitis", chapter: "Digestive" },
  { code: "K80.20", description: "Calculus of gallbladder w/o cholecystitis, w/o obstruction", chapter: "Digestive" },
  { code: "M54.50", description: "Low back pain, unspecified", chapter: "Musculoskeletal" },
  { code: "S72.001A", description: "Fracture of unspecified part of neck of right femur, initial", chapter: "Injury" },
  { code: "R07.9", description: "Chest pain, unspecified", chapter: "Symptoms/Signs" },
  { code: "Z00.00", description: "Encounter for general adult medical exam w/o abnormal findings", chapter: "Factors/Z-codes" },
  { code: "Z38.00", description: "Single liveborn infant, delivered vaginally", chapter: "Factors/Z-codes" },
];

export const CPT_CODES: CptCode[] = [
  // Evaluation & Management
  { code: "99213", description: "Office/outpatient visit, established patient, low MDM", category: "I", section: "E/M", setting: ["outpatient"], workRvu: 1.3, fee: 92 },
  { code: "99214", description: "Office/outpatient visit, established patient, moderate MDM", category: "I", section: "E/M", setting: ["outpatient"], workRvu: 1.92, fee: 131 },
  { code: "99203", description: "Office/outpatient visit, new patient, low MDM", category: "I", section: "E/M", setting: ["outpatient"], workRvu: 1.6, fee: 113 },
  { code: "99223", description: "Initial hospital inpatient care, high complexity", category: "I", section: "E/M", setting: ["inpatient"], workRvu: 3.86, fee: 209 },
  { code: "99232", description: "Subsequent hospital inpatient care, moderate complexity", category: "I", section: "E/M", setting: ["inpatient"], workRvu: 1.59, fee: 110 },
  { code: "99238", description: "Hospital inpatient discharge day management, ≤30 min", category: "I", section: "E/M", setting: ["inpatient"], workRvu: 1.5, fee: 105 },
  { code: "99285", description: "Emergency department visit, high complexity", category: "I", section: "E/M", setting: ["outpatient"], workRvu: 3.8, fee: 196 },
  // Surgery
  { code: "47562", description: "Laparoscopic cholecystectomy", category: "I", section: "Surgery", setting: ["inpatient", "outpatient"], workRvu: 10.47, fee: 720 },
  { code: "44970", description: "Laparoscopic appendectomy", category: "I", section: "Surgery", setting: ["inpatient", "outpatient"], workRvu: 9.43, fee: 690 },
  { code: "27447", description: "Total knee arthroplasty", category: "I", section: "Surgery", setting: ["inpatient", "outpatient"], workRvu: 19.6, fee: 1480 },
  { code: "33533", description: "Coronary artery bypass, single arterial graft", category: "I", section: "Surgery", setting: ["inpatient"], inpatientOnly: true, workRvu: 33.75, fee: 2600 },
  { code: "36415", description: "Collection of venous blood by venipuncture", category: "I", section: "Surgery", setting: ["inpatient", "outpatient"], workRvu: 0, fee: 6 },
  // Radiology
  { code: "71046", description: "Radiologic exam, chest; 2 views", category: "I", section: "Radiology", setting: ["inpatient", "outpatient"], workRvu: 0.22, fee: 46 },
  { code: "74177", description: "CT abdomen & pelvis with contrast", category: "I", section: "Radiology", setting: ["inpatient", "outpatient"], workRvu: 1.82, fee: 320 },
  // Pathology / Lab
  { code: "80053", description: "Comprehensive metabolic panel", category: "I", section: "Pathology/Lab", setting: ["inpatient", "outpatient"], workRvu: 0, fee: 14 },
  { code: "85025", description: "Complete blood count (CBC) with differential, automated", category: "I", section: "Pathology/Lab", setting: ["inpatient", "outpatient"], workRvu: 0, fee: 11 },
  // Medicine
  { code: "93000", description: "Electrocardiogram, routine ECG with ≥12 leads", category: "I", section: "Medicine", setting: ["inpatient", "outpatient"], workRvu: 0.17, fee: 18 },
  { code: "94640", description: "Inhalation treatment for airway obstruction (nebulizer)", category: "I", section: "Medicine", setting: ["inpatient", "outpatient"], workRvu: 0, fee: 19 },
  // Category II (performance measurement)
  { code: "0518F", description: "Falls plan of care documented (Cat II tracking code)", category: "II", section: "Cat II", setting: ["inpatient", "outpatient"], workRvu: 0, fee: 0 },
  // Category III (emerging technology)
  { code: "0075T", description: "Transcatheter placement of extracranial vertebral stent (Cat III)", category: "III", section: "Cat III", setting: ["inpatient", "outpatient"], workRvu: 0, fee: 0 },
  // HCPCS Level II
  { code: "J1885", description: "Injection, ketorolac tromethamine, per 15 mg", category: "HCPCS", section: "HCPCS", setting: ["inpatient", "outpatient"], workRvu: 0, fee: 3 },
  { code: "G0008", description: "Administration of influenza virus vaccine", category: "HCPCS", section: "HCPCS", setting: ["outpatient"], workRvu: 0, fee: 25 },
];

export const MODIFIERS: Modifier[] = [
  { code: "25", description: "Significant, separately identifiable E/M on same day as procedure" },
  { code: "26", description: "Professional component" },
  { code: "59", description: "Distinct procedural service" },
  { code: "50", description: "Bilateral procedure" },
  { code: "76", description: "Repeat procedure by same physician" },
  { code: "RT", description: "Right side" },
  { code: "LT", description: "Left side" },
  { code: "GA", description: "Waiver of liability statement on file (ABN)" },
];

// ---------------------------------------------------------------------------
// Lookups
// ---------------------------------------------------------------------------

const CPT_INDEX = new Map(CPT_CODES.map((c) => [c.code, c]));
const ICD_INDEX = new Map(ICD_CODES.map((c) => [c.code, c]));
const MOD_INDEX = new Map(MODIFIERS.map((m) => [m.code, m]));

export const lookupCpt = (code: string) => CPT_INDEX.get(code.trim().toUpperCase());
export const lookupIcd = (code: string) => ICD_INDEX.get(code.trim().toUpperCase());

// ---------------------------------------------------------------------------
// Format detection & validation
// ---------------------------------------------------------------------------

// CPT Category I: 5 digits. Category II: 4 digits + F. Category III: 4 digits + T.
// HCPCS Level II: 1 letter + 4 digits.
const RX_CAT_I = /^\d{5}$/;
const RX_CAT_II = /^\d{4}F$/;
const RX_CAT_III = /^\d{4}T$/;
const RX_HCPCS = /^[A-Z]\d{4}$/;
const RX_ICD10 = /^[A-Z]\d[0-9A-Z](\.[0-9A-Z]{1,4})?$/;
const RX_MOD = /^[A-Z0-9]{2}$/;

export function detectCptCategory(code: string): CptCategory | null {
  const c = code.trim().toUpperCase();
  if (RX_CAT_I.test(c)) return "I";
  if (RX_CAT_II.test(c)) return "II";
  if (RX_CAT_III.test(c)) return "III";
  if (RX_HCPCS.test(c)) return "HCPCS";
  return null;
}

export type CptVerifyStatus = "valid" | "unrecognized" | "invalid-format";

export type CptVerifyResult = {
  input: string;
  normalized: string;
  status: CptVerifyStatus;
  category: CptCategory | null;
  record?: CptCode;
  /** Optional modifier suffix the user appended, e.g. 99214-25. */
  modifier?: { code: string; valid: boolean; description?: string };
  messages: string[];
};

/**
 * Verify a single CPT/HCPCS code. Accepts an optional `-modifier` suffix.
 *
 * - `valid`          → correct format AND found in the reference set
 * - `unrecognized`   → correct format but not in the loaded reference set
 * - `invalid-format` → does not match any CPT/HCPCS pattern
 */
export function verifyCpt(raw: string): CptVerifyResult {
  const input = raw.trim();
  const [codePart, modPart] = input.toUpperCase().split("-");
  const normalized = (codePart ?? "").trim();
  const messages: string[] = [];

  const category = detectCptCategory(normalized);

  let modifier: CptVerifyResult["modifier"];
  if (modPart != null && modPart !== "") {
    const m = modPart.trim();
    const valid = RX_MOD.test(m) && MOD_INDEX.has(m);
    modifier = { code: m, valid, description: MOD_INDEX.get(m)?.description };
    if (!RX_MOD.test(m)) messages.push(`Modifier "${m}" is not a valid 2-character modifier.`);
    else if (!valid) messages.push(`Modifier "${m}" is not in the recognized modifier list.`);
  }

  if (!category) {
    messages.push(
      "Code does not match any CPT (5 digits / 4 digits+F / 4 digits+T) or HCPCS (letter+4 digits) pattern."
    );
    return { input, normalized, status: "invalid-format", category: null, modifier, messages };
  }

  const record = lookupCpt(normalized);
  if (!record) {
    messages.push(`Format is a valid Category ${category} code, but it is not in the loaded reference set.`);
    return { input, normalized, status: "unrecognized", category, modifier, messages };
  }

  messages.push(`Matched: ${record.section} · ${record.description}`);
  return { input, normalized, status: "valid", category, record, modifier, messages };
}

export function isValidIcdFormat(code: string): boolean {
  return RX_ICD10.test(code.trim().toUpperCase());
}

// ---------------------------------------------------------------------------
// Encounter-level coding summary
// ---------------------------------------------------------------------------

export type CodedEncounter = {
  type: EncounterType;
  /** First entry is treated as principal / first-listed diagnosis. */
  icdCodes: string[];
  cptCodes: string[];
};

export type EncounterSummary = {
  type: EncounterType;
  principalDx?: IcdCode;
  diagnoses: { code: string; record?: IcdCode; validFormat: boolean }[];
  procedures: CptVerifyResult[];
  totals: { charges: number; workRvu: number; validProcedures: number };
  hasMcc: boolean;
  /** Coding-compliance warnings/blockers. */
  issues: string[];
  /** True when the encounter is clean enough to submit for billing. */
  billable: boolean;
};

export function summarizeEncounter(enc: CodedEncounter): EncounterSummary {
  const issues: string[] = [];

  const diagnoses = enc.icdCodes
    .map((c) => c.trim())
    .filter(Boolean)
    .map((code) => ({
      code: code.toUpperCase(),
      record: lookupIcd(code),
      validFormat: isValidIcdFormat(code),
    }));

  const procedures = enc.cptCodes
    .map((c) => c.trim())
    .filter(Boolean)
    .map((c) => verifyCpt(c));

  const principalDx = diagnoses[0]?.record;
  const hasMcc = diagnoses.some((d) => d.record?.mcc);

  // Compliance checks
  if (diagnoses.length === 0) {
    issues.push(
      enc.type === "inpatient"
        ? "Inpatient claims require a principal diagnosis (ICD-10-CM)."
        : "Outpatient claims require a first-listed diagnosis (ICD-10-CM)."
    );
  }
  if (procedures.length === 0) {
    issues.push("At least one CPT/HCPCS procedure or service code is required.");
  }
  diagnoses.forEach((d) => {
    if (!d.validFormat) issues.push(`ICD code "${d.code}" has an invalid ICD-10-CM format.`);
  });
  procedures.forEach((p) => {
    if (p.status === "invalid-format") issues.push(`CPT "${p.input}" has an invalid format and will be rejected.`);
    if (p.status === "valid" && p.record) {
      if (!p.record.setting.includes(enc.type)) {
        issues.push(
          `CPT ${p.record.code} (${p.record.description}) is not typically billed in the ${enc.type} setting.`
        );
      }
      if (p.record.inpatientOnly && enc.type === "outpatient") {
        issues.push(`CPT ${p.record.code} is on the Medicare Inpatient-Only list and cannot be billed outpatient.`);
      }
    }
  });

  const valid = procedures.filter((p) => p.status === "valid" && p.record);
  const totals = {
    charges: valid.reduce((s, p) => s + (p.record?.fee ?? 0), 0),
    workRvu: valid.reduce((s, p) => s + (p.record?.workRvu ?? 0), 0),
    validProcedures: valid.length,
  };

  const billable =
    diagnoses.length > 0 &&
    diagnoses.every((d) => d.validFormat) &&
    procedures.length > 0 &&
    procedures.every((p) => p.status !== "invalid-format") &&
    issues.length === 0;

  return { type: enc.type, principalDx, diagnoses, procedures, totals, hasMcc, issues, billable };
}
