"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/data/skills";

export default function TechStack() {
  return (
    <section id="stack" className="section-space" aria-labelledby="stack-title">
      <div className="section-shell">
        <SectionHeading number="03" title="Tech stack" meta="A toolkit shaped by building real interfaces, APIs and database-backed systems." />
        <div className="tech__grid" id="stack-title">
          {skillGroups.map((group, index) => (
            <Reveal key={group.number} delay={index * 0.08} className="skill-group">
              <div className="skill-group__head"><span>{group.number}</span><span>{group.title}</span></div>
              <div className="skill-list">
                {group.items.map((skill) => <span className="skill-list__item" key={skill}>{skill}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
