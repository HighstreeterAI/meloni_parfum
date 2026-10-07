import Image from "next/image";
import { routes } from "@/components/layout/navigation";
import { ButtonLink } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import type { Product, ProductImage } from "@/types/product";

interface FeaturedFragranceProps {
  product: Product;
  image: ProductImage;
}

export function FeaturedFragrance({ product, image }: FeaturedFragranceProps) {
  return (
    <section aria-labelledby="featured-heading" className="bg-ivory">
      <div className="relative lg:min-h-[760px]">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream sm:aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="object-cover object-[72%_50%]"
          />
        </div>

        <div className="container-page relative flex lg:min-h-[760px] lg:items-center">
          <div className="w-full py-16 lg:max-w-md lg:py-24 xl:max-w-lg">
            <p className="eyebrow text-stone">Im Fokus · {product.fragranceType}</p>
            <h2 id="featured-heading" className="display mt-6 text-6xl lg:text-8xl">
              {product.name}
            </h2>
            <p className="mt-6 font-serif text-2xl italic text-ink lg:text-3xl">{product.tagline}</p>

            <div className="mt-10 border-t border-ink/15 pt-8">
              <p className="eyebrow mb-5">Duftnoten</p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {product.keyNotes.map((note) => (
                  <li key={note} className="flex items-center gap-3 text-[14px] font-light text-ink">
                    <span aria-hidden="true" className="h-px w-4 bg-champagne" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
              <p className="text-[15px] font-light tracking-[0.06em] text-ink">
                {formatPrice(product.price, product.currency)}
              </p>
              <ButtonLink href={routes.product(product.slug)} variant="link" withArrow>
                {product.name} entdecken
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
