import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Shell, SectionHeader } from "../components/Layout";
import { cn } from "../utils/cn";
import { basics } from "../data/onyxData";

export default function Contact() {
  const socials = basics.socials;
  const contactLinks = [
    { label: "GitHub", href: socials.github, icon: "mdi:github" },
    { label: "LinkedIn", href: socials.linkedin, icon: "mdi:linkedin" },
    { label: "Twitter", href: socials.twitter, icon: "simple-icons:x" },
    { label: "Mail", href: `mailto:${basics.email}`, icon: "lucide:mail" },
    { label: "Resume", href: basics.resume, icon: "lucide:file-text" },
  ];

  return (
    <div id="contact">
      <SectionHeader title="Contact" />
      <Shell>
        <div className="grid grid-cols-2 sm:grid-cols-5 border-b border-[var(--line)] sm:border-b-0">
          {contactLinks.map((l, idx) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={cn(
                "group flex items-center justify-center gap-2.5 border-b border-r border-[var(--line)] px-4 py-4 text-[13px] font-medium transition-colors duration-200 hover:bg-[var(--hover)]",
                idx % 2 === 1 && "border-r-0 sm:border-r",
                idx >= 4 && "border-b-0",
                "sm:border-b-0 sm:last:border-r-0",
                idx === 4 && "col-span-2 border-r-0 sm:col-span-1 sm:border-r"
              )}
            >
              <span className="grid size-8 place-items-center rounded-lg border border-[var(--line)] bg-[var(--chip)] text-[var(--muted)] transition-colors group-hover:text-[var(--fg)]">
                <Icon icon={l.icon} className={l.icon === "simple-icons:x" ? "size-3.5" : "size-4"} />
              </span>
              <span className="text-[var(--muted)] transition-colors group-hover:text-[var(--fg)]">
                {l.label}
              </span>
              <Icon
                icon="lucide:arrow-up-right"
                className="size-3.5 text-[var(--soft)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--fg)]"
              />
            </a>
          ))}
        </div>
      </Shell>
    </div>
  );
}
