import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Routes, Route, Link, useLocation } from "react-router-dom";

// Layout components
import { Shell, SectionHeader, GapBand } from "./components/Layout";
import { cn } from "./utils/cn";

// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";

// Hooks & Data
import { useLocalTime } from "./hooks/useLocalTime";
import { basics, quote, skillGroups } from "./data/onyxData";

const serif = { fontFamily: '"Instrument Serif", Georgia, serif' };

const THEMES = {
  dark: {
    "--bg": "#0a0a0a",
    "--fg": "#f5f5f4",
    "--muted": "#a1a1aa",
    "--soft": "#63636b",
    "--line": "rgba(255,255,255,0.10)",
    "--stripe": "rgba(255,255,255,0.055)",
    "--hover": "rgba(255,255,255,0.05)",
    "--card": "#101010",
    "--chip": "#161616",
  },
  light: {
    "--bg": "#fcfcfb",
    "--fg": "#18181b",
    "--muted": "#52525b",
    "--soft": "#a1a1aa",
    "--line": "rgba(0,0,0,0.10)",
    "--stripe": "rgba(0,0,0,0.055)",
    "--hover": "rgba(0,0,0,0.04)",
    "--card": "#ffffff",
    "--chip": "#f4f4f5",
  },
};

const OnyxPortfolio = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved !== null) {
      return saved === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const location = useLocation();
  const localTime = useLocalTime();

  return (
    <div
      id="top"
      style={THEMES[dark ? "dark" : "light"]}
      className="min-h-dvh scroll-smooth bg-[var(--bg)] font-sans text-[var(--fg)] antialiased transition-colors duration-300"
    >
      {/* ------------------------------- nav ------------------------------- */}
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur-md">
        <Shell className="flex items-center justify-between px-6 py-3 sm:px-8">
          <Link to="/" style={serif} className="text-xl tracking-wide">
            {basics.firstName}
          </Link>
          <nav className="flex items-center gap-5 text-[13px] text-[var(--muted)]">
            {[
              ["Home", "/"],
              ["Projects", "/projects"],
              ["Experience", "/experience"],
            ].map(([label, path]) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  "group relative transition-colors hover:text-[var(--fg)]",
                  location.pathname === path && "text-[var(--fg)] font-semibold"
                )}
              >
                {label}
                <span className={cn(
                  "absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100",
                  location.pathname === path && "scale-x-100 origin-left"
                )} />
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
              className="grid size-7 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] transition-all duration-300 hover:rotate-45 hover:text-[var(--fg)]"
            >
              <Icon icon={dark ? "lucide:sun" : "lucide:moon"} className="size-3.5" />
            </button>
          </nav>
        </Shell>
      </header>

      {/* Hero Header Banner + profile details */}
      <Hero />

      {/* ------------------------------ routes ------------------------------ */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              <Contact />
              <Projects isSearchable={false} />
              <Experience />
              <TechStack groups={skillGroups} />
            </>
          }
        />

        <Route
          path="/projects"
          element={
            <Projects isSearchable={true} />
          }
        />

        <Route
          path="/experience"
          element={
            <Experience />
          }
        />
      </Routes>

      {/* --------------------------- scrolled too far ----------------------- */}
      <SectionHeader title="Scrolled Too Far" />
      <Shell className="px-6 py-12 text-center sm:px-8">
        <p className="text-[14px] text-[var(--muted)]">
          If you&apos;ve read this far, you might be interested in what I do.
        </p>
        <a
          href={`mailto:${basics.email}`}
          className="group mt-5 inline-flex items-center gap-2 rounded-lg bg-[var(--fg)] px-5 py-2.5 text-[13px] font-semibold text-[var(--bg)] transition-transform duration-200 hover:-translate-y-0.5"
        >
          Let&apos;s Talk
          <Icon icon="lucide:arrow-right" className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </Shell>

      {/* -------------------------------- quote ----------------------------- */}
      <GapBand />
      <div className="w-full border-y border-[var(--line)]">
        <Shell className="px-8 py-14 text-center">
          <span style={serif} className="text-4xl text-[var(--soft)]">
            &ldquo;
          </span>
          <p style={serif} className="mx-auto -mt-2 max-w-md text-[26px] italic leading-snug">
            {quote.text || quote}
          </p>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--soft)]">
            — {quote.author || basics.name}
          </p>
        </Shell>
      </div>

      {/* ------------------------------- footer ----------------------------- */}
      <GapBand h="h-5" />
      <div className="w-full border-t border-[var(--line)]">
        <Shell className="border-b-0 px-6 py-8 text-center sm:px-8">
          <p className="text-[14.5px] text-[var(--muted)]">
            Designed &amp; Developed by <span className="font-semibold text-[var(--fg)]">{basics.name}</span>
          </p>
          <p className="mt-1.5 font-mono text-[12px] text-[var(--soft)]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="mt-2.5 flex items-center justify-center gap-2 font-mono text-[12px] text-[var(--soft)]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Bangalore, India · {localTime}
          </p>
        </Shell>
      </div>
    </div>
  );
};

export default OnyxPortfolio;
