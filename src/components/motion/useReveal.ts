"use client";

import { useEffect, useRef } from "react";

type Options = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  stagger?: number;
};

export function useReveal<T extends HTMLElement = HTMLElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  once = true,
  stagger = 0,
}: Options = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.dataset.reveal = "in";
      return;
    }
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) {
      el.dataset.reveal = "in";
      return;
    }

    const children = Array.from(el.querySelectorAll<HTMLElement>("[data-reveal-child]"));
    children.forEach((c, i) => {
      c.style.transitionDelay = `${i * stagger}ms`;
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.dataset.reveal = "in";
            children.forEach((c) => (c.dataset.reveal = "in"));
            if (once) obs.unobserve(el);
          } else if (!once) {
            el.dataset.reveal = "";
            children.forEach((c) => (c.dataset.reveal = ""));
          }
        });
      },
      { threshold, rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once, stagger]);

  return ref;
}
