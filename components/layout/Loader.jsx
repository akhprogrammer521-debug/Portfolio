"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader() {
  const root = useRef(null);
  const percent = useRef(null);
  const bar = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      root.current?.remove();
      return undefined;
    }

    const counter = { value: 0 };
    const timeline = gsap.timeline({
      onComplete: () => {
        window.dispatchEvent(new Event("portfolio:loaded"));
        gsap.to(root.current, { autoAlpha: 0, duration: 0.65, ease: "power3.inOut", onComplete: () => root.current?.remove() });
      }
    });

    timeline
      .fromTo(root.current, { autoAlpha: 1 }, { autoAlpha: 1, duration: 0.2 })
      .to(counter, {
        value: 100,
        duration: 1.55,
        ease: "power2.out",
        onUpdate: () => {
          if (percent.current) percent.current.textContent = `${Math.round(counter.value).toString().padStart(3, "0")}%`;
          if (bar.current) bar.current.style.width = `${counter.value}%`;
        }
      })
      .to(root.current, { yPercent: -100, duration: 0.85, ease: "expo.inOut" }, "+=0.1");

    return () => timeline.kill();
  }, []);

  return (
    <div ref={root} className="loader" aria-label="Loading portfolio" role="status">
      <div className="loader__inner">
        <div className="loader__label">
          <span>AI / portfolio system</span>
          <span ref={percent}>000%</span>
        </div>
        <div className="loader__mark">Ahmad Ibrahim<span className="blue-dot" /></div>
        <div className="loader__bar"><span ref={bar} /></div>
      </div>
    </div>
  );
}
