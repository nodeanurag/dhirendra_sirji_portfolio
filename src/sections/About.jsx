import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Shell, SectionHeader } from "../components/Layout";
import { aboutParagraphs } from "../data/onyxData";

export default function About() {
  return (
    <>
      <SectionHeader title="About" />
      <Shell className="px-6 py-7 sm:px-8 space-y-4">
        {aboutParagraphs.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-[14.5px] leading-relaxed text-[var(--muted)]"
          >
            {para}
          </motion.p>
        ))}
      </Shell>
    </>
  );
}
