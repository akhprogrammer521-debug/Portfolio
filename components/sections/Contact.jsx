"use client";

import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import { siteConfig, socialLinks } from "@/data/config";

export default function Contact() {
  const data = siteConfig.locales[siteConfig.activeLocale];
  return (
    <section id="contact" className="contact section-space" aria-labelledby="contact-title">
      <div className="contact__orb" />
      <div className="section-shell">
        <div className="eyebrow">05 / contact</div>
        <Reveal>
          <h2 id="contact-title" className="contact__title">Let&apos;s build<br /><em>something.</em></h2>
        </Reveal>
        <div className="contact__footer">
          <MagneticButton href={`mailto:${siteConfig.email}`} className="contact__email">
            <span>{siteConfig.email}</span><ArrowUpRight size={23} strokeWidth={1.2} />
          </MagneticButton>
          <div className="contact__status">
            <span className="blue-dot" /> {data.availability} / {siteConfig.location}
          </div>
        </div>
        <div className="flex flex-wrap gap-5 pt-10 text-[10px] font-mono uppercase tracking-[0.12em] text-[var(--muted)]">
          {socialLinks.map((link) => link.available ? <a key={link.label} href={link.href} data-cursor="OPEN" className="transition-colors hover:text-white">{link.label} ↗</a> : <span key={link.label} className="opacity-40">{link.label} / soon</span>)}
        </div>
      </div>
    </section>
  );
}
