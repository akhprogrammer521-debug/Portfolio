"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { projects } from "@/data/projects";

export default function ProjectDetail({ project }) {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <section className="detail-hero section-shell" aria-labelledby="project-title">
        <div className="detail-hero__top">
          <Link href="/#work" className="eyebrow inline-flex items-center gap-2" data-cursor="BACK"><ArrowLeft size={13} /> Back to archive</Link>
          <div className="detail-hero__meta">
            <div><span>Archive</span><strong>{project.number} / 06</strong></div>
            <div><span>Year</span><strong>{project.year}</strong></div>
            <div><span>Role</span><strong>{project.role}</strong></div>
            <div><span>Category</span><strong>{project.category}</strong></div>
          </div>
        </div>
        <Reveal>
          <h1 id="project-title" className="detail-hero__title">{project.title}.</h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="detail-hero__description">{project.description}</p>
        </Reveal>
        <Reveal delay={0.16} className="detail-hero__image">
          <Image src={project.image} alt={`${project.title} project preview`} fill priority sizes="(max-width: 800px) 100vw, 1440px" />
        </Reveal>
      </section>

      <section className="detail-content section-shell">
        <Reveal className="detail-content__label">01 / project notes</Reveal>
        <div className="detail-content__main">
          <Reveal><h2>{project.overview}</h2></Reveal>
          <Reveal delay={0.05} className="detail-content__block">
            <h3>Problem</h3><p>{project.problem}</p>
          </Reveal>
          <Reveal delay={0.08} className="detail-content__block">
            <h3>Solution</h3><p>{project.solution}</p>
          </Reveal>
          <Reveal delay={0.11} className="detail-content__block">
            <h3>Key features</h3>
            <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </Reveal>
          <Reveal delay={0.14} className="detail-content__block">
            <h3>Technology</h3><p>{project.technologies.join(" / ")}</p>
            <div className="detail-cta-row">
              {project.liveUrl ? <MagneticButton href={project.liveUrl} target="_blank" rel="noreferrer" className="outline-button">Live website <ArrowUpRight size={13} /></MagneticButton> : <span className="outline-button opacity-50">Live website / soon</span>}
              {project.githubUrl ? <MagneticButton href={project.githubUrl} target="_blank" rel="noreferrer" className="outline-button">GitHub <ArrowUpRight size={13} /></MagneticButton> : <span className="outline-button opacity-50">GitHub / soon</span>}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="detail-gallery section-shell" aria-label={`${project.title} visual gallery`}>
        {["01 / system view", "02 / interface detail", "03 / responsive state"].map((label, index) => (
          <Reveal key={label} delay={index * 0.06} className={`detail-gallery__tile detail-gallery__tile--${index + 1}`}>
            <Image src={project.image} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" />
            <span>{label}</span>
          </Reveal>
        ))}
      </section>

      <section className="detail-next section-shell">
        <Link href={`/projects/${nextProject.slug}`} className="detail-next__link" data-cursor="NEXT">
          <div><div className="detail-next__label">Next project / {nextProject.number}</div><div className="detail-next__title">{nextProject.title}.</div></div>
          <ArrowUpRight size={36} strokeWidth={1} />
        </Link>
      </section>
    </>
  );
}
