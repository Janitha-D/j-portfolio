"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, Award } from "lucide-react";

/* ─── Timeline Data ──────────────────────────────────────────────────── */
const EDUCATION = [
  {
    id: "nibm-degree",
    type: "education",
    icon: GraduationCap,
    institution: "National Institute of Business Management (NIBM)",
    degree: "BSc (Hons) in Computer Science with Applied Artificial Intelligence",
    sub: "Pathway: Diploma in Software Engineering — First Year",
    focus:
      "Core Computing · Object-Oriented Programming · Data Management · Intelligent Systems",
    period: "2025 – Present",
    status: "current",
    accentColor: "text-blue-400",
    dotColor: "bg-blue-500",
    glowColor: "shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    borderHover: "hover:border-blue-500/30",
    gradientFrom: "from-blue-500/8",
  },
  {
    id: "ieee",
    type: "membership",
    icon: Award,
    institution: "IEEE",
    degree: "IEEE Student Member",
    sub: "IEEE Student Branch @ NIBM",
    focus: "Professional development · Technical standards · Engineering community",
    period: "2025 – Present",
    status: "current",
    accentColor: "text-cyan-400",
    dotColor: "bg-cyan-500",
    glowColor: "shadow-[0_0_20px_rgba(6,182,212,0.3)]",
    borderHover: "hover:border-cyan-500/30",
    gradientFrom: "from-cyan-500/8",
  },
  {
    id: "computing-society",
    type: "membership",
    icon: Users,
    institution: "NIBM Computing Society",
    degree: "Active Member",
    sub: "NIBM Computing Society",
    focus: "Collaborative projects · Hackathons · Knowledge sharing · Peer learning",
    period: "2025 – Present",
    status: "current",
    accentColor: "text-violet-400",
    dotColor: "bg-violet-500",
    glowColor: "shadow-[0_0_20px_rgba(139,92,246,0.3)]",
    borderHover: "hover:border-violet-500/30",
    gradientFrom: "from-violet-500/8",
  },
];

/* ─── Timeline Item ──────────────────────────────────────────────────── */
function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof EDUCATION)[0];
  index: number;
  isLast: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-6"
    >
      {/* ── Timeline Line & Dot ─────────────────────────────────────── */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <div
          className={`
            relative flex-shrink-0 
            w-10 h-10 rounded-xl
            glass-card border border-white/10
            flex items-center justify-center
            ${item.accentColor}
            group-hover:${item.glowColor}
            transition-all duration-300
          `}
        >
          <Icon size={16} strokeWidth={1.8} />
        </div>

        {/* Connecting line */}
        {!isLast && (
          <div className="w-px flex-1 mt-2 bg-gradient-to-b from-white/[0.08] to-transparent min-h-[32px]" />
        )}
      </div>

      {/* ── Card ────────────────────────────────────────────────────── */}
      <div
        className={`
          group flex-1 mb-8 p-5 sm:p-6 rounded-2xl
          glass-card
          border border-white/[0.08]
          ${item.borderHover}
          overflow-hidden relative
          hover-lift
          transition-all duration-300
        `}
      >
        {/* Subtle gradient on hover */}
        <div
          className={`
            absolute inset-0 bg-gradient-to-br ${item.gradientFrom} to-transparent
            opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl
          `}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10 flex flex-col gap-3">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className={`text-xs font-semibold tracking-wide uppercase ${item.accentColor}`}>
                {item.type === "education" ? "Education" : "Membership"}
              </span>
              <h3 className="mt-1 text-base font-bold text-white tracking-tight leading-snug">
                {item.degree}
              </h3>
              <p className="text-sm text-[#94a3b8] font-medium mt-0.5">
                {item.institution}
              </p>
            </div>

            <div className="flex-shrink-0 text-right">
              <span className="text-xs text-[#94a3b8] whitespace-nowrap">
                {item.period}
              </span>
              {item.status === "current" && (
                <div className="flex items-center gap-1.5 justify-end mt-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] text-emerald-400 font-medium">Active</span>
                </div>
              )}
            </div>
          </div>

          {/* Sub / Pathway */}
          {item.sub && (
            <p className="text-xs text-[#94a3b8]/80 border-l-2 border-white/[0.06] pl-3">
              {item.sub}
            </p>
          )}

          {/* Focus areas */}
          <div className="flex flex-wrap gap-1.5">
            {item.focus.split(" · ").map((f) => (
              <span
                key={f}
                className="
                  px-2 py-0.5 rounded-md
                  text-[10px] font-medium
                  bg-white/[0.04] border border-white/[0.06]
                  text-[#94a3b8]
                "
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Education Section ──────────────────────────────────────────────── */
export default function Education() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#94a3b8]">
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient">
            Education &amp; Memberships
          </h2>
          <p className="text-[#94a3b8] text-sm max-w-xl leading-relaxed">
            Academic foundations and professional community engagements that
            shape my engineering mindset.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col">
          {EDUCATION.map((item, i) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={i}
              isLast={i === EDUCATION.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
