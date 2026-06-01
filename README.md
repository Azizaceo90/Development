# Medical Coding & Billing

An Epic-style medical coding workspace for translating **clinical documentation**
into billable codes. Supports **inpatient** and **outpatient** coding using
**ICD-10-CM** diagnoses and **CPT/HCPCS** procedures, with a built-in **CPT
verifier**.

## Features

- **Overview dashboard** (`/`) — reference counts, coding workflows, and the chart queue.
- **Inpatient coding** (`/inpatient`) — principal diagnosis, MCC/CC severity capture, and procedures coded from the admission note. Live DRG-severity (MCC) signal.
- **Outpatient coding** (`/outpatient`) — first-listed diagnosis, E/M level, and CPT services with live charges and work RVUs.
- **CPT verifier** (`/verify`) — validates CPT Category I/II/III and HCPCS Level II codes:
  - **Format** detection (Cat I `#####`, Cat II `####F`, Cat III `####T`, HCPCS `A####`)
  - **Reference lookup** → `valid` / `unrecognized` (format OK, not in set) / `invalid-format`
  - **Modifier** validation (e.g. `99214-25`)
- **Compliance checks** per encounter — required principal/first-listed diagnosis, ICD format, setting mismatches, and Medicare Inpatient-Only edits.

## Tech

- Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS
- Coding logic lives in [`lib/medical-codes.ts`](lib/medical-codes.ts):
  - `verifyCpt()` — single-code verification with modifier support
  - `summarizeEncounter()` — encounter-level charges, work RVU, MCC, and billability

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Important caveat

The ICD-10-CM / CPT / HCPCS tables in `lib/medical-codes.ts` are a
**representative teaching subset**, not the licensed or complete AMA CPT /
CMS code sets. This project is a standalone coding workspace, **not** an
actual Epic integration — there is no FHIR / Interconnect / EHR connection.
For production use, license the official code sets and integrate with Epic's
APIs.
