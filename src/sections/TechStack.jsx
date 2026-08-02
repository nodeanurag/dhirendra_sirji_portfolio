import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Shell, SectionHeader } from "../components/Layout";
import { cn } from "../utils/cn";

const CATEGORY_ICONS = {
  All: "lucide:layers",
  Backend: "lucide:server",
  Frontend: "lucide:layout",
  Databases: "lucide:database",
  "DevOps & Tools": "lucide:terminal",
  Others: "lucide:cpu",
};

const SKILL_ICONS = {
  Python: "logos:python",
  Django: "logos:django-icon",
  "Django REST Framework": "logos:django-icon",
  FastAPI: "logos:fastapi-icon",
  "Go / Golang": "logos:go",
  JavaScript: "logos:javascript",
  PostgreSQL: "logos:postgresql",
  MySQL: "logos:mysql-icon",
  "SQLite / SQLite3": "logos:sqlite",
  PynamoDB: "logos:aws-dynamodb",
  Git: "logos:git-icon",
  GitHub: "logos:github-icon",
  GitLab: "logos:gitlab",
  Docker: "logos:docker-icon",
  "AWS EC2": "logos:aws",
  "Azure CLI": "logos:microsoft-azure",
  "Raspberry Pi": "logos:raspberry-pi",
  Pandas: "logos:pandas-icon",
  PySpark: "logos:spark",
  "Shell Scripting": "logos:bash-icon",
  FFmpeg: "logos:ffmpeg-icon",
  Kolibri: "lucide:book-open",
  Linux: "logos:linux-tux",
  "Raspbian OS": "logos:raspberry-pi",
};

export default function TechStack({ groups }) {
  const [active, setActive] = useState("All");
  const tabs = ["All", ...groups.map((g) => g.category)];
  const items =
    active === "All"
      ? groups.flatMap((g) => g.items)
      : groups.find((g) => g.category === active)?.items ?? [];

  return (
    <>
      <SectionHeader
        title="Tech Stack"
        aside={
          <span className="hidden font-mono text-[10px] tracking-wider text-[var(--soft)] sm:inline">
            ( select tab to filter )
          </span>
        }
      />
      <Shell className="px-6 py-6 sm:px-8">
        <div className="flex flex-wrap gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--chip)] p-1">
          {tabs.map((t) => {
            const IconComponent = CATEGORY_ICONS[t] || "lucide:layers";
            return (
              <button
                key={t}
                type="button"
                onClick={() => setActive(t)}
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[12px] font-medium transition-all duration-200 cursor-pointer",
                  active === t
                    ? "bg-[var(--fg)] text-[var(--bg)] shadow-sm"
                    : "text-[var(--muted)] hover:bg-[var(--hover)] hover:text-[var(--fg)]",
                )}
              >
                <Icon icon={IconComponent} className="size-3.5" />
                {t}
              </button>
            );
          })}
        </div>
        <motion.div layout className="mt-6 flex flex-wrap gap-2.5">
          <AnimatePresence mode="popLayout">
            {items.map((item) => {
              const IconComponent = SKILL_ICONS[item] || "lucide:code-2";
              return (
                <motion.span
                  key={item}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 25 }}
                  className={cn(
                    "flex cursor-default items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 font-mono text-[12px] text-[var(--muted)] transition-all duration-200",
                    "hover:-translate-y-0.5 hover:border-[var(--fg)] hover:bg-[var(--fg)] hover:text-[var(--bg)]",
                  )}
                >
                  <Icon icon={IconComponent} className="size-4 shrink-0" />
                  {item}
                </motion.span>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Shell>
    </>
  );
}
