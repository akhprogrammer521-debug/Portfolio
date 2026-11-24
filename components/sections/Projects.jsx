"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

function ProjectPreview({ project, position }) {
  const ref = useRef(null);
  const xTo = useRef(null);
  const yTo = useRef(null);

  useEffect(() => {
    xTo.current = gsap.quickTo(ref.current, "left", { duration: 0.45, ease: "power3.out" });
    yTo.current = gsap.quickTo(ref.current, "top", { duration: 0.45, ease: "power3.out" });
  }, []);

  useEffect(() => {
    if (position && xTo.current && yTo.current) {
      xTo.current(position.x + 24);
      yTo.current(position.y + 24);
    }
  }, [position]);

  return (
    <div ref={ref} className={`project-preview ${project ? "is-visible" : ""}`} aria-hidden="true">
      {project && <Image src={project.image} alt="" fill sizes="355px" />}
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const onMove = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const activeProject = projects.find((project) => project.slug === active);

  return (
    <section id="work" className="section-space" aria-labelledby="work-title">
      <div className="section-shell">
        <SectionHeading number="02" title="Selected work" meta="Products, platforms and experiments built with a bias toward clarity." />
        <div className="projects__intro">
          <p id="work-title">An archive of interface systems, product thinking and full-stack experiments.</p>
          <span className="projects__count">06 projects / 2024—2026</span>
        </div>
        <div>
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.03}>
              <Link
                href={`/projects/${project.slug}`}
                className="project-row"
                data-cursor="VIEW"
                onMouseEnter={() => setActive(project.slug)}
                onMouseLeave={() => setActive(null)}
              >
                <span className="project-row__number">{project.number}</span>
                <div className="project-row__main">
                  <div className="project-row__category">{project.shortCategory}</div>
                  <h3 className="project-row__title">{project.title}.</h3>
                  <p className="project-row__description">{project.description}</p>
                </div>
                <span className="project-row__year">{project.year}</span>
                <span className="project-row__arrow"><ArrowUpRight size={17} strokeWidth={1.2} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
      <ProjectPreview project={activeProject} position={position} />
    </section>
  );
}
