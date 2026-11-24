"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowDownRight } from "lucide-react";
import { siteConfig } from "@/data/config";

export default function Hero() {
  const root = useRef(null);
  const data = siteConfig.locales[siteConfig.activeLocale];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !root.current) return undefined;
    const elements = root.current.querySelectorAll("[data-hero-reveal]");
    const timeline = gsap.timeline({ delay: 1.72 });
    timeline.fromTo(elements, { y: 34, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.85, stagger: 0.08, ease: "power4.out" });

    const marks = root.current.querySelectorAll("[data-parallax]");
    const onMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      marks.forEach((mark) => {
        const amount = Number(mark.dataset.parallax) || 8;
        gsap.to(mark, { x: x * amount, y: y * amount, duration: 1.1, ease: "power3.out", overwrite: true });
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => { timeline.kill(); window.removeEventListener("pointermove", onMove); };
  }, []);

  return (
    <section ref={root} id="top" className="hero" aria-labelledby="hero-title">
      <div className="technical-grid hero__grid" />
      <div className="hero__glow" data-parallax="10" />
      <div className="crosshair crosshair--one" data-parallax="16" />
      <div className="crosshair crosshair--two" data-parallax="-10" />
      <div className="section-shell">
        <div className="hero__header">
          <div className="hero__intro">
            <div className="hero__kicker" data-hero-reveal>
              <span className="blue-dot" /> HI, MY NAME IS
            </div>
            <h1 id="hero-title" className="hero__title">
              <span data-hero-reveal>AHMAD</span>
              <span data-hero-reveal><em>IBRAHIM</em></span>
            </h1>
            <p className="hero__role" data-hero-reveal>{data.role} / 001</p>
          </div>
          <div className="hero__aside" data-hero-reveal aria-label="System information">
            <div className="hero__metric"><span>System</span><strong>Online</strong></div>
            <div className="hero__metric"><span>Build</span><strong>Stable</strong></div>
            <div className="hero__metric"><span>Version</span><strong>v1.0.0</strong></div>
            <div className="hero__metric"><span>Stack</span><strong>Full-stack</strong></div>
            <div className="hero__metric"><span>LOC</span><strong>Remote</strong></div>
          </div>
        </div>

        <p className="hero__statement" data-hero-reveal>
          I build digital experiences <span>that combine clean interfaces, scalable systems and real-world function.</span>
        </p>

        <div className="hero__bottom" data-hero-reveal>
          <div className="hero__terminal" aria-label="Decorative terminal status">
            <div className="hero__terminal-head"><span>~/ahmad/portfolio</span><span>●●●</span></div>
            <div><span className="text-blue-400">$</span> git status</div>
            <div>On branch <strong>main</strong></div>
            <div><span className="text-blue-400">$</span> npm run build</div>
            <div><strong>✓ Ready for deployment</strong></div>
          </div>
          <Link href="#about" className="hero__scroll" data-cursor="OPEN">
            Scroll to explore <ArrowDownRight size={14} strokeWidth={1.3} />
          </Link>
        </div>
      </div>
    </section>
  );
}
