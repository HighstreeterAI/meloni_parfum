import Image from "next/image";
import Link from "next/link";
import { routes } from "@/components/layout/navigation";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/types/product";

export function ProductPanel({ product }: { product: Product }) {
  return (
    <article className="group relative">
      <Link
        href={routes.product(product.slug)}
        className="relative block aspect-[4/3] overflow-hidden bg-ivory sm:aspect-[16/9] lg:aspect-[4/3]"
      >
        <Image
          src={product.panelImage.src}
          alt={product.panelImage.alt}
          fill
          sizes="(min-width: 1024px) 34vw, 100vw"
          className="object-cover object-left transition-transform duration-[1400ms] ease-soft group-hover:scale-[1.02]"
        />

        <div className="absolute inset-y-0 left-[50%] right-4 flex flex-col justify-center sm:left-[46%] lg:left-[50%] xl:left-[48%]">
          <h3 className="product-name text-xl sm:text-3xl lg:text-xl xl:text-[1.65rem]">{product.name}</h3>
          <p className="mt-2 text-[10px] uppercase tracking-label text-stone">{product.fragranceType}</p>
          <span aria-hidden="true" className="my-5 block h-px w-10 bg-ink/40" />
          <p className="hidden text-[12px] font-light tracking-[0.04em] text-stone sm:block">
            {product.size} · {formatPrice(product.price, product.currency)}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-label text-ink">
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
