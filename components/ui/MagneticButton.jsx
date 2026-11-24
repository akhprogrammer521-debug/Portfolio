"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MagneticButton({ children, className = "", ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || touch || !ref.current) return undefined;
    const xTo = gsap.quickTo(ref.current, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(ref.current, "y", { duration: 0.4, ease: "power3.out" });
    const onMove = (event) => {
      const bounds = ref.current.getBoundingClientRect();
      xTo((event.clientX - (bounds.left + bounds.width / 2)) * 0.18);
      yTo((event.clientY - (bounds.top + bounds.height / 2)) * 0.18);
    };
    const onLeave = () => { xTo(0); yTo(0); };
    ref.current.addEventListener("pointermove", onMove);
    ref.current.addEventListener("pointerleave", onLeave);
    return () => {
      ref.current?.removeEventListener("pointermove", onMove);
      ref.current?.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <a ref={ref} className={className} data-cursor="OPEN" {...props}>{children}</a>;
}
