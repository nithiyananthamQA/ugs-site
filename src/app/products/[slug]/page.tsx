import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { CTABand } from "@/components/home/CTABand";
import { PRODUCTS } from "@/content/products";
import { SITE } from "@/content/brand";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.label} — Sourcing program`,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.label} — ${SITE.name}`,
      description: product.summary,
    },
  };
}

export default async function ProductVerticalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const idx = PRODUCTS.findIndex((p) => p.slug === slug);
  const next = PRODUCTS[(idx + 1) % PRODUCTS.length];

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.label,
    description: product.summary,
    brand: { "@type": "Brand", name: SITE.name },
    manufacturer: { "@type": "Organization", name: SITE.legalName },
    category: product.kicker,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.url}/products` },
      { "@type": "ListItem", position: 3, name: product.label, item: `${SITE.url}/products/${product.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.label },
        ]}
        eyebrow={`${product.index} · ${product.kicker}`}
        title={product.headline}
        subtitle={product.summary}
      />

      <section className="pb-16 md:pb-24 themed-light">
        <Container>
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-3xl">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 themed-cream border-y border-[color:var(--color-ink)]/5">
        <Container>
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7 md:col-start-1">
              <p className="eyebrow text-[color:var(--color-teal-deep)]">What we source</p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] font-[var(--font-display)] tracking-tight text-[color:var(--color-teal-deep)]">
                Products in this vertical
              </h2>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {product.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-xl border border-[color:var(--color-ink)]/10 bg-[color:var(--color-ivory)] px-5 py-4 text-[color:var(--color-ink)]/85"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="eyebrow text-[color:var(--color-teal-deep)]">Spec snapshot</p>
              <dl className="mt-8 divide-y divide-[color:var(--color-ink)]/10">
                {product.specs.map((s) => (
                  <div key={s.label} className="flex items-start justify-between gap-6 py-4">
                    <dt className="eyebrow text-[color:var(--color-ink)]/55">{s.label}</dt>
                    <dd className="text-right font-[var(--font-display)] text-lg md:text-xl text-[color:var(--color-teal-deep)] max-w-[60%]">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 themed-light">
        <Container size="narrow">
          {product.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mb-6 text-lg md:text-xl leading-[1.7] text-[color:var(--color-ink)]/85"
            >
              {p}
            </p>
          ))}
        </Container>
      </section>

      <section className="pb-20 themed-light">
        <Container>
          <Link
            href={`/products/${next.slug}`}
            className="group flex items-center justify-between border-t border-[color:var(--color-ink)]/10 pt-10"
          >
            <div>
              <p className="eyebrow text-[color:var(--color-ink)]/55">Next vertical</p>
              <p className="mt-3 text-3xl md:text-5xl font-[var(--font-display)] tracking-tight text-[color:var(--color-teal-deep)]">
                {next.label}
              </p>
            </div>
            <span aria-hidden className="text-4xl text-[color:var(--color-teal-deep)] transition-transform duration-500 group-hover:translate-x-2">→</span>
          </Link>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
