"use client";

import { Container } from "@/components/shared/Container";
import { RevealText } from "@/components/shared/RevealText";
import { useReveal } from "@/components/motion/useReveal";
import { SITE } from "@/content/brand";

export function AboutBand() {
  const ref = useReveal<HTMLDivElement>({ stagger: 140 });
  return (
    <section className="relative py-20 md:py-28 themed-light">
      <Container>
        <div ref={ref} className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5" data-reveal-child data-reveal>
            <p className="eyebrow text-[color:var(--color-teal-deep)]">About UGS</p>
            <RevealText
              as="h2"
              className="display mt-5 text-[clamp(1.9rem,3.6vw,3rem)] text-[color:var(--color-teal-deep)]"
              staggerMs={55}
            >
              A sourcing partner, not a middleman.
            </RevealText>
          </div>
          <div className="md:col-span-7 md:pt-2 space-y-5">
            <p className="text-base md:text-lg text-[color:var(--color-ink)]/80 leading-[1.65]" data-reveal-child data-reveal>
              Founded in {SITE.city} in June {SITE.founded}, UGS is the gateway between India&apos;s textile manufacturing ecosystem and the global brands that rely on it. We act as your single accountable partner — auditing factories, running multi-stage QA, negotiating factory-direct pricing, and shipping cleanly to your door.
            </p>
            <p className="text-base md:text-lg text-[color:var(--color-ink)]/80 leading-[1.65]" data-reveal-child data-reveal>
              One partner. One chain of custody. Zero layers in between.
            </p>
            <figure
              className="relative pl-5 md:pl-6 mt-8 border-l-2 border-[color:var(--color-gold)]"
              data-reveal-child
              data-reveal
            >
              <blockquote className="display-italic text-xl md:text-2xl text-[color:var(--color-teal-deep)] leading-[1.3]">
                For generations, India has woven the world&apos;s finest linens. UGS carries that craft forward — refined, accountable, built to last.
              </blockquote>
              <figcaption className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink)]/55">
                — UGS Founder&apos;s Note
              </figcaption>
            </figure>
            <div className="pt-3 flex items-center gap-4" data-reveal-child data-reveal>
              <span aria-hidden className="h-px w-10 bg-[color:var(--color-gold)]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink)]/60">
                Coimbatore, Tamil Nadu — India
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
