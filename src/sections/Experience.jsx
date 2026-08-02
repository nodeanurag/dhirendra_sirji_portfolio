import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Shell, SectionHeader } from "../components/Layout";
import { cn } from "../utils/cn";
import { experienceList, educationList } from "../data/onyxData";

export default function Experience() {
  return (
    <div id="experience">
      {/* ----------------------------- experience --------------------------- */}
      <SectionHeader title="Experience" />
      <Shell>
        {experienceList.map((e, i) => (
          <motion.div
            key={e.company + i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className={cn(
              "px-6 py-6 transition-colors duration-200 hover:bg-[var(--hover)] sm:px-8",
              i > 0 && "border-t border-[var(--line)]",
            )}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[15px] font-semibold text-[var(--fg)]">
                {e.role} <span className="text-[var(--soft)]">·</span>{" "}
                <span className="text-[var(--muted)]">{e.company}</span>
              </h3>
              <span className="font-mono text-[11px] text-[var(--soft)]">{e.date}</span>
            </div>
            <ul className="mt-3 space-y-2">
              {e.highlights.map((h, j) => (
                <li key={j} className="flex gap-3 text-[13.5px] leading-relaxed text-[var(--muted)]">
                  <span className="mt-[8px] size-1 shrink-0 rounded-full bg-[var(--soft)]" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </Shell>

      {/* ----------------------------- education --------------------------- */}
      <SectionHeader title="Education" />
      <Shell>
        {educationList.map((edu, i) => (
          <motion.div
            key={edu.degree + i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className={cn(
              "px-6 py-6 transition-colors duration-200 hover:bg-[var(--hover)] sm:px-8",
              i > 0 && "border-t border-[var(--line)]",
            )}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[15px] font-semibold text-[var(--fg)]">
                {edu.degree} <span className="text-[var(--soft)]">·</span>{" "}
                <span className="text-[var(--muted)]">{edu.school}</span>
              </h3>
              <span className="font-mono text-[11px] text-[var(--soft)]">{edu.date}</span>
            </div>
            <p className="mt-1.5 font-mono text-[11px] text-[var(--soft)]">{edu.grade}</p>
          </motion.div>
        ))}
      </Shell>
    </div>
  );
}
