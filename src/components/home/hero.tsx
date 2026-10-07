import Image from "next/image";
import { routes } from "@/components/layout/navigation";
import { ButtonLink } from "@/components/ui/button";
import type { Product } from "@/types/product";

interface HeroProps {
  product: Product;
  image: { src: string; alt: string };
  headline: [string, string];
}

export function Hero({ product, image, headline }: HeroProps) {
  return (
    <section aria-labelledby="hero-heading" className="relative bg-cream">
      <div className="relative aspect-square w-full overflow-hidden sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-auto lg:h-[calc(100svh-88px)] lg:max-h-[860px] lg:min-h-[600px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          preload
          sizes="100vw"
          className="object-cover object-[78%_50%] lg:object-[70%_50%]"
        />
      </div>

      <div className="container-page lg:absolute lg:inset-0 lg:flex lg:items-center">
        <div className="py-12 sm:py-14 lg:max-w-xl lg:py-0">
          <p className="eyebrow text-stone">{product.fragranceType}</p>
          <h1 id="hero-heading" className="display mt-4 text-[4rem] sm:mt-5 sm:text-8xl lg:text-[8.5rem] xl:text-[9.5rem]">
            {product.name}
          </h1>
          <p className="mt-5 font-serif text-[1.4rem] leading-snug text-ink sm:mt-6 sm:text-3xl lg:mt-8 lg:text-[2.1rem]">
            {headline[0]}
            <br />
            {headline[1]}
          </p>
          <ButtonLink href={routes.product(product.slug)} withArrow className="mt-8 w-full sm:mt-10 sm:w-auto lg:mt-12">
            Jetzt entdecken
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
