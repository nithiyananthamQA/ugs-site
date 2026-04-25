"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

// Word-fill text — each word opacity scrubs 0.15 → 1 as viewport passes it.
// A distinctive editorial scroll effect used on the /about page.

export function ScrollFillText({
  children,
  as: Tag = "p",
  className,
}: {
  children: string;
  as?: "p" | "div" | "h2" | "h3";
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.querySelectorAll<HTMLSpanElement>(".fill-word").forEach((w) => (w.style.opacity = "1"));
      return;
    }

    const words = Array.from(el.querySelectorAll<HTMLSpanElement>(".fill-word"));
    let raf = 0;
    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.2;
      const total = start - end;
      const sectionProgress = Math.min(Math.max((start - rect.top) / total, 0), 1);

      words.forEach((w, i) => {
        const wordProgress = Math.min(Math.max((sectionProgress * words.length) - i, 0), 1);
        w.style.opacity = `${0.18 + wordProgress * 0.82}`;
      });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        raf = requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const parts = children.split(/(\s+)/);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLParagraphElement>}
      className={cn(className)}
    >
      {parts.map((part, i) =>
        /^\s+$/.test(part) ? (
          <span key={i}>{part}</span>
        ) : (
          <span key={i} className="fill-word inline-block transition-opacity duration-300" style={{ opacity: 0.18 }}>
            {part}
          </span>
        ),
      )}
    </Tag>
  );
}
