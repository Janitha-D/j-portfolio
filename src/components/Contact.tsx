"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";

/* ─── Custom SVG Icons (brand icons not in lucide-react) ─────────────── */

/** GitHub mark */
const GitHubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

/** LinkedIn mark */
const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.447 20.452H17.21v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.985V9h3.103v1.561h.044c.432-.82 1.487-1.684 3.059-1.684 3.27 0 3.875 2.152 3.875 4.95v6.625zM5.337 7.433a1.8 1.8 0 110-3.598 1.8 1.8 0 010 3.598zM3.725 20.452H6.95V9H3.725v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/** Instagram mark */
const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

/** WhatsApp mark */
const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/** Discord mark */
const DiscordIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

/* ─── Contact Data ───────────────────────────────────────────────────── */
const EMAIL = "janithadilshan317@gmail.com";

const SOCIAL_LINKS = [
  {
    id: "github",
    label: "GitHub",
    handle: "@Janitha-D",
    href: "https://github.com/Janitha-D",
    icon: GitHubIcon,
    accentColor: "hover:border-white/30 hover:text-white",
    bgHover: "hover:bg-white/[0.05]",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "janitha-dilshan",
    href: "https://www.linkedin.com/in/janitha-dilshan",
    icon: LinkedInIcon,
    accentColor: "hover:border-blue-500/40 hover:text-blue-400",
    bgHover: "hover:bg-blue-500/[0.05]",
  },
  {
    id: "discord-user",
    label: "Discord (DM)",
    handle: "dilshan7",
    href: "https://discord.com/users/dilshan7",
    icon: DiscordIcon,
    accentColor: "hover:border-indigo-500/40 hover:text-indigo-400",
    bgHover: "hover:bg-indigo-500/[0.05]",
  },
  {
    id: "discord-server",
    label: "Discord Server",
    handle: "Join Community",
    href: "https://discord.gg/xAZv3Q3Prh",
    icon: DiscordIcon,
    accentColor: "hover:border-violet-500/40 hover:text-violet-400",
    bgHover: "hover:bg-violet-500/[0.05]",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    handle: "+94 701 607 317",
    href: "https://wa.me/94701607317",
    icon: WhatsAppIcon,
    accentColor: "hover:border-emerald-500/40 hover:text-emerald-400",
    bgHover: "hover:bg-emerald-500/[0.05]",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@janitha__d",
    href: "https://www.instagram.com/janitha__d?psln=MW43eTR3MzNqcnIwMQ==",
    icon: InstagramIcon,
    accentColor: "hover:border-pink-500/40 hover:text-pink-400",
    bgHover: "hover:bg-pink-500/[0.05]",
  },
];

/* ─── Email Copy Card ────────────────────────────────────────────────── */
function EmailCard() {
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setToast(true);
      setTimeout(() => setCopied(false), 2000);
      setTimeout(() => setToast(false), 2500);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <div className="relative">
      {/* Toast notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              absolute -top-12 left-1/2 -translate-x-1/2
              px-3 py-1.5 rounded-lg
              bg-emerald-500/20 border border-emerald-500/30
              text-emerald-400 text-xs font-semibold
              whitespace-nowrap shadow-lg
              flex items-center gap-1.5 z-20
            "
          >
            <Check size={11} strokeWidth={2.5} />
            Copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Email card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
          group flex items-center justify-between gap-4
          p-5 sm:p-6 rounded-2xl
          glass-card
          border border-white/[0.08] hover:border-white/[0.16]
          hover-lift
          transition-all duration-300
          overflow-hidden relative
        "
      >
        {/* Hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {/* Left side */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl glass-card border border-white/10 flex items-center justify-center text-[#94a3b8] flex-shrink-0">
            <Mail size={16} strokeWidth={1.8} />
          </div>
          <div>
            <p className="text-xs text-[#94a3b8] mb-0.5 font-medium">Primary Email</p>
            <p className="text-sm font-semibold text-white tracking-tight break-all">
              {EMAIL}
            </p>
          </div>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="
            relative z-10 flex-shrink-0
            flex items-center gap-1.5
            px-3 py-1.5 rounded-lg
            glass-card border border-white/[0.08] hover:border-white/20
            text-xs font-medium
            text-[#94a3b8] hover:text-white
            transition-all duration-200
            cursor-pointer
          "
          aria-label="Copy email to clipboard"
        >
          {copied ? (
            <>
              <Check size={12} className="text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              Copy
            </>
          )}
        </button>
      </motion.div>
    </div>
  );
}

/* ─── Social Link Button ─────────────────────────────────────────────── */
function SocialButton({
  link,
  index,
}: {
  link: (typeof SOCIAL_LINKS)[0];
  index: number;
}) {
  const Icon = link.icon;

  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={`
        group flex items-center justify-between gap-3
        p-4 rounded-xl
        glass-card
        border border-white/[0.08]
        ${link.accentColor}
        ${link.bgHover}
        text-[#94a3b8]
        transition-all duration-200
        hover-lift
      `}
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 transition-colors duration-200">
          <Icon size={16} />
        </div>
        <div>
          <p className="text-xs font-semibold text-white/80 group-hover:text-white transition-colors">
            {link.label}
          </p>
          <p className="text-[10px] text-[#94a3b8]/70">{link.handle}</p>
        </div>
      </div>
      <ExternalLink
        size={11}
        className="text-white/20 group-hover:text-white/50 transition-colors flex-shrink-0"
      />
    </motion.a>
  );
}

/* ─── Contact Section ────────────────────────────────────────────────── */
export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#94a3b8]">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gradient leading-tight">
            Let&apos;s build something
            <br />
            exceptional together.
          </h2>
          <p className="text-[#94a3b8] text-sm max-w-lg mx-auto leading-relaxed">
            Open to discussing internships, part-time software engineering roles,
            freelance collaborations, and innovative project ideas. Reach out — I
            respond promptly.
          </p>
        </motion.div>

        {/* Email Copy Card */}
        <EmailCard />

        {/* Social Links Grid */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold tracking-widest uppercase text-[#94a3b8] mb-4"
          >
            Connect
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SOCIAL_LINKS.map((link, i) => (
              <SocialButton key={link.id} link={link} index={i} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="
            pt-8 border-t border-white/[0.06]
            flex flex-col sm:flex-row items-center justify-between gap-4
          "
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-semibold text-white/60">JD</span>
            <span className="text-[#94a3b8] text-xs">
              © 2026 Janitha Dilshan. Designed for speed &amp; simplicity.
            </span>
          </div>
          <p className="text-xs text-[#94a3b8]/50">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
