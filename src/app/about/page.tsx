import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { CTABand } from "@/components/home/CTABand";
import { ScrollFillText } from "@/components/motion/ScrollFillText";
import { SITE } from "@/content/brand";
import { HOME_COPY } from "@/content/copy";

export const metadata: Metadata = {
  title: "About — A sourcing partner, not a middleman.",
  description: `${SITE.name} is a Coimbatore-rooted strategic sourcing partner. We manage textile supply chains end-to-end for global hospitality, apparel and home-textile buyers.`,
  alternates: { canonical: "/about" },
};

const VALUES = [
  { title: "Stewardship over transactions", body: "We don't simply place orders. We carry your specification, timeline and reputation across the factory floor." },
  { title: "Factory-direct, documented", body: "Every price we negotiate is factory-direct. No hidden layers, no opaque markups. You see the basis of costing." },
  { title: "Quality is a system", body: "Our QA team runs pre-production, in-line and pre-shipment checkpoints. Quality is earned, not caught at the last mile." },
  { title: "Accountable to specification", body: "A spec is a contract. Deviations get a conversation, a sample and a sign-off — never a shrug and a workaround." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow={HOME_COPY.about.eyebrow}
        title="A sourcing partner, not a middleman."
        subtitle="Founded in Coimbatore in June 2024, UGS is the gateway between India's textile manufacturing ecosystem and the global brands that rely on it."
      />

      <section className="py-24 md:py-32 themed-light">
        <Container size="narrow">
          <p className="eyebrow text-[color:var(--color-teal-deep)]">Our story</p>
          <div className="mt-10 flex flex-col gap-7">
            {HOME_COPY.about.paragraphs.map((p, i) => (
              <ScrollFillText
                key={i}
                as="p"
                className="text-lg md:text-2xl leading-[1.45] text-[color:var(--color-teal-ink)]"
              >
                {p}
              </ScrollFillText>
            ))}
            <ScrollFillText
              as="p"
              className="text-lg md:text-2xl leading-[1.45] text-[color:var(--color-teal-ink)]"
            >
              What began as a response to a recurring problem — global buyers spending months chasing clarity from fragmented supply chains — has become a single, accountable thread between India&apos;s textile ecosystem and the brands that rely on it.
            </ScrollFillText>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 themed-cream border-y border-[color:var(--color-ink)]/5">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 md:items-end">
            <div className="md:col-span-6">
              <p className="eyebrow text-[color:var(--color-teal-deep)]">What we stand for</p>
              <h2 className="display mt-5 text-[clamp(1.9rem,3.6vw,3.2rem)] text-[color:var(--color-teal-deep)]">
                Four principles that run through every order.
              </h2>
            </div>
            <p className="md:col-span-5 md:col-start-8 text-[color:var(--color-ink)]/75">
              The UGS standard is not a promise. It is a discipline — practised every day by a team that understands a textile order is a bet on trust.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <article
                key={v.title}
                className="glass-ivory rounded-2xl p-8 md:p-10 transition-transform duration-500 hover:-translate-y-1"
              >
                <p className="eyebrow text-[color:var(--color-gold-deep)] numeric">0{i + 1}</p>
                <h3 className="mt-4 display text-xl md:text-2xl text-[color:var(--color-teal-deep)]">
                  {v.title}
                </h3>
                <p className="mt-3 text-[color:var(--color-ink)]/75 leading-relaxed text-[15px]">
                  {v.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 themed-light">
        <Container size="narrow">
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { label: "Founded", value: "June 2024" },
              { label: "Headquarters", value: SITE.city, sub: `${SITE.state}, ${SITE.country}` },
              { label: "Verticals", value: "03", sub: "Hospitality · Garment · Mats" },
              { label: "QA standard", value: "0%", sub: "Target deviation from spec" },
            ].map((f) => (
              <div key={f.label}>
                <p className="eyebrow text-[color:var(--color-teal-deep)]">{f.label}</p>
                <p className="mt-3 display text-4xl md:text-5xl text-[color:var(--color-teal-deep)]">{f.value}</p>
                {f.sub && <p className="mt-2 text-[color:var(--color-ink)]/60 text-sm">{f.sub}</p>}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
