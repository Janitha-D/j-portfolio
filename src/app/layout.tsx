import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* ─── Fonts ─────────────────────────────────────────────────────────── */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ─── Metadata ───────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Janitha Dilshan — Software Engineer & CS Undergraduate",
  description:
    "Personal portfolio of Janitha Dilshan — Computer Science & Applied AI undergraduate at NIBM, aspiring Software Engineer. Building robust software architectures, distributed systems & intelligent digital products.",
  keywords: [
    "Janitha Dilshan",
    "Software Engineer",
    "Computer Science",
    "Applied AI",
    "NIBM",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Janitha Dilshan" }],
  openGraph: {
    title: "Janitha Dilshan — Software Engineer",
    description: "CS & Applied AI Undergraduate | Aspiring Software Engineer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Janitha Dilshan — Software Engineer",
    description: "CS & Applied AI Undergraduate | Aspiring Software Engineer",
  },
};

/* ─── Root Layout ────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#070708] text-[#f8fafc]">
        {children}
      </body>
    </html>
  );
}
