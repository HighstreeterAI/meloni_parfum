"use client";

import { useState, useTransition } from "react";
import { Button, ButtonLink } from "@/components/ui/button";
import { routes } from "@/components/layout/navigation";
import { formatPrice } from "@/lib/format";
import { beginCheckout } from "@/services/cart";
import { useCart } from "./cart-provider";
import { CartItem } from "./cart-item";

export function CartView() {
  const { cart, isReady, updateCart, removeFromCart } = useCart();
  const [checkoutMessage, setCheckoutMessage] = useState<string | null>(null);
  const [isCheckingOut, startCheckout] = useTransition();

  const handleCheckout = () => {
    startCheckout(async () => {
      const result = await beginCheckout();
      if (result.url) {
        window.location.assign(result.url);
        return;
      }
      setCheckoutMessage(result.message ?? null);
    });
  };

  if (!isReady || !cart) {
    return (
      <div aria-busy="true" className="mt-16 space-y-6">
        {[0, 1].map((key) => (
          <div key={key} className="flex gap-6 border-b border-line pb-8">
            <div className="aspect-[3/4] w-24 animate-pulse bg-cream sm:w-32" />
            <div className="flex-1 space-y-3 pt-2">
              <div className="h-6 w-32 animate-pulse bg-cream" />
              <div className="h-3 w-40 animate-pulse bg-cream" />
            </div>
          </div>
        ))}
        <span className="sr-only">Warenkorb wird geladen</span>
      </div>
    );
  }

  if (cart.lines.length === 0) {
    return (
      <div className="mx-auto mt-16 max-w-md border-t border-line pt-16 text-center lg:mt-20">
        <p className="font-serif text-3xl font-light italic text-ink">Ihr Warenkorb ist leer.</p>
        <p className="body-copy mt-4">
          Entdecken Sie drei Extraits de Parfum voller Wärme, Licht und zeitloser Eleganz.
        </p>
        <ButtonLink href={routes.collection} variant="outline" withArrow className="mt-10">
          Düfte entdecken
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-8">
        <div className="hidden grid-cols-[140px_1fr_auto_auto] gap-x-8 border-b border-line pb-4 text-[10px] uppercase tracking-label text-taupe md:grid">
          <span>Produkt</span>
          <span />
          <span>Menge</span>
          <span className="min-w-28 text-right">Preis</span>
        </div>
        <ul>
          {cart.lines.map((line) => (
            <CartItem
              key={line.id}
              line={line}
              onUpdateQuantity={updateCart}
              onRemove={removeFromCart}
            />
          ))}
        </ul>
      </div>

      <aside aria-labelledby="summary-heading" className="lg:col-span-4">
        <div className="bg-cream p-8 lg:sticky lg:top-48 lg:p-10">
          <h2 id="summary-heading" className="eyebrow text-ink">
            Bestellübersicht
          </h2>
          <dl className="mt-8 space-y-4 text-[13px] font-light">
            <div className="flex justify-between">
              <dt className="text-stone">
                Zwischensumme ({cart.itemCount} Artikel)
              </dt>
              <dd className="text-ink">{formatPrice(cart.subtotal, cart.currency)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-stone">Versand</dt>
              <dd className="text-ink">Wird an der Kasse berechnet</dd>
            </div>
          </dl>
          <div className="mt-8 flex items-baseline justify-between border-t border-line pt-6">
            <span className="text-[11px] uppercase tracking-label text-ink">Zwischensumme</span>
            <span className="font-serif text-2xl font-light text-ink">
              {formatPrice(cart.subtotal, cart.currency)}
            </span>
          </div>
          <p className="mt-2 text-[11px] font-light text-taupe">inkl. MwSt.</p>

          <Button
            onClick={handleCheckout}
            disabled={isCheckingOut}
            withArrow
            className="mt-8 w-full"
          >
            Zur Kasse
          </Button>
          <p role="status" aria-live="polite" className="mt-4 text-[12px] font-light leading-relaxed text-stone">
            {checkoutMessage}
          </p>

          <ButtonLink href={routes.collection} variant="link" className="mt-4">
            Weiter einkaufen
          </ButtonLink>
        </div>
      </aside>
    </div>
  );
}
