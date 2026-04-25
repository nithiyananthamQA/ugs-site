"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Container } from "@/components/shared/Container";
import { PRODUCTS } from "@/content/products";
import { HOME_COPY } from "@/content/copy";

export function ProductFold() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-fold-card]"));
    const total = cards.length;
    let raf = 0;
    let ticking = false;

    const update = () => {
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const vh = window.innerHeight;
        // How much the card has been "pushed" by scroll past its pinned start
        const distancePinned = Math.max(0, -rect.top);
        const stepHeight = vh * 0.9;
        const pushProgress = Math.min(distancePinned / stepHeight, total - i);
        // Normalize 0..1 per card stage
        const p = Math.min(Math.max(pushProgress, 0), 1);
        const scale = 1 - p * 0.06;
        const translateY = -p * 32;
        const opacity = 1 - p * 0.35;
        card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
        card.style.opacity = `${opacity}`;
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

  return (
    <section
      id="products"
      ref={sectionRef}
      aria-label="Product verticals"
      className="relative themed-cream"
    >
      <Container className="pt-24 md:pt-32 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-[color:var(--color-teal-deep)]">{HOME_COPY.products.eyebrow}</p>
            <h2 className="display mt-5 text-[clamp(2rem,4vw,3.6rem)] text-[color:var(--color-teal-deep)]">
              Three categories.{" "}
              <em className="display-italic text-[color:var(--color-gold-deep)]" style={{ fontStyle: "italic" }}>
                One standard of care.
              </em>
            </h2>
          </div>
          <p className="max-w-md text-[color:var(--color-ink)]/75">
            {HOME_COPY.products.sub}
          </p>
        </div>
      </Container>

      <div className="relative">
        {PRODUCTS.map((p, i) => (
          <div
            key={p.slug}
            data-fold-card
            className="sticky top-16 md:top-20 px-4 md:px-10 lg:px-14 py-6 md:py-10 will-change-transform"
            style={{ zIndex: i + 1 }}
          >
            <article className="relative mx-auto max-w-[1380px] overflow-hidden rounded-3xl bg-[color:var(--color-teal-ink)] text-[color:var(--color-ivory)] grain">
              <div className="grid md:grid-cols-12 gap-0 min-h-[72vh]">
                <div className="md:col-span-7 relative aspect-[4/3] md:aspect-auto md:min-h-[560px]">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[color:var(--color-teal-ink)]/80 via-[color:var(--color-teal-ink)]/10 to-transparent" />
                  <div className="absolute top-6 left-6 md:top-8 md:left-8 inline-flex items-center gap-3 text-[color:var(--color-gold)]">
                    <span className="display text-5xl md:text-6xl leading-none">{p.index}</span>
                    <span className="eyebrow text-[color:var(--color-gold-soft)]">{p.kicker}</span>
                  </div>
                </div>

                <div className="md:col-span-5 relative p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="display text-[clamp(1.9rem,3.8vw,3rem)] text-[color:var(--color-ivory)] max-w-[16ch]">
                    {p.label}
                  </h3>
                  <p className="mt-5 text-[color:var(--color-ivory)]/80 leading-relaxed max-w-md">
                    {p.summary}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.highlights.slice(0, 3).map((h) => (
                      <li
                        key={h}
                        className="rounded-full border border-[color:var(--color-ivory)]/20 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-ivory)]/80"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-[color:var(--color-ivory)]/15 pt-6">
                    {p.specs.slice(0, 4).map((s) => (
                      <div key={s.label}>
                        <dt className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-gold-soft)]">
                          {s.label}
                        </dt>
                        <dd className="mt-1.5 display text-base md:text-lg text-[color:var(--color-ivory)] leading-tight">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <Link
                    href={`/products/${p.slug}`}
                    className="group mt-8 inline-flex items-center gap-3 self-start rounded-full bg-[color:var(--color-gold)] px-6 py-3 text-xs uppercase tracking-[0.22em] text-[color:var(--color-teal-deep)] hover:bg-[color:var(--color-gold-soft)] transition-colors"
                  >
                    Explore vertical
                    <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      <div className="h-10 md:h-20" aria-hidden />
    </section>
  );
}
