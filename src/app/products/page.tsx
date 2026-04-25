import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { CTABand } from "@/components/home/CTABand";
import { ClipImageReveal } from "@/components/motion/ClipImageReveal";
import { PRODUCTS } from "@/content/products";
import { SITE } from "@/content/brand";

export const metadata: Metadata = {
  title: "Products — Hospitality, Garments, Floor Coverings",
  description: `${SITE.name} sources across three verticals: hospitality & home textiles, knitted and woven apparel, and decorative & utility floor coverings.`,
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.label,
      url: `${SITE.url}/products/${p.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        eyebrow="Our verticals"
        title="Three product categories. One standard of care."
        subtitle="Every UGS program runs through the same sourcing discipline — audited factories, specification-true production and on-site multi-stage quality assurance."
      />

      <section className="py-16 md:py-24 themed-light">
        <Container>
          <div className="flex flex-col gap-16 md:gap-24">
            {PRODUCTS.map((p, i) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group grid md:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                <div
                  className={`md:col-span-7 ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <ClipImageReveal
                    src={p.image}
                    alt={p.imageAlt}
                    width={1200}
                    height={1500}
                    direction={i % 2 === 0 ? "left" : "right"}
                    wrapperClassName="relative aspect-[4/5] rounded-3xl bg-[color:var(--color-teal-ink)]"
                    className="transition-transform duration-[1400ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1 md:pr-6" : "md:pl-4"}`}>
                  <p className="eyebrow text-[color:var(--color-gold-deep)]">
                    {p.index} · {p.kicker}
                  </p>
                  <h2 className="mt-4 display text-[clamp(1.9rem,3.8vw,3.2rem)] text-[color:var(--color-teal-deep)]">
                    {p.label}
                  </h2>
                  <p className="mt-5 text-[color:var(--color-ink)]/80 text-[15px] md:text-base leading-relaxed max-w-xl">
                    {p.summary}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full border border-[color:var(--color-ink)]/15 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[color:var(--color-ink)]/75"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[color:var(--color-teal-deep)]">
                    Explore vertical
                    <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
