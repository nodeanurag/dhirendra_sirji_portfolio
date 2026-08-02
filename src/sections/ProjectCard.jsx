import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../utils/cn";

export default function ProjectCard({ project: p }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={cn(
        "group flex flex-col justify-between rounded-xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--soft)] hover:shadow-md h-full",
      )}
    >
      <div>
        {/* name + live */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <h3 className="text-[15px] font-semibold tracking-wide text-[var(--fg)]">{p.name}</h3>
            {p.featured && (
              <span className="rounded bg-amber-400/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-500">
                Featured
              </span>
            )}
          </div>
          {p.live_url && (
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--muted)] shrink-0">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              Live
            </span>
          )}
        </div>
        <p className="mt-1 font-mono text-[11px] text-[var(--soft)]">{p.tag}</p>
        <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted)] line-clamp-5">{p.description}</p>

        {/* Collapsible Details Trigger */}
        {p.details && (
          <div className="mt-3">
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-1 font-mono text-[10px] text-[var(--soft)] hover:text-[var(--fg)] cursor-pointer outline-none"
            >
              {showDetails ? "Hide engineering details" : "Show engineering details"}
              <Icon icon={showDetails ? "lucide:chevron-up" : "lucide:chevron-down"} className="size-3" />
            </button>
            <AnimatePresence initial={false}>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-2.5 rounded-lg border border-[var(--line)]/50 bg-[var(--chip)]/60 p-3 font-sans text-[12.5px] leading-relaxed text-[var(--muted)] border-l-2 border-l-[var(--soft)]">
                    {p.details}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* tech + links */}
      <div className="mt-4 flex items-center justify-between gap-3 pt-3 border-t border-[var(--line)]/50">
        <div className="flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded bg-[var(--chip)] px-2 py-0.5 font-mono text-[10.5px] text-[var(--muted)] border border-[var(--line)]/30"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2.5 text-[var(--soft)]">
          {p.live_url && (
            <a
              href={p.live_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.name} live site`}
              className="transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--fg)]"
            >
              <Icon icon="lucide:globe" className="size-4" />
            </a>
          )}
          {p.repo_url && (
            <a
              href={p.repo_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.name} repository`}
              className="transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--fg)]"
            >
              <Icon icon="mdi:github" className="size-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
