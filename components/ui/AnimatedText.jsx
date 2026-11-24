"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedText({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !ref.current) return undefined;
    const words = ref.current.querySelectorAll(".animated-word");
    const tween = gsap.fromTo(words, { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.035, delay: 1.8, ease: "power4.out" });
    return () => tween.kill();
  }, []);

  return <span ref={ref} className={`animated-text ${className}`}>{children}</span>;
}
