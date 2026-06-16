# 123 Go Staff

Marketing website for **123 Go Staff** — a people-first, nurse-owned staffing
agency placing reliable, vetted talent across healthcare, warehouse, light
industrial, and administrative roles.

> _Staffing made simple. People made the priority._

## Pages

- **Home** (`/`) — hero, services, process, employer/seeker split, testimonials.
- **For Employers** (`/employers`) — capabilities, process, FAQs, and a talent-request form.
- **For Job Seekers** (`/job-seekers`) — how it works, benefits, and an apply form.
- **About** (`/about`) — story, mission, and values.
- **Contact** (`/contact`) — direct contact channels and a message form.

## Tech

- Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS
- No runtime dependencies beyond Next/React — icons are inline SVG (`components/Icon.tsx`).
- Shared content lives in [`lib/site.ts`](lib/site.ts) (company info, services, stats, FAQs).
- SEO: per-page metadata, `app/sitemap.ts`, `app/robots.ts`.

## Forms

Lead/apply/contact forms (`components/LeadForm.tsx`) are static-friendly: with no
backend configured they gracefully open a pre-filled email to the company. To
wire up real submissions, replace the `handleSubmit` handler with a POST to your
form endpoint (e.g. a serverless function, Formspree, or an ATS webhook).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Customizing

- **Brand colors / fonts** — `tailwind.config.ts` (`brand` = green "go", `navy` = trust).
- **Company details** (phone, email, social, hours) — `lib/site.ts` → `site`.
- **Services, stats, testimonials, FAQs** — `lib/site.ts`.

> Contact details and metrics in `lib/site.ts` are placeholders — update them with
> the real numbers before going live.
