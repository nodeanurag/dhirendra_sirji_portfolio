import React, { useMemo } from "react";
import { Shell, SectionHeader } from "../components/Layout";
import { useGithubHeatmap } from "../hooks/useGithubHeatmap";
import { basics } from "../data/onyxData";

const HEAT_OPACITY = [0.07, 0.25, 0.45, 0.7, 1];
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function GithubActivity() {
  const heatmap = useGithubHeatmap(basics.githubUser);

  const monthLabels = useMemo(() => {
    const now = new Date();
    return Array.from({ length: 12 }, (_, i) => MONTH_NAMES[(now.getMonth() + 1 + i) % 12]);
  }, []);

  return (
    <>
      <SectionHeader
        title="GitHub Activity"
        aside={
          heatmap.live ? (
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--muted)]">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              Live
            </span>
          ) : undefined
        }
      />
      <Shell className="px-6 py-6 sm:px-8">
        <div className="onyx-scroll overflow-x-auto pb-2">
          <div className="min-w-[640px]">
            <div className="mb-1.5 flex justify-between pr-8 font-mono text-[10px] text-[var(--soft)]">
              {monthLabels.map((m, i) => (
                <span key={m + i}>{m}</span>
              ))}
            </div>
            <div className="grid grid-flow-col grid-rows-7 gap-[3px]">
              {heatmap.cells.map((lvl, i) =>
                lvl === null ? (
                  <span key={i} className="size-[10px]" />
                ) : (
                  <span
                    key={i}
                    className="size-[10px] rounded-[2px] bg-[var(--fg)] transition-transform duration-150 hover:scale-125"
                    style={{ opacity: HEAT_OPACITY[lvl] }}
                  />
                ),
              )}
            </div>
            <div className="mt-2.5 flex items-center justify-between font-mono text-[11px] text-[var(--muted)]">
              <span>{heatmap.total} contributions in the last year</span>
              <span className="flex items-center gap-1.5">
                Less
                {HEAT_OPACITY.map((o) => (
                  <span key={o} className="size-[10px] rounded-[2px] bg-[var(--fg)]" style={{ opacity: o }} />
                ))}
                More
              </span>
            </div>
          </div>
        </div>
      </Shell>
    </>
  );
}
