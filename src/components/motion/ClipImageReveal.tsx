"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

// Clip-path reveal — image slides into view with a diagonal clip animation.
// Used on /products.

export function ClipImageReveal({
  className,
  wrapperClassName,
  direction = "left",
  ...img
}: Omit<ImageProps, "className"> & {
  className?: string;
  wrapperClassName?: string;
  direction?: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.clipPath = "inset(0 0 0 0)";
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.style.clipPath = "inset(0 0 0 0)";
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const initialClip =
    direction === "left" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)";

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      <div
        ref={ref}
        className="absolute inset-0 transition-[clip-path] duration-[1400ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{ clipPath: initialClip }}
      >
        <Image {...img} className={cn("object-cover w-full h-full", className)} />
      </div>
    </div>
  );
}
