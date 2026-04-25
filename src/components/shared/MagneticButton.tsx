"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "gold" | "ghost" | "whatsapp" | "outline-ivory";
  strength?: number;
};

type AsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  external?: boolean;
  onClick?: never;
  type?: never;
  ariaLabel?: string;
};

type AsButton = CommonProps & {
  href?: undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  gold: "bg-[color:var(--color-gold)] text-[color:var(--color-teal-deep)] hover:bg-[color:var(--color-gold-soft)]",
  ghost:
    "bg-transparent text-[color:var(--color-ink)] border border-[color:var(--color-ink)]/20 hover:border-[color:var(--color-ink)]/50",
  whatsapp:
    "bg-[color:var(--color-whatsapp)] text-white hover:opacity-90",
  "outline-ivory":
    "bg-transparent text-[color:var(--color-ivory)] border border-[color:var(--color-ivory)]/40 hover:border-[color:var(--color-ivory)]",
};

export function MagneticButton(props: AsLink | AsButton) {
  const {
    children,
    className,
    variant = "gold",
    strength = 0.35,
    ariaLabel,
  } = props;

  const wrapRef = useRef<HTMLSpanElement | null>(null);
  const innerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      inner.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
    };
    const onLeave = () => {
      inner.style.transform = "translate3d(0, 0, 0)";
    };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  const classes = cn(
    "relative inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium tracking-wide transition-colors duration-300",
    variants[variant],
    className,
  );

  const content = (
    <span ref={innerRef} className="magnetic inline-flex items-center gap-3">
      {children}
    </span>
  );

  if ("href" in props && props.href) {
    const external = props.external;
    return (
      <span ref={wrapRef} className="inline-block" data-magnetic>
        <Link
          href={props.href}
          target={props.target}
          rel={props.rel ?? (external ? "noopener noreferrer" : undefined)}
          className={classes}
          aria-label={ariaLabel}
          prefetch={external ? false : undefined}
        >
          {content}
        </Link>
      </span>
    );
  }

  return (
    <span ref={wrapRef} className="inline-block" data-magnetic>
      <button
        type={(props as AsButton).type ?? "button"}
        onClick={(props as AsButton).onClick}
        className={classes}
        aria-label={ariaLabel}
      >
        {content}
      </button>
    </span>
  );
}
