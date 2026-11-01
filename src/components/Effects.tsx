"use client";
import { useEffect, useRef } from "react";

/** Page-wide background glow, floating particles, scroll parallax and reveal-on-scroll. */
export default function Effects() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));

    if (matchMedia("(prefers-reduced-motion:reduce)").matches) return () => io.disconnect();

    const blobs = document.querySelectorAll<HTMLElement>("#bg i");
    const ph = document.getElementById("ph");
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        blobs.forEach((b, i) => (b.style.transform = `translateY(${-y * (0.12 + i * 0.07)}px)`));
        if (ph) ph.style.transform = `translateY(${y * 0.08}px)`;
        ticking = false;
      });
    };
    addEventListener("scroll", onScroll, { passive: true });

    const c = canvas.current!;
    const x = c.getContext("2d")!;
    let W = 0, H = 0, raf = 0;
    const resize = () => { W = c.width = innerWidth; H = c.height = innerHeight; };
    resize();
    addEventListener("resize", resize);
    const N = innerWidth < 700 ? 30 : 70;
    const P = Array.from({ length: N }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5 + 0.4, v: Math.random() * 0.25 + 0.05, a: Math.random() * 0.6 + 0.2,
    }));
    const loop = () => {
      if (!document.hidden) {
        x.clearRect(0, 0, W, H);
        P.forEach((p) => {
          p.y -= p.v;
          if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
          x.fillStyle = `rgba(190,120,255,${p.a})`;
          x.beginPath(); x.arc(p.x, p.y, p.r, 0, Math.PI * 2); x.fill();
        });
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      io.disconnect();
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div id="bg" aria-hidden="true">
      <canvas id="fx" ref={canvas} />
      <i /><i /><i />
    </div>
  );
}
