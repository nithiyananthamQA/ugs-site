import { cn } from "@/lib/cn";

export function ThreadDivider({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "thread-divider",
        tone === "dark"
          ? "text-[color:var(--color-ivory)]/40 bg-[color:var(--color-teal-ink)]"
          : "text-[color:var(--color-ink)]/30 bg-[color:var(--color-ivory)]",
        className,
      )}
    >
      <span />
    </div>
  );
}
