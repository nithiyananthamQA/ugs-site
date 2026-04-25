import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/shared/Container";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { SITE } from "@/content/brand";

export const metadata: Metadata = {
  title: "Contact — Start a sourcing enquiry",
  description: `Message ${SITE.name} on WhatsApp for a same-day response, or email ${SITE.email} directly. Based in ${SITE.city}, ${SITE.country}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Let's get started"
        title="Share a brief. Get a partner."
        subtitle="Message us on WhatsApp for the fastest response, or email Arun directly with your tech-pack and target timeline. Our Coimbatore team typically responds within one business day."
      />

      <section className="py-16 md:py-24 themed-light">
        <Container>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-[color:var(--color-whatsapp)] p-10 md:p-14 text-white transition-transform duration-500 hover:-translate-y-1"
            >
              <p className="eyebrow text-white/85">Fastest response</p>
              <h2 className="mt-5 text-4xl md:text-6xl font-[var(--font-display)] tracking-tight leading-[1]">
                WhatsApp
              </h2>
              <p className="mt-5 max-w-md text-white/90">
                Message us on WhatsApp for a same-day response. Share a brief,
                a tech-pack or just a question — we reply from Coimbatore.
              </p>
              <p className="mt-10 inline-flex items-center gap-3 text-lg">
                <span aria-hidden className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 group-hover:rotate-45">→</span>
                {SITE.phone}
              </p>
            </a>

            <a
              href={`mailto:${SITE.email}?subject=UGS%20sourcing%20enquiry`}
              className="group relative overflow-hidden rounded-3xl bg-[color:var(--color-teal-deep)] p-10 md:p-14 text-[color:var(--color-ivory)] transition-transform duration-500 hover:-translate-y-1 grain"
            >
              <p className="eyebrow text-[color:var(--color-gold)]">Direct email</p>
              <h2 className="mt-5 text-4xl md:text-6xl font-[var(--font-display)] tracking-tight leading-[1]">
                Email Arun
              </h2>
              <p className="mt-5 max-w-md text-[color:var(--color-ivory)]/80">
                Prefer a longer brief? Email Arun directly with your
                specifications, target pricing and lead-time.
              </p>
              <p className="mt-10 inline-flex items-center gap-3 text-lg break-all">
                <span aria-hidden className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-ivory)]/10 transition-transform duration-500 group-hover:rotate-45">→</span>
                {SITE.email}
              </p>
            </a>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 themed-cream border-y border-[color:var(--color-ink)]/5">
        <Container>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <p className="eyebrow text-[color:var(--color-teal-deep)]">Office</p>
              <p className="mt-4 text-2xl font-[var(--font-display)] tracking-tight text-[color:var(--color-teal-deep)]">
                {SITE.city}
              </p>
              <p className="mt-2 text-[color:var(--color-ink)]/70">
                {SITE.state}<br />
                {SITE.country}
              </p>
            </div>
            <div>
              <p className="eyebrow text-[color:var(--color-teal-deep)]">Phone</p>
              <a
                href={`tel:${SITE.phoneE164}`}
                className="mt-4 inline-block text-2xl font-[var(--font-display)] tracking-tight text-[color:var(--color-teal-deep)] hover:text-[color:var(--color-gold)] transition-colors"
              >
                {SITE.phone}
              </a>
              <p className="mt-2 text-[color:var(--color-ink)]/70">Mon–Sat · 9:30–18:30 IST</p>
            </div>
            <div>
              <p className="eyebrow text-[color:var(--color-teal-deep)]">Leadership</p>
              <p className="mt-4 text-2xl font-[var(--font-display)] tracking-tight text-[color:var(--color-teal-deep)]">
                Arun
              </p>
              <p className="mt-2 text-[color:var(--color-ink)]/70">Founder · {SITE.name}</p>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-4">
            <MagneticButton href={SITE.whatsappUrl} external variant="whatsapp">
              Message on WhatsApp
              <span aria-hidden>→</span>
            </MagneticButton>
            <MagneticButton
              href={`mailto:${SITE.email}?subject=UGS%20sourcing%20enquiry`}
              variant="ghost"
            >
              Email {SITE.email}
              <span aria-hidden>→</span>
            </MagneticButton>
          </div>
        </Container>
      </section>
    </>
  );
}
