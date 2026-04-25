"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/content/brand";
import { cn } from "@/lib/cn";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        scrolled
          ? "backdrop-blur-md bg-[color:var(--color-ivory)]/75 border-b border-[color:var(--color-ink)]/5"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-14 h-16 md:h-20">
        <Link
          href="/"
          className="group inline-flex items-center"
          aria-label={`${SITE.name} Unicom Globalsourcing — home`}
        >
          <Image
            src="/logos/ugs-logo-light.png"
            alt={SITE.legalName}
            width={1271}
            height={620}
            priority
            className="h-10 w-auto md:h-14"
          />
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm tracking-wide text-[color:var(--color-ink)]/80 hover:text-[color:var(--color-ink)] transition-colors after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[color:var(--color-gold)] after:transition-transform after:duration-500 hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-teal-deep)] px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-[color:var(--color-ivory)] hover:bg-[color:var(--color-teal-mid)] transition-colors"
          >
            Start enquiry
            <span aria-hidden>→</span>
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-[color:var(--color-ink)]/15"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-[2px] w-5 bg-[color:var(--color-ink)] transition-transform">
            <span
              className={cn(
                "absolute left-0 block h-[2px] w-5 bg-[color:var(--color-ink)] transition-all",
                open ? "top-0 rotate-45" : "-top-1.5",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-[2px] w-5 bg-[color:var(--color-ink)] transition-all",
                open ? "top-0 -rotate-45" : "top-1.5",
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 bg-[color:var(--color-ivory)] transition-all duration-500",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-6 p-8 text-3xl">
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-[var(--font-display)] tracking-tight"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-[color:var(--color-teal-deep)] px-6 py-3 text-sm uppercase tracking-[0.18em] text-[color:var(--color-ivory)]"
          >
            Start enquiry
            <span aria-hidden>→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
