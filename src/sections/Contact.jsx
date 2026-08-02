import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Shell, SectionHeader } from "../components/Layout";
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
        <div className="flex flex-wrap">
          {contactLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex min-w-[50%] flex-1 items-center justify-center gap-2.5 border-b border-r border-[var(--line)] px-4 py-4 text-[13px] font-medium transition-colors duration-200 last:border-r-0 hover:bg-[var(--hover)] sm:min-w-0 sm:border-b-0"
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
