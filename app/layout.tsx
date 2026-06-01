import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Medical Coding & Billing",
  description:
    "Epic-style medical coding workspace — inpatient and outpatient coding from clinical documentation using ICD-10-CM and CPT/HCPCS, with CPT verification.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink-950 text-gray-200 antialiased">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 min-h-screen">
            <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
