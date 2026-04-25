import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { HOME_COPY } from "@/content/copy";
import { SITE } from "@/content/brand";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[color:var(--color-teal-ink)] text-[color:var(--color-ivory)] grain">
      <Image
        src="/images/hero-atmosphere.svg"
        alt=""
        aria-hidden
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover opacity-95"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-teal-ink)]/40 via-transparent to-[color:var(--color-teal-ink)]/80 spotlight" />

      <Container size="wide" className="relative z-[2] flex min-h-[100svh] flex-col justify-between pt-32 md:pt-36 pb-10 md:pb-14">
        <div className="flex-1 flex flex-col justify-center max-w-[1400px]">
          <p
            className="eyebrow text-[color:var(--color-gold)] hero-rise inline-flex items-center gap-3"
            style={{ "--hero-delay": "40ms" } as React.CSSProperties}
          >
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
            {HOME_COPY.hero.eyebrow}
          </p>
          <h1
            className="display mt-6 text-[clamp(2.2rem,5vw,5rem)] max-w-[20ch] hero-rise"
            style={{ "--hero-delay": "140ms" } as React.CSSProperties}
          >
            <span className="text-[color:var(--color-ivory)]">{HOME_COPY.hero.headline}</span>{" "}
            <em className="display-italic text-[color:var(--color-gold-soft)]" style={{ fontStyle: "italic" }}>
              {HOME_COPY.hero.headlineItalic}
            </em>
          </h1>
          <p
            className="mt-6 max-w-xl text-base md:text-lg text-[color:var(--color-ivory)]/75 leading-relaxed hero-rise"
            style={{ "--hero-delay": "280ms" } as React.CSSProperties}
          >
            {HOME_COPY.hero.sub}
          </p>
          <div
            className="mt-8 flex flex-wrap items-center gap-4 hero-rise"
            style={{ "--hero-delay": "400ms" } as React.CSSProperties}
          >
            <MagneticButton href={SITE.whatsappUrl} external variant="gold">
              {HOME_COPY.hero.primaryCta}
              <span aria-hidden>→</span>
            </MagneticButton>
            <Link
              href="#supply-chain"
              className="inline-flex items-center gap-2 py-3 pr-3 text-sm uppercase tracking-[0.22em] text-[color:var(--color-ivory)]/85 hover:text-[color:var(--color-gold-soft)] transition-colors"
            >
              {HOME_COPY.hero.secondaryCta}
              <span aria-hidden className="text-lg">↓</span>
            </Link>
          </div>
        </div>

        <div
          className="mt-14 md:mt-0 hero-rise"
          style={{ "--hero-delay": "540ms" } as React.CSSProperties}
        >
          <div className="glass-light rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="flex-1 grid grid-cols-3 gap-4 md:gap-10">
              {HOME_COPY.hero.stats.map((s) => (
                <div key={s.label}>
                  <p className="display text-2xl md:text-3xl text-[color:var(--color-ivory)] leading-none">
                    {s.value}
                  </p>
                  <p className="mt-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ivory)]/70">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="hidden md:block w-px h-12 bg-[color:var(--color-ivory)]/15" aria-hidden />
            <div className="md:text-right">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-gold-soft)]">
                Direct line
              </p>
              <a
                href={`tel:${SITE.phoneE164}`}
                className="mt-1.5 display text-base md:text-lg text-[color:var(--color-ivory)] hover:text-[color:var(--color-gold-soft)] transition-colors inline-block"
              >
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
