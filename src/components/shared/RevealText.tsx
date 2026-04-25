"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  staggerMs?: number;
  threshold?: number;
};

export function RevealText({
  children,
  as: Tag = "h2",
  className,
  staggerMs = 60,
  threshold = 0.25,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = Array.from(el.querySelectorAll<HTMLElement>(".word-mask"));
    words.forEach((w, i) => {
      const inner = w.querySelector<HTMLElement>("span");
      if (inner) inner.style.transitionDelay = `${i * staggerMs}ms`;
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      words.forEach((w) => w.classList.add("is-in"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            words.forEach((w) => w.classList.add("is-in"));
            obs.unobserve(el);
          }
        });
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [staggerMs, threshold]);

  const parts = children.split(/(\s+)/);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={cn(className)}
    >
      {parts.map((part, i) =>
        /^\s+$/.test(part) ? (
          <span key={i}> </span>
        ) : (
          <span key={i} className="word-mask">
            <span>{part}</span>
          </span>
        ),
      )}
    </Tag>
  );
}
