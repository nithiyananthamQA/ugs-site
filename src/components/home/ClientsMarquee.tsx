import { Container } from "@/components/shared/Container";
import { HOME_COPY } from "@/content/copy";
import { CLIENTS } from "@/content/clients";

function ClientMark({ name }: { name: string }) {
  return (
    <span className="flex-none inline-flex items-center gap-4 px-10 md:px-14 py-6">
      <span
        aria-hidden
        className="inline-block h-2 w-2 rounded-full bg-[color:var(--color-gold)]"
      />
      <span className="display text-2xl md:text-4xl text-[color:var(--color-teal-deep)] leading-none whitespace-nowrap">
        {name}
      </span>
    </span>
  );
}

export function ClientsMarquee() {
  const row1 = [...CLIENTS, ...CLIENTS];
  const row2 = [...[...CLIENTS].reverse(), ...[...CLIENTS].reverse()];
  return (
    <section
      aria-label="Clients"
      className="relative py-24 md:py-32 themed-cream overflow-hidden border-y border-[color:var(--color-ink)]/5"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow text-[color:var(--color-teal-deep)]">{HOME_COPY.clients.eyebrow}</p>
            <h2 className="display mt-5 text-[clamp(1.8rem,3.4vw,2.8rem)] text-[color:var(--color-teal-deep)]">
              {HOME_COPY.clients.headline}
            </h2>
          </div>
          <p className="max-w-md text-[color:var(--color-ink)]/75">{HOME_COPY.clients.sub}</p>
        </div>
      </Container>

      <div className="marquee" style={{ "--marquee-duration": "48s" } as React.CSSProperties}>
        <div className="marquee-track">
          {row1.map((c, i) => (
            <ClientMark key={`a-${c.name}-${i}`} name={c.name} />
          ))}
        </div>
      </div>
      <div className="marquee mt-2" style={{ "--marquee-duration": "62s" } as React.CSSProperties}>
        <div className="marquee-track reverse">
          {row2.map((c, i) => (
            <ClientMark key={`b-${c.name}-${i}`} name={c.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
