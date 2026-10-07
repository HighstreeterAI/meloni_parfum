import type { Metadata } from "next";
import { CartView } from "@/components/cart/cart-view";

export const metadata: Metadata = {
  title: "Warenkorb",
  robots: { index: false },
};

export default function CartPage() {
  return (
    <section className="container-page pb-24 pt-16 lg:pb-40 lg:pt-24">
      <header className="border-b border-line pb-10">
        <p className="eyebrow">Ihre Auswahl</p>
        <h1 className="display mt-6 text-5xl sm:text-6xl lg:text-7xl">Warenkorb</h1>
      </header>
      <CartView />
    </section>
  );
}
