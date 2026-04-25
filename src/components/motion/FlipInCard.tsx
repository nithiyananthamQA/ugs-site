"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

// Sequential perspective flip-in — each card rotates from -18° Y to 0° on scroll.
// Used on /clients.

export function FlipInCard({
  children,
  index = 0,
  className,
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "perspective(900px) rotateY(0) translateY(0)";
            }, index * 120);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        "transition-all duration-[1100ms] ease-[cubic-bezier(0.19,1,0.22,1)] will-change-transform",
        className,
      )}
      style={{
        opacity: 0,
        transform: index % 2 === 0 ? "perspective(900px) rotateY(-18deg) translateY(40px)" : "perspective(900px) rotateY(18deg) translateY(40px)",
        transformOrigin: "center bottom",
      }}
    >
      {children}
    </article>
  );
}
