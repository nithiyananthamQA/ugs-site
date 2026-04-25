"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type Props = Omit<ImageProps, "className"> & {
  className?: string;
  wrapperClassName?: string;
  speed?: number;
};

export function ParallaxImage({
  className,
  wrapperClassName,
  speed = 0.15,
  ...img
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = imgRef.current;
    if (!wrap || !inner) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    let visible = false;
    const obs = new IntersectionObserver(
      ([e]) => (visible = e.isIntersecting),
      { rootMargin: "25% 0px 25% 0px" },
    );
    obs.observe(wrap);

    const update = () => {
      if (!visible) {
        ticking = false;
        return;
      }
      const r = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (r.top + r.height / 2 - vh / 2) / vh;
      inner.style.transform = `translate3d(0, ${progress * speed * 100}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed]);

  return (
    <div ref={wrapRef} className={cn("relative overflow-hidden", wrapperClassName)}>
      <div
        ref={imgRef}
        className="absolute inset-[-10%] will-change-transform"
      >
        <Image {...img} className={cn("object-cover w-full h-full", className)} />
      </div>
    </div>
  );
}
