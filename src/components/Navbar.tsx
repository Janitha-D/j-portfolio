"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

/* ─── Nav Links ──────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

/* ─── Navbar Component ───────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* Track scroll position to add extra blur when scrolled */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight active nav link based on scroll */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Floating Pill Navbar ───────────────────────────────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <nav
          className={`
            flex items-center justify-between gap-4 
            rounded-2xl px-4 py-2.5 
            nav-blur
            transition-all duration-300
            w-full max-w-4xl
            ${scrolled ? "shadow-[0_8px_40px_rgba(0,0,0,0.6)]" : ""}
          `}
        >
          {/* ── Monogram Logo ─────────────────────────────────────────── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
              flex items-center justify-center
              w-8 h-8 rounded-lg
              border border-white/10
              bg-white/[0.05]
              font-mono text-sm font-semibold tracking-wider
              text-white/90
              hover:bg-white/[0.1] hover:border-white/20
              transition-all duration-200
              flex-shrink-0
            "
            aria-label="Scroll to top"
          >
            JD
          </button>

          {/* ── Desktop Nav Links ──────────────────────────────────────── */}
          <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`
                      px-3 py-1.5 rounded-lg text-sm font-medium
                      transition-all duration-200
                      ${
                        isActive
                          ? "text-white bg-white/[0.08]"
                          : "text-[#94a3b8] hover:text-white hover:bg-white/[0.05]"
                      }
                    `}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* ── Right Actions ─────────────────────────────────────────── */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Availability Indicator */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-medium text-emerald-400 whitespace-nowrap hidden lg:block">
                Available
              </span>
            </div>

            {/* Download CV Button */}
            {/* REPLACE href="#" WITH DIRECT CV / PDF LINK */}
            <a
              href="#"
              download
              className="
                flex items-center gap-1.5
                px-3 py-1.5 rounded-lg
                bg-white text-black
                text-xs font-semibold
                hover:bg-white/90
                transition-all duration-200
                hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
              "
            >
              <Download size={12} strokeWidth={2.5} />
              <span className="hidden sm:block">CV</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden p-2 rounded-lg text-[#94a3b8] hover:text-white hover:bg-white/[0.05] transition-all"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Dropdown ────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="
              fixed top-20 left-4 right-4 z-40
              rounded-2xl p-4
              nav-blur
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              border border-white/[0.08]
              md:hidden
            "
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="
                      w-full text-left px-4 py-3 rounded-xl text-sm font-medium
                      text-[#94a3b8] hover:text-white hover:bg-white/[0.05]
                      transition-all duration-200
                    "
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-white/[0.06]">
                {/* REPLACE href="#" WITH DIRECT CV / PDF LINK */}
                <a
                  href="#"
                  download
                  className="
                    flex items-center gap-2 px-4 py-3 rounded-xl
                    text-sm font-semibold text-white
                    bg-white/[0.08] hover:bg-white/[0.12]
                    transition-all duration-200
                  "
                >
                  <Download size={14} />
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
