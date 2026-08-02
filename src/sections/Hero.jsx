import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Shell } from "../components/Layout";
import { basics } from "../data/onyxData";

const serif = { fontFamily: '"Instrument Serif", Georgia, serif' };

const HEADLINE_TITLES = [
  "Senior Software Engineer",
  "Distributed Systems Builder",
  "Automation Specialist",
  "Offline-First Architect",
];

export default function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % HEADLINE_TITLES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ------------------------------ banner ------------------------------ */}
      <Shell className="px-2 pt-2 sm:px-3 sm:pt-3">
        <div className="relative h-36 overflow-hidden sm:h-44 bg-neutral-900 rounded-lg">
          <img
            src="/images/cover.jpg"
            alt="Steve Jobs at desk"
            className="w-full h-full object-cover object-center opacity-65 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/40 to-transparent" />
          <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_5px)]" />
          <div className="absolute inset-0 [background-image:repeating-linear-gradient(90deg,rgba(0,0,0,0.12)_0,rgba(0,0,0,0.12)_1px,transparent_1px,transparent_28px)] opacity-30" />
        </div>
      </Shell>

      {/* ----------------------------- identity ----------------------------- */}
      <Shell className="px-6 py-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-5"
        >
          <div className="grid size-20 shrink-0 place-items-center overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--chip)]">
            <img src={basics.avatar} alt={basics.name} className="h-full w-full object-cover" />
          </div>
          <div>
            <h1 style={serif} className="text-[28px] leading-tight tracking-wide">
              {basics.name}
            </h1>
            <div className="h-[20px] overflow-hidden mt-0.5">
              <AnimatePresence mode="wait">
                <motion.p
                  key={headlineIndex}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="font-mono text-[13px] text-[var(--muted)]"
                >
                  {HEADLINE_TITLES[headlineIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            <p className="mt-1 flex items-center gap-1 font-mono text-[11px] text-[var(--soft)]">
              <Icon icon="lucide:map-pin" className="size-3" /> {basics.location}
            </p>
          </div>
        </motion.div>
      </Shell>
    </>
  );
}
