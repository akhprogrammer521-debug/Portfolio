"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const ref = useRef(null);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduce || !ref.current) return undefined;
    const xTo = gsap.quickTo(ref.current, "x", { duration: 0.28, ease: "power3.out" });
    const yTo = gsap.quickTo(ref.current, "y", { duration: 0.28, ease: "power3.out" });
    const onMove = (event) => { xTo(event.clientX); yTo(event.clientY); ref.current.classList.add("is-visible"); };
    const onOver = (event) => {
      const target = event.target.closest?.("[data-cursor]");
      if (target) {
        ref.current.textContent = target.dataset.cursor || "";
        ref.current.classList.add("is-active");
      }
    };
    const onOut = (event) => {
      const target = event.target.closest?.("[data-cursor]");
      if (target && !target.contains(event.relatedTarget)) {
        ref.current.textContent = "";
        ref.current.classList.remove("is-active");
      }
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    window.addEventListener("pointerout", onOut);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerout", onOut);
    };
  }, []);

  return <div ref={ref} className="cursor" aria-hidden="true" />;
}
