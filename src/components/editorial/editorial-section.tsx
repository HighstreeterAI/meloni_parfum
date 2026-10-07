import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/format";
import type { ProductImage } from "@/types/product";

interface EditorialSectionProps {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  image: ProductImage;
  children: ReactNode;
  action?: ReactNode;
  reverse?: boolean;
  aspect?: "portrait" | "landscape";
  tone?: "ivory" | "cream";
}

export function EditorialSection({
  id,
  eyebrow,
  title,
  image,
  children,
  action,
  reverse = false,
  aspect = "portrait",
  tone = "ivory",
}: EditorialSectionProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("py-20 lg:py-32", tone === "cream" ? "bg-cream" : "bg-ivory")}
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div
          className={cn(
            "lg:col-span-6 xl:col-span-7",
            reverse ? "lg:order-2" : "lg:order-1",
          )}
        >
          <div
            className={cn(
              "relative overflow-hidden bg-sand",
              aspect === "portrait" ? "aspect-[4/5]" : "aspect-[4/3]",
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1280px) 55vw, (min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div
          className={cn(
            "lg:col-span-6 xl:col-span-5",
            reverse ? "lg:order-1 xl:pr-8" : "lg:order-2 xl:pl-8",
          )}
        >
          {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
          <h2 id={headingId} className="heading text-4xl sm:text-5xl xl:text-6xl">
            {title}
          </h2>
          <div className="body-copy mt-8 max-w-md space-y-5">{children}</div>
          {action && <div className="mt-10 lg:mt-12">{action}</div>}
        </div>
      </div>
    </section>
  );
}
