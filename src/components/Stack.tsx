"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─── Skill Data ─────────────────────────────────────────────────────── */
const SKILL_GROUPS = [
  {
    id: "languages",
    title: "Languages & Fundamentals",
    icon: "⌨️",
    colSpan: "lg:col-span-2",
    skills: [
      "Java",
      "Python",
      "C++",
      "JavaScript (ES6+)",
      "TypeScript",
      "SQL",
      "OOP Architecture",
      "Data Structures & Algorithms",
    ],
    accentColor: "from-blue-500/10 to-violet-500/10",
    borderHover: "hover:border-blue-500/30",
  },
  {
    id: "frontend",
    title: "Frontend & Interface",
    icon: "🎨",
    colSpan: "",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Responsive UI/UX"],
    accentColor: "from-cyan-500/10 to-blue-500/10",
    borderHover: "hover:border-cyan-500/30",
  },
  {
    id: "backend",
    title: "Backend & Storage",
    icon: "🗄️",
    colSpan: "",
    skills: ["Node.js", "Express", "RESTful APIs", "MySQL", "Relational DB Management"],
    accentColor: "from-emerald-500/10 to-teal-500/10",
    borderHover: "hover:border-emerald-500/30",
  },
  {
    id: "tools",
    title: "Tools & Ecosystem",
    icon: "🛠️",
    colSpan: "lg:col-span-2",
    skills: ["Git", "GitHub", "VS Code", "Linux / Windows CLI", "Postman", "Figma"],
    accentColor: "from-orange-500/10 to-amber-500/10",
    borderHover: "hover:border-amber-500/30",
  },
];

/* ─── Skill Tag ──────────────────────────────────────────────────────── */
function SkillTag({ label }: { label: string }) {
  return (
    <span
      className="
        px-2.5 py-1 rounded-lg text-xs font-medium
        bg-white/[0.04] border border-white/[0.07]
        text-[#94a3b8]
        hover:bg-white/[0.08] hover:text-white hover:border-white/[0.14]
        transition-all duration-200 cursor-default
      "
    >
      {label}
    </span>
  );
}

/* ─── Card ───────────────────────────────────────────────────────────── */
function SkillCard({
  group,
  index,
}: {
  group: (typeof SKILL_GROUPS)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`
        ${group.colSpan}
        group relative rounded-2xl p-5 sm:p-6
        glass-card hover-lift
        border border-white/[0.08]
        ${group.borderHover}
        overflow-hidden
        transition-all duration-300
      `}
    >
      {/* Background gradient accent */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br ${group.accentColor}
          opacity-0 group-hover:opacity-100
          transition-opacity duration-400 rounded-2xl
        `}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center gap-2.5">
          <span className="text-xl">{group.icon}</span>
          <h3 className="text-sm font-semibold text-white/90 tracking-tight">
            {group.title}
          </h3>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <SkillTag key={skill} label={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Stack Section ──────────────────────────────────────────────────── */
export default function Stack() {
  return (
    <section id="stack" className="py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-2"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#94a3b8]">
            Technical Proficiencies
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient">
            Core Stack
          </h2>
          <p className="text-[#94a3b8] text-sm max-w-xl leading-relaxed">
            A curated matrix of tools, languages, and frameworks I work with —
            organised by discipline.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_GROUPS.map((group, i) => (
            <SkillCard key={group.id} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
