import type { Metadata } from "next";
import { Newsletter } from "@/components/newsletter";
import { ProductGrid } from "@/components/product/product-grid";
import { getProducts } from "@/services/products";

export const metadata: Metadata = {
  title: "Düfte",
  description:
    "Drei Extraits de Parfum, drei Charaktere. Entdecken Sie Black Caviar, Charisma und Nugget von Meloni Parfums.",
};

export default async function CollectionPage() {
  const products = await getProducts();

  return (
    <>
      <section className="container-page pb-24 pt-16 lg:pb-40 lg:pt-24">
        <header className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Extrait de Parfum</p>
          <h1 className="display mt-6 text-6xl sm:text-7xl lg:text-8xl">Die Düfte</h1>
          <p className="mt-6 font-serif text-xl italic text-stone sm:text-2xl">
            Drei Kompositionen. Drei Charaktere.
          </p>
          <p className="body-copy mx-auto mt-6 max-w-lg">
            Von der geheimnisvollen Tiefe der Nacht über die Wärme des Mittelmeers bis zum goldenen
            Licht der Berge: Jeder Duft erzählt seine eigene Geschichte.
          </p>
        </header>

        <div className="mt-10 flex items-center justify-between border-y border-line py-4 text-[10px] uppercase tracking-label text-taupe lg:mt-16">
          <span>{products.length} Düfte</span>
          <span className="hidden sm:inline">Duftprobe bei jeder Bestellung</span>
        </div>

        <ProductGrid products={products} layout="collection" className="mt-16 lg:mt-24" />
      </section>

      <Newsletter />
    </>
  );
}
