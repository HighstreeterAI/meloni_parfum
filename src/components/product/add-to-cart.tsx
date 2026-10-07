"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useTransition } from "react";
import { useCart } from "@/components/cart/cart-provider";
import { Button } from "@/components/ui/button";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { routes } from "@/components/layout/navigation";
import { cn } from "@/lib/format";
import { MAX_QUANTITY } from "@/services/cart";

interface AddToCartProps {
  productId: string;
  productName: string;
  priceLabel: string;
}

export function AddToCart({ productId, productName, priceLabel }: AddToCartProps) {
  const { addToCart, isReady } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [isBarVisible, setIsBarVisible] = useState(false);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAdded) return;
    const timeout = window.setTimeout(() => setIsAdded(false), 4000);
    return () => window.clearTimeout(timeout);
  }, [isAdded]);

  useEffect(() => {
    const actions = actionsRef.current;
    if (!actions) return;
    const footer = document.querySelector("footer");

    let isPastActions = false;
    let isFooterVisible = false;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === actions) {
          isPastActions = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        } else {
          isFooterVisible = entry.isIntersecting;
        }
      }
      setIsBarVisible(isPastActions && !isFooterVisible);
    });
    observer.observe(actions);
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const handleAddToCart = () => {
    startTransition(async () => {
      await addToCart(productId, quantity);
      setIsAdded(true);
      setQuantity(1);
    });
  };

  const buttonLabel = isPending ? "Wird hinzugefügt" : isAdded ? "Im Warenkorb" : "In den Warenkorb";

  return (
    <div>
      <div ref={actionsRef} className="flex gap-3">
        <QuantitySelector
          value={quantity}
          onChange={setQuantity}
          max={MAX_QUANTITY}
          label={`Menge von ${productName}`}
        />
        <Button onClick={handleAddToCart} disabled={!isReady || isPending} className="flex-1">
          {buttonLabel}
        </Button>
      </div>
      <p role="status" aria-live="polite" className="mt-4 min-h-5 text-[12px] font-light text-stone">
        {isAdded && (
          <>
            {productName} wurde in den Warenkorb gelegt.{" "}
            <Link href={routes.cart} className="text-ink underline underline-offset-4">
              Zum Warenkorb
            </Link>
          </>
        )}
      </p>

      <div
        aria-hidden={!isBarVisible}
        inert={!isBarVisible}
        className={cn(
          "fixed inset-x-0 bottom-0 z-30 border-t border-line bg-ivory pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 transition-transform duration-500 ease-soft lg:hidden",
          isBarVisible ? "translate-y-0" : "translate-y-full",
        )}
      >
        <div className="container-page flex items-center gap-4">
          <div className="min-w-0 flex-1">
            <p className="product-name truncate text-base">{productName}</p>
            <p className="mt-0.5 text-[12px] font-light tracking-[0.04em] text-stone">{priceLabel}</p>
          </div>
          <Button onClick={handleAddToCart} disabled={!isReady || isPending} size="compact">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
