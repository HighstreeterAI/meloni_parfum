"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/format";
import type { ProductImage } from "@/types/product";

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  if (!activeImage) return null;

  return (
    <div className="flex flex-col gap-4 lg:flex-row-reverse lg:gap-6">
      <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-cream">
        {images.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            preload={index === 0}
            sizes="(min-width: 1024px) 55vw, 100vw"
            className={cn(
              "object-cover transition-opacity duration-700 ease-soft",
              index === activeIndex ? "opacity-100" : "opacity-0",
            )}
            aria-hidden={index !== activeIndex}
          />
        ))}
      </div>

      {images.length > 1 && (
        <ul
          aria-label={`Bilder von ${productName}`}
          className="flex gap-3 lg:w-20 lg:flex-col xl:w-24"
        >
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={image.src} className="w-16 sm:w-20 lg:w-full">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Bild ${index + 1} von ${images.length} anzeigen`}
                  aria-pressed={isActive}
                  className={cn(
                    "relative block aspect-[4/5] w-full overflow-hidden bg-cream transition-opacity duration-300",
                    isActive ? "opacity-100 ring-1 ring-ink ring-offset-2 ring-offset-ivory" : "opacity-60 hover:opacity-100",
                  )}
                >
                  <Image src={image.src} alt="" fill sizes="96px" className="object-cover" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
