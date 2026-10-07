"use client";

import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";
import { routes } from "@/components/layout/navigation";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { cn, formatPrice } from "@/lib/format";
import { MAX_QUANTITY } from "@/services/cart";
import type { CartLine } from "@/types/cart";

interface CartItemProps {
  line: CartLine;
  onUpdateQuantity: (lineId: string, quantity: number) => Promise<void>;
  onRemove: (lineId: string) => Promise<void>;
}

export function CartItem({ line, onUpdateQuantity, onRemove }: CartItemProps) {
  const [isPending, startTransition] = useTransition();
  const href = routes.product(line.slug);

  const handleQuantityChange = (quantity: number) => {
    startTransition(() => onUpdateQuantity(line.id, quantity));
  };

  const handleRemove = () => {
    startTransition(() => onRemove(line.id));
  };

  return (
    <li
      className={cn(
        "grid grid-cols-[96px_1fr] gap-x-5 gap-y-4 border-b border-line py-8 transition-opacity duration-300 sm:grid-cols-[120px_1fr_auto] sm:gap-x-8 md:grid-cols-[140px_1fr_auto_auto]",
        isPending && "opacity-50",
      )}
    >
      <Link href={href} className="relative row-span-2 aspect-[3/4] overflow-hidden bg-cream sm:row-span-1">
        <Image src={line.image.src} alt={line.image.alt} fill sizes="140px" className="object-cover" />
      </Link>

      <div className="flex flex-col justify-between">
        <div>
          <Link href={href}>
            <h2 className="product-name text-xl transition-colors hover:text-stone lg:text-2xl">
              {line.name}
            </h2>
          </Link>
          <p className="mt-2 text-[10px] uppercase tracking-label text-taupe">
            {line.fragranceType}
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            {line.size}
          </p>
          <p className="mt-3 text-[13px] font-light text-stone">
            {formatPrice(line.unitPrice, line.currency)}
          </p>
        </div>
        <button
          type="button"
          onClick={handleRemove}
          disabled={isPending}
          className="mt-4 self-start border-b border-line pb-0.5 text-[10px] uppercase tracking-label text-stone transition-colors hover:border-ink hover:text-ink"
        >
          Entfernen
          <span className="sr-only"> {line.name} aus dem Warenkorb</span>
        </button>
      </div>

      <div className="flex items-center justify-between gap-4 sm:col-start-3 sm:row-start-1 sm:items-start sm:justify-end md:col-start-3">
        <QuantitySelector
          size="compact"
          value={line.quantity}
          min={1}
          max={MAX_QUANTITY}
          disabled={isPending}
          onChange={handleQuantityChange}
          label={`Menge von ${line.name}`}
        />
        <p className="text-[14px] font-light tracking-[0.04em] text-ink md:hidden">
          {formatPrice(line.unitPrice * line.quantity, line.currency)}
        </p>
      </div>

      <p className="hidden min-w-28 text-right text-[14px] font-light tracking-[0.04em] text-ink md:col-start-4 md:row-start-1 md:block md:pt-2.5">
        {formatPrice(line.unitPrice * line.quantity, line.currency)}
      </p>
    </li>
  );
}
