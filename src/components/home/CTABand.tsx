import { Container } from "@/components/shared/Container";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { HOME_COPY } from "@/content/copy";
import { SITE } from "@/content/brand";

export function CTABand() {
  return (
    <section className="relative py-24 md:py-36 bg-[color:var(--color-teal-ink)] text-[color:var(--color-ivory)] grain overflow-hidden">
      <div className="absolute inset-0 spotlight opacity-70" aria-hidden />
      <Container className="relative z-[1]">
        <div className="grid md:grid-cols-12 gap-10 items-stretch">
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <p className="eyebrow text-[color:var(--color-gold)]">{HOME_COPY.cta.eyebrow}</p>
              <h2 className="display mt-5 text-[clamp(2.2rem,4.6vw,4rem)] text-[color:var(--color-ivory)]">
                {HOME_COPY.cta.headline}
              </h2>
              <p className="mt-6 max-w-xl text-[color:var(--color-ivory)]/80 text-lg">
                {HOME_COPY.cta.sub}
              </p>
            </div>
            <div className="mt-10 md:mt-16 flex flex-wrap gap-4">
              <MagneticButton href={SITE.whatsappUrl} external variant="whatsapp">
                <span aria-hidden className="text-lg">✆</span>
                Message on WhatsApp
                <span aria-hidden>→</span>
              </MagneticButton>
              <MagneticButton
                href={`mailto:${SITE.email}?subject=UGS%20sourcing%20enquiry`}
                variant="outline-ivory"
              >
                Email {SITE.email}
                <span aria-hidden>→</span>
              </MagneticButton>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="glass-light rounded-2xl p-7 md:p-8 h-full flex flex-col">
              <p className="eyebrow text-[color:var(--color-gold-soft)]">Speak with the team</p>
              <p className="mt-4 display text-2xl md:text-3xl text-[color:var(--color-ivory)]">
                A founder-led sourcing partner in Coimbatore.
              </p>

              <dl className="mt-8 space-y-5 text-[color:var(--color-ivory)]/85">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-gold-soft)]">Direct line</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`tel:${SITE.phoneE164}`}
                      className="display text-xl text-[color:var(--color-ivory)] hover:text-[color:var(--color-gold-soft)] transition-colors"
                    >
                      {SITE.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-gold-soft)]">Email</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${SITE.email}`}
                      className="display text-lg text-[color:var(--color-ivory)] hover:text-[color:var(--color-gold-soft)] transition-colors break-all"
                    >
                      {SITE.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-gold-soft)]">Hours</dt>
                  <dd className="mt-1.5 text-sm">Mon–Sat · 9:30–18:30 IST</dd>
                </div>
              </dl>

              <p className="mt-auto pt-8 text-xs text-[color:var(--color-ivory)]/60 leading-relaxed">
                Messages usually receive a reply within one business day. No gatekeepers. No automated forms.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
