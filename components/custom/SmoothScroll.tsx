// SmoothScroll.tsx
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // or use duration: 1.2
      smoothWheel: true,
      touchMultiplier: 2,
      autoResize: true,
      autoRaf: false, // we'll manually control raf
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}
