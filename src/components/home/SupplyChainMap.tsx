"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/shared/Container";
import { HOME_COPY } from "@/content/copy";
import { cn } from "@/lib/cn";

export function SupplyChainMap() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const tracerRef = useRef<SVGCircleElement | null>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const path = pathRef.current;
    const tracer = tracerRef.current;
    if (!section || !path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      path.style.strokeDashoffset = "0";
      setActiveStage(HOME_COPY.supplyChain.stages.length - 1);
      return;
    }

    let raf = 0;
    let ticking = false;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = rect.height - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(scrollable, 1));
      const progress = scrolled / Math.max(scrollable, 1);
      path.style.strokeDashoffset = `${length * (1 - progress)}`;

      if (tracer) {
        const pt = path.getPointAtLength(length * progress);
        tracer.setAttribute("cx", String(pt.x));
        tracer.setAttribute("cy", String(pt.y));
        tracer.style.opacity = progress > 0.01 && progress < 0.99 ? "1" : "0";
      }

      const stageCount = HOME_COPY.supplyChain.stages.length;
      const idx = Math.min(Math.floor(progress * stageCount * 1.02), stageCount - 1);
      setActiveStage(idx);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        raf = requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const stages = HOME_COPY.supplyChain.stages;
  const current = stages[activeStage];

  return (
    <section
      id="supply-chain"
      ref={sectionRef}
      aria-label="The UGS Supply Chain"
      className="relative bg-[color:var(--color-teal-ink)] text-[color:var(--color-ivory)] grain"
      style={{ height: "calc(100vh + 500vh)" }}
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden spotlight flex flex-col">
        <Container size="wide" className="relative pt-24 md:pt-28 pb-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow text-[color:var(--color-gold)]">
                {HOME_COPY.supplyChain.eyebrow}
              </p>
              <h2 className="display mt-4 text-[clamp(1.8rem,3.4vw,3rem)] text-[color:var(--color-ivory)]">
                {HOME_COPY.supplyChain.headline}{" "}
                <em className="display-italic text-[color:var(--color-gold-soft)]" style={{ fontStyle: "italic" }}>
                  {HOME_COPY.supplyChain.headlineItalic}
                </em>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-[color:var(--color-ivory)]/70 md:text-right">
              Scroll to trace your order&apos;s journey from our audited Coimbatore factories to your destination.
            </p>
          </div>
        </Container>

        {/* Map area */}
        <div className="relative flex-1 px-6 md:px-10 lg:px-14">
          <div className="relative h-full w-full max-w-[1600px] mx-auto">
            <svg
              viewBox="0 0 1400 520"
              className="absolute inset-0 w-full h-full"
              aria-hidden
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <radialGradient id="originPulse" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0" stopColor="#d2a15a" stopOpacity="0.7" />
                  <stop offset="1" stopColor="#d2a15a" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="journey" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#d2a15a" />
                  <stop offset="0.5" stopColor="#e6c084" />
                  <stop offset="1" stopColor="#d2a15a" />
                </linearGradient>
              </defs>

              <g fill="none" stroke="#f6f1e7" strokeOpacity={0.05} strokeWidth={1}>
                <path d="M60 200 Q 180 150 280 180 T 460 200 Q 540 180 600 210 T 720 240 Q 780 260 840 230" />
                <path d="M860 140 Q 960 120 1060 150 T 1260 200 Q 1320 230 1360 220" />
                <path d="M120 340 Q 240 360 360 340 T 540 350" />
                <path d="M820 360 Q 940 380 1080 360 T 1300 340" />
              </g>

              <g fill="#f6f1e7" fillOpacity={0.05}>
                {Array.from({ length: 22 }).map((_, r) =>
                  Array.from({ length: 58 }).map((_, c) => (
                    <circle key={`${r}-${c}`} cx={c * 24 + 12} cy={r * 22 + 40} r={0.7} />
                  )),
                )}
              </g>

              <path
                ref={pathRef}
                d="M 200 380 C 320 340, 400 260, 520 240 S 700 280, 820 220 S 960 140, 1080 180 S 1220 210, 1280 180"
                fill="none"
                stroke="url(#journey)"
                strokeWidth={2.5}
                strokeLinecap="round"
              />

              {/* Origin node */}
              <g>
                <circle cx={200} cy={380} r={32} fill="url(#originPulse)">
                  <animate attributeName="r" values="32;52;32" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <circle cx={200} cy={380} r={7} fill="#d2a15a" />
                <circle cx={200} cy={380} r={3} fill="#f6f1e7" />
              </g>

              {/* Waypoint circles */}
              <circle cx={520} cy={240} r={4} fill="#f6f1e7" fillOpacity={0.85} />
              <circle cx={820} cy={220} r={4} fill="#f6f1e7" fillOpacity={0.85} />

              {/* Destination */}
              <g>
                <circle cx={1280} cy={180} r={18} fill="none" stroke="#f6f1e7" strokeOpacity={0.35} />
                <circle cx={1280} cy={180} r={7} fill="#f6f1e7" />
              </g>

              {/* Tracer */}
              <circle
                ref={tracerRef}
                cx={200}
                cy={380}
                r={7}
                fill="#d2a15a"
                style={{ opacity: 0, filter: "drop-shadow(0 0 8px #d2a15a)" }}
              >
                <animate attributeName="r" values="7;11;7" dur="1.4s" repeatCount="indefinite" />
              </circle>
            </svg>

            {/* HTML labels positioned absolutely for sharpness */}
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute flex flex-col items-center gap-1"
                style={{ left: "14.3%", top: "73%" }}
              >
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[color:var(--color-ivory)]/90">
                  Coimbatore
                </span>
                <span className="text-[9px] tracking-[0.22em] uppercase text-[color:var(--color-gold)]">
                  Origin
                </span>
              </div>
              <div
                className="absolute flex flex-col items-center gap-1"
                style={{ left: "37.1%", top: "40%" }}
              >
                <span className="text-[9px] tracking-[0.22em] uppercase text-[color:var(--color-ivory)]/60">
                  Chennai Port
                </span>
              </div>
              <div
                className="absolute flex flex-col items-center gap-1"
                style={{ left: "58.5%", top: "34%" }}
              >
                <span className="text-[9px] tracking-[0.22em] uppercase text-[color:var(--color-ivory)]/60">
                  In Transit
                </span>
              </div>
              <div
                className="absolute flex flex-col items-center gap-1"
                style={{ left: "91.4%", top: "24%" }}
              >
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[color:var(--color-ivory)]/90">
                  Buyer
                </span>
                <span className="text-[9px] tracking-[0.22em] uppercase text-[color:var(--color-gold)]">
                  Destination
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom panel — stage detail + progress rail */}
        <Container size="wide" className="pb-10">
          <div className="grid md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-7">
              <div className="glass-light rounded-2xl p-6 md:p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="eyebrow text-[color:var(--color-gold-soft)] numeric">
                    {current.n} / {String(stages.length).padStart(2, "0")}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ivory)]/60">
                    {current.meta}
                  </p>
                </div>
                <h3 className="mt-3 display text-2xl md:text-3xl text-[color:var(--color-ivory)]">
                  {current.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-[color:var(--color-ivory)]/80 leading-relaxed max-w-xl">
                  {current.body}
                </p>
              </div>
            </div>

            <div className="md:col-span-5">
              <ol className="flex flex-col gap-2">
                {stages.map((s, i) => (
                  <li
                    key={s.n}
                    className={cn(
                      "flex items-center gap-3 transition-all duration-500",
                      i <= activeStage ? "opacity-100" : "opacity-40",
                    )}
                  >
                    <span className="eyebrow numeric w-8 text-[color:var(--color-gold-soft)]">{s.n}</span>
                    <span
                      aria-hidden
                      className={cn(
                        "h-px transition-all duration-500",
                        i <= activeStage
                          ? "w-10 bg-[color:var(--color-gold)]"
                          : "w-6 bg-[color:var(--color-ivory)]/20",
                      )}
                    />
                    <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-ivory)]/85 flex-1">
                      {s.title}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
