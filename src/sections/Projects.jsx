import React, { useState, useMemo } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Shell, SectionHeader } from "../components/Layout";
import { cn } from "../utils/cn";
import ProjectCard from "./ProjectCard";
import { allProjects } from "../data/onyxData";

export default function Projects({ isSearchable = false }) {
  const [projectTab, setProjectTab] = useState(isSearchable ? "All" : "Official");
  const [searchQuery, setSearchQuery] = useState("");

  const officialProjects = useMemo(() => allProjects.filter((p) => !p.tag.includes("Personal Project")), []);
  const personalProjects = useMemo(() => allProjects.filter((p) => p.tag.includes("Personal Project")), []);

  const displayedProjects = useMemo(() => {
    return allProjects.filter((p) => {
      // Category filter
      if (projectTab === "Official" && p.tag.includes("Personal Project")) return false;
      if (projectTab === "Personal" && !p.tag.includes("Personal Project")) return false;
      
      // Search query filter (only active when isSearchable is true)
      if (isSearchable && searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tech.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [projectTab, searchQuery, isSearchable]);

  return (
    <div id="projects">
      <SectionHeader
        title="Projects"
        aside={
          !isSearchable ? (
            <div className="flex gap-1 rounded-lg border border-[var(--line)] bg-[var(--chip)] p-0.5">
              <button
                type="button"
                onClick={() => setProjectTab("Official")}
                className={cn(
                  "rounded-md px-2.5 py-1 text-[11px] font-medium transition-all duration-200 cursor-pointer",
                  projectTab === "Official"
                    ? "bg-[var(--fg)] text-[var(--bg)] shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--fg)]",
                )}
              >
                Official Projects
              </button>
              <button
                type="button"
                onClick={() => setProjectTab("Personal")}
                className={cn(
                  "rounded-md px-2.5 py-1 text-[11px] font-medium transition-all duration-200 cursor-pointer",
                  projectTab === "Personal"
                    ? "bg-[var(--fg)] text-[var(--bg)] shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--fg)]",
                )}
              >
                Personal Projects
              </button>
            </div>
          ) : undefined
        }
      />
      <Shell className="px-6 py-6 sm:px-8">
        {/* Search Bar Dashboard (only for direct /projects route) */}
        {isSearchable && (
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[var(--line)] pb-5">
            <div className="relative flex-1 max-w-xs">
              <Icon icon="lucide:search" className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[var(--soft)]" />
              <input
                type="text"
                placeholder="Search projects, tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-[var(--line)] bg-[var(--chip)] py-2 pl-9 pr-4 text-[12.5px] text-[var(--fg)] placeholder-[var(--soft)] outline-none transition-all focus:border-[var(--soft)]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--soft)] hover:text-[var(--fg)] cursor-pointer"
                >
                  <Icon icon="lucide:x" className="size-3.5" />
                </button>
              )}
            </div>

            <div className="flex gap-1 rounded-lg border border-[var(--line)] bg-[var(--chip)] p-0.5">
              {[
                { id: "All", label: "All", count: allProjects.length },
                { id: "Official", label: "Official", count: officialProjects.length },
                { id: "Personal", label: "Personal", count: personalProjects.length },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setProjectTab(tab.id)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium transition-all duration-200 cursor-pointer",
                    projectTab === tab.id
                      ? "bg-[var(--fg)] text-[var(--bg)] shadow-sm"
                      : "text-[var(--muted)] hover:text-[var(--fg)]",
                  )}
                >
                  <span>{tab.label}</span>
                  <span className={cn(
                    "rounded px-1 text-[9px] font-mono",
                    projectTab === tab.id
                      ? "bg-[var(--bg)]/15 text-[var(--bg)]"
                      : "bg-[var(--line)]/50 text-[var(--soft)]"
                  )}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        <motion.div layout className="grid gap-4 sm:grid-cols-2 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((p) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {displayedProjects.length === 0 && (
          <div className="py-12 text-center text-[var(--muted)] text-[13.5px]">
            No projects match your search query.
          </div>
        )}
      </Shell>
    </div>
  );
}
