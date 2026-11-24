"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Reveal({ children, className = "", delay = 0, y = 36 }) {
  const ref = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;
    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.fromTo(
      ref.current,
      { autoAlpha: 0, y },
      { autoAlpha: 1, y: 0, duration: 0.9, delay, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 88%", once: true } }
    );
    return () => tween.kill();
  }, [delay, y]);

  return <div ref={ref} className={className}>{children}</div>;
}
