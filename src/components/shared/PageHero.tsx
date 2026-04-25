import { Container } from "./Container";
import { RevealText } from "./RevealText";
import Link from "next/link";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 themed-light border-b border-[color:var(--color-ink)]/5">
      <Container>
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-8 text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink)]/55">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  {b.href ? (
                    <Link href={b.href} className="hover:text-[color:var(--color-teal-deep)]">
                      {b.label}
                    </Link>
                  ) : (
                    <span>{b.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <span aria-hidden>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="eyebrow text-[color:var(--color-teal-deep)]">{eyebrow}</p>
        <RevealText
          as="h1"
          className="display mt-6 text-[clamp(2.2rem,4.6vw,4.2rem)] text-[color:var(--color-teal-deep)]"
          staggerMs={60}
        >
          {title}
        </RevealText>
        {subtitle && (
          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-[color:var(--color-ink)]/80">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
