/**
 * Janitha Dilshan — Personal Portfolio
 * ─────────────────────────────────────
 * A sleek, minimalist portfolio inspired by Linear.app, Vercel & Apple Design.
 * Built with Next.js App Router · TypeScript · Tailwind CSS · Framer Motion
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* ── Ambient Background Mesh Glow (fixed, behind all content) ── */}
      <div className="ambient-bg" aria-hidden="true" />

      {/* ── Floating Navbar ─────────────────────────────────────────── */}
      <Navbar />

      {/* ── Main Content ────────────────────────────────────────────── */}
      <main className="relative z-10">
        {/* 1. Hero / Identity */}
        <Hero />

        {/* ── Section Divider ── */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* 2. Core Technical Stack */}
        <Stack />

        {/* ── Section Divider ── */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* 3. Projects Bento Grid */}
        <Projects />

        {/* ── Section Divider ── */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* 4. Education & Community */}
        <Education />

        {/* ── Section Divider ── */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>

        {/* 5. Contact & Social Dock */}
        <Contact />
      </main>
    </>
  );
}
