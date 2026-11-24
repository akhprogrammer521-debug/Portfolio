"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/data/config";

export default function About() {
  const statementRef = useRef(null);
  const data = siteConfig.locales[siteConfig.activeLocale];
  const words = "I design and build digital products where clarity, performance and interaction work together.".split(" ");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !statementRef.current) return undefined;
    gsap.registerPlugin(ScrollTrigger);
    const spans = statementRef.current.querySelectorAll("span");
    const tween = gsap.to(spans, {
      color: "#f4f7fb",
      stagger: 0.08,
      ease: "none",
      scrollTrigger: { trigger: statementRef.current, start: "top 78%", end: "bottom 48%", scrub: 1 }
    });
    return () => tween.kill();
  }, []);

  return (
    <section id="about" className="section-space" aria-labelledby="about-title">
      <div className="section-shell">
        <SectionHeading number="01" title="About" meta="A practical approach to digital product work — from the first interface to the last API response." />
        <p ref={statementRef} id="about-title" className="about__statement">
          {words.map((word, index) => <span key={`${word}-${index}`}>{word} </span>)}
        </p>
        <div className="about__footer">
          <Reveal className="about__index">01.01 / PROFILE</Reveal>
          <Reveal delay={0.12}>
            <p className="about__copy">{data.about}</p>
            <div className="about__education">
              <strong>{data.education.degree}</strong>
              <div>{data.education.school}</div>
              <div>{data.education.location}</div>
              <div>{data.education.period}</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
