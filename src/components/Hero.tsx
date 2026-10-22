"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Download, ArrowDown, Briefcase } from "lucide-react";
import Image from "next/image";

/* ─── Colombo Local Clock ────────────────────────────────────────────── */
function ColomboClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      /* Convert to Colombo time (UTC+5:30) */
      const colombo = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Colombo" })
      );
      const h = colombo.getHours().toString().padStart(2, "0");
      const m = colombo.getMinutes().toString().padStart(2, "0");
      const s = colombo.getSeconds().toString().padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono text-[11px] tracking-wide">
      {time} <span className="text-white/40">GMT+5:30</span>
    </span>
  );
}

/* ─── Animation Variants ─────────────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

/* ─── Hero Section ───────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
          w-full max-w-6xl mx-auto
          grid grid-cols-1 lg:grid-cols-[1fr_auto] 
          gap-12 lg:gap-16 items-center
        "
      >
        {/* ── Left: Text Content ────────────────────────────────────────── */}
        <div className="flex flex-col gap-6">
          {/* Status Badge Row */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            {/* Location + Clock Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-[#94a3b8]">
              <MapPin size={12} className="text-[#94a3b8]" />
              <span className="text-xs">Colombo, LK</span>
              <span className="w-px h-3 bg-white/10" />
              <ColomboClock />
            </div>

            {/* Availability Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full badge-emerald">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium">
                Open for Freelance, Internships &amp; Remote Roles
              </span>
            </div>
          </motion.div>

          {/* Name / Headline */}
          <motion.div variants={item} className="flex flex-col gap-2">
            <h1 className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]">
              <span className="text-gradient">JANITHA</span>
              <br />
              <span className="text-gradient">DILSHAN</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={item}>
            <p className="text-sm sm:text-base text-[#94a3b8] font-medium leading-relaxed max-w-xl">
              Computer Science &amp; Applied AI Undergraduate{" "}
              <span className="text-white/50">@</span>{" "}
              <span className="text-[#c7d2fe]">NIBM</span>
              {" · "}
              Aspiring Software Engineer{" · "}
              Building Foundations in OOP, Databases &amp; Computing
            </p>
          </motion.div>

          {/* Bio */}
          <motion.div variants={item}>
            <p className="text-[#94a3b8] leading-relaxed text-sm sm:text-base max-w-2xl">
              Bridging analytical computer science with intuitive human experience.
              Focused on developing robust software architectures, distributed systems,
              and intelligent digital products with clean, scalable code.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
            {/* Primary CTA */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="
                inline-flex items-center gap-2
                px-5 py-2.5 rounded-xl
                bg-white text-black
                text-sm font-semibold
                hover:bg-white/90
                transition-all duration-200
                hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
                hover:-translate-y-0.5
              "
            >
              Explore Work
              <ArrowDown size={14} strokeWidth={2.5} />
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="
                inline-flex items-center gap-2
                px-5 py-2.5 rounded-xl
                glass-card
                text-sm font-semibold text-white
                hover:bg-white/[0.07] hover:border-white/20
                transition-all duration-200
                hover:-translate-y-0.5
              "
            >
              <Briefcase size={14} />
              Get in Touch
            </a>

            {/* Download CV */}
            {/* REPLACE href="#" WITH DIRECT CV / PDF LINK */}
            <a
              href="#"
              download
              className="
                inline-flex items-center gap-2
                px-5 py-2.5 rounded-xl
                text-sm font-medium text-[#94a3b8]
                hover:text-white
                border border-white/[0.06] hover:border-white/[0.12]
                bg-white/[0.02] hover:bg-white/[0.05]
                transition-all duration-200
                hover:-translate-y-0.5
              "
            >
              <Download size={14} />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* ── Right: Avatar ─────────────────────────────────────────────── */}
        <motion.div
          variants={item}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative group cursor-pointer">
            {/* Outer Diffused Glow Mesh */}
            <div
              className="
                absolute inset-0 rounded-[2.5rem]
                bg-gradient-to-tr from-cyan-500/25 via-indigo-500/20 to-violet-500/25
                blur-3xl scale-110
                opacity-70 group-hover:opacity-100 group-hover:scale-120
                transition-all duration-700 ease-out
                pointer-events-none
              "
            />

            {/* Glowing Border Frame (Squircle with gradient stroke) */}
            <div
              className="
                relative p-[1.5px]
                rounded-[2.25rem] sm:rounded-[2.5rem]
                bg-gradient-to-b from-white/30 via-white/10 to-white/5
                group-hover:from-cyan-400/50 group-hover:via-indigo-400/35 group-hover:to-violet-400/40
                shadow-[0_0_50px_rgba(99,102,241,0.2)]
                group-hover:shadow-[0_0_70px_rgba(6,182,212,0.3)]
                transition-all duration-500
              "
            >
              {/* Inner Avatar Container */}
              <div
                className="
                  relative
                  w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80
                  rounded-[2.15rem] sm:rounded-[2.4rem]
                  overflow-hidden
                  bg-[#0a0a0c]
                  ring-1 ring-white/10
                "
              >
                {/* Janitha's Headshot */}
                <Image
                  src="/Janitha.png"
                  alt="Janitha Dilshan — Computer Science & Applied AI Undergraduate"
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 320px"
                  className="object-cover object-top scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  priority
                  quality={95}
                />

                {/* Subtle Obsidian Vignette Overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/80 via-transparent to-transparent pointer-events-none" />

                {/* Inner Rim Light */}
                <div className="absolute inset-0 rounded-[2.15rem] sm:rounded-[2.4rem] ring-1 ring-inset ring-white/10 pointer-events-none" />
              </div>
            </div>

            {/* Floating Location Badge */}
            <div
              className="
                absolute -bottom-3 left-1/2 -translate-x-1/2
                inline-flex items-center gap-2
                px-3.5 py-1.5 rounded-full
                nav-blur border border-white/15
                text-xs font-medium text-white/90 whitespace-nowrap
                shadow-[0_10px_30px_rgba(0,0,0,0.6)]
                group-hover:border-white/30 transition-colors
              "
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94a3b8]/50"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
