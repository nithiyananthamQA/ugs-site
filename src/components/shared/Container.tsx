import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  as: Tag = "div",
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "article";
  size?: "default" | "wide" | "narrow";
}) {
  const sizes = {
    default: "max-w-[1380px]",
    wide: "max-w-[1600px]",
    narrow: "max-w-[960px]",
  };
  return (
    <Tag className={cn("mx-auto w-full px-6 md:px-10 lg:px-14", sizes[size], className)}>
      {children}
    </Tag>
  );
}
