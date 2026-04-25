"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/shared/Container";
import { HOME_COPY } from "@/content/copy";
import { cn } from "@/lib/cn";

const icons: Record<string, React.ReactNode> = {
  vetting: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <path d="M32 6 L54 18 V34 C54 44 44 54 32 58 C20 54 10 44 10 34 V18 Z" stroke="currentColor" strokeWidth={1.6} />
      <path d="M22 32 L30 40 L44 24" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  qa: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <circle cx={28} cy={28} r={18} stroke="currentColor" strokeWidth={1.6} />
      <path d="M41 41 L54 54" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
      <path d="M22 28 H34 M22 22 H34 M22 34 H30" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  ),
  pricing: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <rect x={8} y={16} width={48} height={32} rx={4} stroke="currentColor" strokeWidth={1.6} />
      <circle cx={32} cy={32} r={7} stroke="currentColor" strokeWidth={1.6} />
      <path d="M8 26 H56" stroke="currentColor" strokeWidth={1.2} opacity={0.5} />
    </svg>
  ),
  visibility: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <path d="M6 32 C 14 18, 26 14, 32 14 S 50 18, 58 32 C 50 46, 38 50, 32 50 S 14 46, 6 32 Z" stroke="currentColor" strokeWidth={1.6} />
      <circle cx={32} cy={32} r={8} stroke="currentColor" strokeWidth={1.6} />
      <circle cx={32} cy={32} r={3} fill="currentColor" />
    </svg>
  ),
  partnership: (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <path d="M10 36 L22 24 L30 32 L40 22 L54 36" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={22} cy={24} r={3} fill="currentColor" />
      <circle cx={40} cy={22} r={3} fill="currentColor" />
      <path d="M14 48 H50" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M14 44 V52 M50 44 V52" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  ),
};

type Tile = (typeof HOME_COPY.advantage.tiles)[number] & {
  checklist?: { label: string; detail: string }[];
  certifications?: string[];
};

function TiltCard({ tile, i }: { tile: Tile; i: number }) {
  const wrapRef = useRef<HTMLElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    const spot = spotlightRef.current;
    if (!wrap || !inner || !spot) return;

    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let targetRx = 0;
    let targetRy = 0;
    let rx = 0;
    let ry = 0;

    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      targetRy = (px - 0.5) * 10;
      targetRx = -(py - 0.5) * 8;
      spot.style.background = `radial-gradient(420px circle at ${px * 100}% ${py * 100}%, color-mix(in oklab, var(--color-gold) 22%, transparent), transparent 55%)`;
    };
    const onLeave = () => {
      targetRx = 0;
      targetRy = 0;
      spot.style.background = "transparent";
    };

    const loop = () => {
      rx += (targetRx - rx) * 0.12;
      ry += (targetRy - ry) * 0.12;
      inner.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      raf = requestAnimationFrame(loop);
    };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  const isHero = i === 0;

  return (
    <article
      ref={wrapRef as React.RefObject<HTMLElement>}
      data-reveal-child
      data-reveal
      className={cn(
        "group relative rounded-2xl overflow-hidden",
        i === 0 && "md:col-span-7 md:row-span-2 md:min-h-[460px]",
        i === 1 && "md:col-span-5",
        i === 2 && "md:col-span-5",
        i === 3 && "md:col-span-7",
        i === 4 && "md:col-span-5",
      )}
      style={{ perspective: "900px" }}
    >
      <div
        ref={innerRef}
        className={cn(
          "relative h-full w-full p-8 md:p-10 rounded-2xl transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]",
          isHero
            ? "bg-[color:var(--color-teal-ink)] text-[color:var(--color-ivory)] grain"
            : "glass-ivory",
        )}
      >
        {isHero && <div className="absolute inset-0 spotlight opacity-70 rounded-2xl pointer-events-none" aria-hidden />}
        <div
          ref={spotlightRef}
          aria-hidden
          className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-500"
        />
        <div className="relative z-[1] flex flex-col h-full">
          <div className="flex items-start justify-between gap-6">
            <div
              className={cn(
                "w-11 h-11 md:w-12 md:h-12",
                isHero ? "text-[color:var(--color-gold)]" : "text-[color:var(--color-teal-deep)]",
              )}
            >
              {icons[tile.icon]}
            </div>
            <div
              className={cn(
                "eyebrow numeric",
                isHero ? "text-[color:var(--color-gold-soft)]" : "text-[color:var(--color-gold-deep)]",
              )}
            >
              {tile.stat}
            </div>
          </div>

          <h3
            className={cn(
              "mt-6 md:mt-10 display text-2xl md:text-3xl max-w-[18ch]",
              isHero ? "text-[color:var(--color-ivory)]" : "text-[color:var(--color-teal-deep)]",
            )}
          >
            {tile.title}
          </h3>
          <p
            className={cn(
              "mt-4 max-w-xl text-[15px] leading-relaxed",
              isHero ? "text-[color:var(--color-ivory)]/85" : "text-[color:var(--color-ink)]/75",
            )}
          >
            {tile.body}
          </p>

          {isHero && tile.checklist && (
            <ul className="mt-8 md:mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {tile.checklist.map((item, idx) => (
                <li key={item.label} className="flex gap-4">
                  <span className="eyebrow numeric text-[color:var(--color-gold-soft)] pt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[color:var(--color-ivory)] text-sm md:text-[15px] font-medium">
                      {item.label}
                    </p>
                    <p className="mt-1.5 text-[color:var(--color-ivory)]/70 text-[13px] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {isHero && tile.certifications && (
            <div className="mt-auto pt-8 md:pt-10 flex flex-col gap-3">
              <p className="eyebrow text-[color:var(--color-gold-soft)]">
                Partner certifications in-network
              </p>
              <ul className="flex flex-wrap gap-2">
                {tile.certifications.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-[color:var(--color-ivory)]/25 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ivory)]/85"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!isHero && (
            <span
              aria-hidden
              className="mt-auto absolute inset-x-8 md:inset-x-10 bottom-6 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 bg-[color:var(--color-gold)]"
            />
          )}
        </div>
      </div>
    </article>
  );
}

export function AdvantageBento() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.querySelectorAll<HTMLElement>("[data-reveal-child]").forEach((c) => (c.dataset.reveal = "in"));
      return;
    }

    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-reveal-child]"));
    cards.forEach((c, i) => (c.style.transitionDelay = `${i * 120}ms`));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            cards.forEach((c) => (c.dataset.reveal = "in"));
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-24 md:py-32 themed-light">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow text-[color:var(--color-teal-deep)]">{HOME_COPY.advantage.eyebrow}</p>
            <h2 className="display mt-5 text-[clamp(1.9rem,3.6vw,3.2rem)] text-[color:var(--color-teal-deep)]">
              {HOME_COPY.advantage.headline}
            </h2>
          </div>
          <p className="max-w-md text-[color:var(--color-ink)]/75">
            Four disciplines that decide whether a textile order ships on spec, on time and on budget — or doesn&apos;t.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {HOME_COPY.advantage.tiles.map((t, i) => (
            <TiltCard key={t.title} tile={t} i={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
