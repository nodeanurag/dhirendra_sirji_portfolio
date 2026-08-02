import React from "react";
import { cn } from "../utils/cn";

const STRIPES =
  "[background-image:repeating-linear-gradient(315deg,var(--stripe)_0,var(--stripe)_1px,transparent_1px,transparent_7px)]";
const serif = { fontFamily: '"Instrument Serif", Georgia, serif' };

export function Shell({ children, className }) {
  return (
    <div className={cn("mx-auto w-full max-w-[720px] border-x border-[var(--line)]", className)}>
      {children}
    </div>
  );
}

export function SectionHeader({ title, aside }) {
  return (
    <div className={cn("w-full border-y border-[var(--line)]", STRIPES)}>
      <Shell className="flex items-center justify-between gap-4 bg-[var(--bg)] px-6 py-2.5 sm:px-8">
        <h2 style={serif} className="text-2xl tracking-wide text-[var(--fg)]">
          {title}
        </h2>
        {aside}
      </Shell>
    </div>
  );
}

export function GapBand({ h = "h-7" }) {
  return (
    <div className={cn("w-full", STRIPES, h)}>
      <Shell className="h-full" />
    </div>
  );
}
