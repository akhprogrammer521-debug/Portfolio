"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true, syncTouch: false });
    const onScroll = () => ScrollTrigger.update();
    let frameId;
    const frame = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(frame);
    };
    lenis.on("scroll", onScroll);
    frameId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
}
