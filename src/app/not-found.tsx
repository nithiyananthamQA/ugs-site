import Link from "next/link";
import { Container } from "@/components/shared/Container";

export default function NotFound() {
  return (
    <section className="min-h-[80svh] flex items-center bg-[color:var(--color-teal-deep)] text-[color:var(--color-ivory)] grain">
      <Container className="py-32">
        <p className="eyebrow text-[color:var(--color-gold)]">404</p>
        <h1 className="display mt-6 text-[clamp(3rem,8vw,8rem)] leading-[0.95]">
          This thread isn&apos;t woven yet.
        </h1>
        <p className="mt-6 max-w-xl text-[color:var(--color-ivory)]/80 text-lg">
          The page you&apos;re looking for doesn&apos;t exist — or has been moved.
          Head back home, or reach the team directly.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-gold)] px-6 py-3 text-sm uppercase tracking-[0.2em] text-[color:var(--color-teal-deep)]"
          >
            Return home
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-ivory)]/40 px-6 py-3 text-sm uppercase tracking-[0.2em] text-[color:var(--color-ivory)]"
          >
            Contact us
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
