"use client";

import Reveal from "@/components/ui/Reveal";

const principles = [
  ["01", "CLARITY.", "over complexity"],
  ["02", "QUALITY.", "over shortcuts"],
  ["03", "SYSTEMS.", "over chaos"],
  ["04", "DETAILS.", "make the difference"]
];

export default function Philosophy() {
  return (
    <section className="philosophy section-space" aria-labelledby="philosophy-title">
      <div className="section-shell">
        <div className="section-heading">
          <Reveal><div className="eyebrow">04 / method</div><h2 id="philosophy-title" className="section-heading__title">How I build</h2></Reveal>
          <Reveal delay={0.12} className="section-heading__meta">The principles behind the work: visible in the details, useful in the result.</Reveal>
        </div>
        <div className="philosophy__list">
          {principles.map(([number, word, sub], index) => (
            <Reveal key={number} delay={index * 0.07} className="philosophy__item">
              <span className="philosophy__number">{number}</span>
              <span className="philosophy__word">{word}</span>
              <span className="philosophy__sub">{sub}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
