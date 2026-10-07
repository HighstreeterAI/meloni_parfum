import Image from "next/image";
import Link from "next/link";
import { routes } from "@/components/layout/navigation";
import { cn, formatPrice } from "@/lib/format";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "large";
  sizes?: string;
  className?: string;
}

export function ProductCard({
  product,
  variant = "default",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className,
}: ProductCardProps) {
  const isLarge = variant === "large";
  const [primaryImage, secondaryImage] = product.images;

  return (
    <article className={cn("group", className)}>
      <Link
        href={routes.product(product.slug)}
        className="block"
        aria-label={`${product.name}, ${product.fragranceType}, ${formatPrice(product.price, product.currency)}`}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-cream">
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt}
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-[1400ms] ease-soft group-hover:scale-[1.03]"
          />
          {isLarge && secondaryImage && (
            <Image
              src={secondaryImage.src}
              alt=""
              fill
              sizes={sizes}
              className="object-cover opacity-0 transition-opacity duration-700 ease-soft group-hover:opacity-100"
            />
          )}
        </div>

        <div className={cn("text-center", isLarge ? "mt-8" : "mt-6")}>
          <h3 className={cn("product-name", isLarge ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl")}>
            {product.name}
          </h3>
          {isLarge && (
            <p className="mt-3 font-serif text-lg italic text-stone">{product.tagline}</p>
          )}
          <p className="mt-3 text-[10px] uppercase tracking-label text-taupe">
            {product.fragranceType}
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            {product.size}
          </p>
          <p className="mt-2 text-[13px] font-light tracking-[0.06em] text-ink">
            {formatPrice(product.price, product.currency)}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 border-b border-transparent pb-1 text-[11px] uppercase tracking-label text-ink transition-colors duration-500 group-hover:border-ink">
            Entdecken
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
