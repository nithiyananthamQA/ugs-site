import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { CTABand } from "@/components/home/CTABand";
import { FlipInCard } from "@/components/motion/FlipInCard";
import { CLIENTS } from "@/content/clients";
import { SITE } from "@/content/brand";

export const metadata: Metadata = {
  title: "Clients — Brands that chose UGS",
  description: `Hospitality groups, home-textile labels and lifestyle brands partnering with ${SITE.name} for textile sourcing, production management and supply-chain stewardship.`,
  alternates: { canonical: "/clients" },
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Clients" }]}
        eyebrow="In good company"
        title="Brands that chose UGS."
        subtitle="A growing roster of hospitality groups, home-textile labels and lifestyle brands that rely on UGS to manage the Indian end of their supply chain."
      />

      <section className="py-20 md:py-28 themed-light">
        <Container>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {CLIENTS.map((c, i) => (
              <FlipInCard
                key={c.name}
                index={i}
                className="glass-ivory rounded-2xl p-8 md:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow text-[color:var(--color-gold-deep)]">{c.category}</p>
                    <h2 className="mt-4 display text-3xl md:text-4xl text-[color:var(--color-teal-deep)]">
                      {c.name}
                    </h2>
                  </div>
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-10 w-10 shrink-0 rounded-full border border-[color:var(--color-teal-deep)]/30 bg-[color:var(--color-ivory)] transition-transform duration-500"
                  />
                </div>
                <p className="mt-5 text-[color:var(--color-ink)]/75 leading-relaxed text-[15px] max-w-xl">
                  {c.blurb}
                </p>
              </FlipInCard>
            ))}
          </div>
          <p className="mt-14 max-w-3xl text-[color:var(--color-ink)]/60 text-sm leading-relaxed">
            Additional engagements under NDA. If you are a buyer exploring India-based sourcing, we are happy to share relevant case studies and reference shipments on request.
          </p>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
