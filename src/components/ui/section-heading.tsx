import type { ReactNode } from "react";
import { cn } from "@/lib/format";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={cn(isCenter && "mx-auto max-w-2xl text-center", className)}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <Tag id={id} className="heading text-4xl sm:text-5xl lg:text-6xl">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-5 font-serif text-xl font-light italic text-stone sm:text-2xl">{subtitle}</p>
      )}
    </div>
  );
}
