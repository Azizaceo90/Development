import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://123gostaff.com"),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description:
    "123 Go Staff is a people-first staffing agency placing reliable, vetted talent in healthcare, warehouse, light industrial, and administrative roles. Temp, temp-to-hire, and direct placement — often within 48 hours.",
  keywords: [
    "staffing agency",
    "healthcare staffing",
    "warehouse staffing",
    "light industrial staffing",
    "temp agency",
    "direct hire",
    "123 Go Staff",
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description:
      "A people-first staffing partner connecting great employers with reliable, motivated talent.",
    url: "https://123gostaff.com",
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-navy-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
