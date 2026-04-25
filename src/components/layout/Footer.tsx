import Link from "next/link";
import Image from "next/image";
import { SITE, NAV } from "@/content/brand";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[color:var(--color-teal-ink)] text-[color:var(--color-ivory)] pt-24 pb-10 grain before:absolute before:top-0 before:inset-x-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[color:var(--color-gold)]/40 before:to-transparent">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10 lg:px-14 relative z-[2]">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image
              src="/logos/ugs-logo-on-dark.png"
              alt={SITE.legalName}
              width={1271}
              height={620}
              className="h-20 md:h-24 w-auto"
            />
            <p className="mt-8 font-[var(--font-display)] text-4xl md:text-5xl leading-[1.05] tracking-tight text-[color:var(--color-ivory)]">
              Sourcing, woven globally.
            </p>
            <p className="mt-6 max-w-md text-[color:var(--color-ivory)]/75">
              Coimbatore-rooted. Globally accountable. A strategic sourcing partner
              for hospitality, apparel and home-textile buyers.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-[color:var(--color-gold)]">Navigate</p>
            <ul className="mt-6 flex flex-col text-[color:var(--color-ivory)]/85">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center py-2.5 pr-4 hover:text-[color:var(--color-gold)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-[color:var(--color-gold)]">Reach the team</p>
            <ul className="mt-6 flex flex-col text-[color:var(--color-ivory)]/85">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center py-2.5 pr-4 hover:text-[color:var(--color-gold)] transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneE164}`}
                  className="inline-flex items-center py-2.5 pr-4 hover:text-[color:var(--color-gold)] transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center py-2.5 pr-4 hover:text-[color:var(--color-gold)] transition-colors"
                >
                  Message on WhatsApp
                </a>
              </li>
              <li className="pt-4 text-sm text-[color:var(--color-ivory)]/70">
                {SITE.city}, {SITE.state}, {SITE.country}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[color:var(--color-ivory)]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[color:var(--color-ivory)]/55">
          <p>© {year} {SITE.legalName}. All rights reserved.</p>
          <p className="tracking-[0.25em] uppercase">Est. {SITE.founded} · {SITE.city}</p>
        </div>
      </div>
    </footer>
  );
}
