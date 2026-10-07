import Image from "next/image";
import Link from "next/link";
import { routes } from "@/components/layout/navigation";
import { cn } from "@/lib/format";
import type { Article } from "@/types/journal";

interface JournalCardProps {
  article: Article;
  variant?: "default" | "feature";
  headingLevel?: "h2" | "h3";
  className?: string;
}

export function JournalCard({
  article,
  variant = "default",
  headingLevel: Heading = "h3",
  className,
}: JournalCardProps) {
  const isFeature = variant === "feature";

  return (
    <article className={cn("group", className)}>
      <Link
        href={routes.article(article.slug)}
        className={cn("block", isFeature && "grid items-center gap-10 lg:grid-cols-12 lg:gap-16")}
      >
        <div
          className={cn(
            "relative overflow-hidden bg-sand",
            isFeature ? "aspect-[4/3] lg:col-span-7" : "aspect-[4/3]",
          )}
        >
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            sizes={isFeature ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            className="object-cover transition-transform duration-[1400ms] ease-soft group-hover:scale-[1.03]"
          />
        </div>

        <div className={cn(isFeature ? "lg:col-span-5" : "mt-7")}>
          <p className="text-[10px] uppercase tracking-label text-taupe">
            {article.category}
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            {article.date}
          </p>
          <Heading
            className={cn(
              "mt-4 font-serif font-normal leading-[1.15] text-ink",
              isFeature ? "text-4xl sm:text-5xl lg:text-6xl" : "text-2xl lg:text-[1.75rem]",
            )}
          >
            {article.title}
          </Heading>
          <p className={cn("body-copy", isFeature ? "mt-6 max-w-md" : "mt-3 line-clamp-3")}>
            {article.excerpt}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-label text-ink">
            Lesen
            <span
              aria-hidden="true"
              className="transition-transform duration-500 ease-soft group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
