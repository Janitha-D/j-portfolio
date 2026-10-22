"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Code2, GitFork } from "lucide-react";

/* ─── GitHub SVG Icon ────────────────────────────────────────────────── */
const GitHubIcon = ({ size = 11 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

/* ─── Project Data ───────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: "workhive",
    title: "WorkHive",
    subtitle: "Freelance & Digital Service Platform",
    timeline: "Sep 2026 – Present",
    status: "live",
    statusLabel: "Live",
    liveUrl: "https://urworkhive.netlify.app/",
    sourceUrl: "https://github.com/Janitha-D",
    description:
      "An end-to-end digital collaboration hub engineered to bridge the gap between skilled freelancers and clients for remote outsourcing, content delivery, and task management.",
    highlights: [
      "High-performance responsive UI optimised for zero-latency navigation and smooth onboarding workflows.",
      "Modular service catalog and structured task submission pipelines.",
      "Secure backend integration with resilient database schemas and RESTful API endpoints.",
    ],
    tags: ["Next.js", "Node.js", "REST APIs", "Database Architecture", "Tailwind CSS"],
    icon: "🐝",
    accentFrom: "from-amber-500/15",
    accentTo: "to-orange-500/5",
    borderHover: "hover:border-amber-500/30",
    tagStyle: "bg-amber-500/10 border-amber-500/20 text-amber-300/80",
    featured: true,
  },
  {
    id: "ai-agent",
    title: "Autonomous AI Agent",
    subtitle: "Intelligent Workflow System",
    timeline: "In Active Development",
    status: "active",
    statusLabel: "In Active Development",
    liveUrl: null,
    sourceUrl: null,
    description:
      "An exploratory applied AI initiative evaluating neural architectures, automated reasoning pipelines, and real-time inference processing for intelligent workflow automation.",
    highlights: [],
    tags: ["Python", "Applied AI", "Machine Learning", "API Architecture"],
    icon: "🧠",
    accentFrom: "from-violet-500/12",
    accentTo: "to-purple-500/5",
    borderHover: "hover:border-violet-500/30",
    tagStyle: "bg-violet-500/10 border-violet-500/20 text-violet-300/80",
    featured: false,
  },
  {
    id: "microservice",
    title: "Scalable Cloud Microservice",
    subtitle: "Distributed Backend System",
    timeline: "Research & Architecture Phase",
    status: "research",
    statusLabel: "Research & Architecture Phase",
    liveUrl: null,
    sourceUrl: null,
    description:
      "A high-throughput backend system modelling concurrent data streams, relational database efficiency, and microservice orchestration at cloud scale.",
    highlights: [],
    tags: ["Java / C++", "Distributed Systems", "SQL / Database", "Docker"],
    icon: "⚙️",
    accentFrom: "from-indigo-500/12",
    accentTo: "to-blue-500/5",
    borderHover: "hover:border-indigo-500/30",
    tagStyle: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300/80",
    featured: false,
  },
];

/* ─── Status Badge ───────────────────────────────────────────────────── */
function StatusBadge({ status, label }: { status: string; label: string }) {
  const styles: Record<string, string> = {
    live: "badge-emerald",
    active: "badge-amber",
    research: "badge-indigo",
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 
        px-2.5 py-1 rounded-full 
        text-[11px] font-semibold tracking-wide
        ${styles[status] ?? "badge-indigo"}
      `}
    >
      {status === "live" && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
        </span>
      )}
      {status === "active" && <span className="text-amber-400">◉</span>}
      {status === "research" && <span className="text-indigo-400">◈</span>}
      {label}
    </span>
  );
}

/* ─── Coming Soon Preview Skeleton ──────────────────────────────────── */
function ComingSoonPreview() {
  return (
    <div className="flex flex-col gap-2 mt-auto pt-4">
      {[70, 55, 45].map((w, i) => (
        <div
          key={i}
          className="shimmer h-2 rounded-full"
          style={{ width: `${w}%` }}
        />
      ))}
    </div>
  );
}

/* ─── Featured Project Card ──────────────────────────────────────────── */
function FeaturedCard({ project }: { project: (typeof PROJECTS)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`
        group relative rounded-2xl p-6 sm:p-8
        glass-card
        border border-white/[0.08]
        ${project.borderHover}
        overflow-hidden
        transition-all duration-300
        hover-lift
        cursor-default
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background gradient */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br ${project.accentFrom} ${project.accentTo}
          opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl
        `}
      />

      {/* Spotlight cursor glow effect */}
      <div
        className="
          absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
          pointer-events-none rounded-2xl overflow-hidden
        "
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col gap-5 h-full">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{project.icon}</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-[#94a3b8] font-medium">
                  {project.subtitle}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <StatusBadge status={project.status} label={project.statusLabel} />
              <span className="text-xs text-[#94a3b8]/60">{project.timeline}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-1.5
                  px-3 py-1.5 rounded-lg
                  bg-white text-black text-xs font-semibold
                  hover:bg-white/90
                  transition-all duration-200
                  hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
                "
              >
                <ExternalLink size={11} strokeWidth={2.5} />
                Live Demo
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-1.5
                  px-3 py-1.5 rounded-lg
                  glass-card text-[#94a3b8] hover:text-white
                  text-xs font-medium
                  border border-white/[0.08] hover:border-white/20
                  transition-all duration-200
                "
              >
                <GitHubIcon size={11} />
                Source
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-[#94a3b8] text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights.length > 0 && (
          <ul className="flex flex-col gap-2">
            {project.highlights.map((hl, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                <span className="text-white/30 mt-0.5 flex-shrink-0">▸</span>
                {hl}
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`
                px-2.5 py-1 rounded-lg text-[11px] font-medium
                border ${project.tagStyle}
              `}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Compact Project Card ───────────────────────────────────────────── */
function CompactCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`
        group relative rounded-2xl p-5 sm:p-6
        glass-card
        border border-white/[0.08]
        ${project.borderHover}
        overflow-hidden
        transition-all duration-300
        hover-lift
        flex flex-col gap-4 h-full
      `}
    >
      {/* Background gradient */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br ${project.accentFrom} ${project.accentTo}
          opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl
        `}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col gap-4 h-full">
        {/* Header */}
        <div className="flex items-start gap-3">
          <span className="text-2xl mt-0.5">{project.icon}</span>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-base font-bold text-white tracking-tight leading-tight">
              {project.title}
            </h3>
            <p className="text-xs text-[#94a3b8]">{project.subtitle}</p>
            <StatusBadge status={project.status} label={project.statusLabel} />
          </div>
        </div>

        {/* Description */}
        <p className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Skeleton preview for coming-soon projects */}
        <ComingSoonPreview />

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`
                px-2 py-0.5 rounded-md text-[10px] font-medium
                border ${project.tagStyle}
              `}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Projects Section ───────────────────────────────────────────────── */
export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#94a3b8]">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient">
            Projects
          </h2>
          <p className="text-[#94a3b8] text-sm max-w-xl leading-relaxed">
            From live production systems to active research — a snapshot of what I&apos;m
            building and exploring.
          </p>
        </motion.div>

        {/* Featured Project */}
        <div>
          {featured.map((p) => (
            <FeaturedCard key={p.id} project={p} />
          ))}
        </div>

        {/* Upcoming / WIP Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {others.map((p, i) => (
            <CompactCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
