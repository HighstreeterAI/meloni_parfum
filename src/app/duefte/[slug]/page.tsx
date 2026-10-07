import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { routes } from "@/components/layout/navigation";
import { AddToCart } from "@/components/product/add-to-cart";
import { FragranceNotes } from "@/components/product/fragrance-notes";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductGrid } from "@/components/product/product-grid";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { formatPrice } from "@/lib/format";
import { getProduct, getProducts, getRelatedProducts } from "@/services/products";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/duefte/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return {};

  return {
    title: `${product.name} — ${product.fragranceType}`,
    description: `${product.tagline} ${product.description}`,
    openGraph: { images: [product.images[0].src] },
  };
}

export default async function ProductPage({ params }: PageProps<"/duefte/[slug]">) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const related = await getRelatedProducts(product.slug, 2);

  return (
    <>
      <section className="container-page pb-20 pt-6 lg:pb-32 lg:pt-10">
        <nav aria-label="Brotkrumen" className="mb-6 lg:mb-10">
          <ol className="flex items-center gap-2 text-[10px] uppercase tracking-label text-taupe">
            <li>
              <Link href={routes.collection} className="transition-colors hover:text-ink">
                Düfte
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-24">
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">{product.fragranceType}</p>
              <h1 className="display mt-4 text-6xl lg:text-7xl xl:text-8xl">{product.name}</h1>
              <p className="mt-6 font-serif text-2xl italic text-stone">{product.tagline}</p>

              <div className="mt-8 flex items-baseline gap-4 border-t border-line pt-6">
                <p className="text-lg font-light tracking-[0.04em] text-ink">
                  {formatPrice(product.price, product.currency)}
                </p>
                <p className="text-[10px] uppercase tracking-label text-taupe">{product.size}</p>
                <p className="ml-auto text-[10px] uppercase tracking-label text-taupe">inkl. MwSt.</p>
              </div>

              <p className="body-copy mt-6">{product.description}</p>

              <div className="mt-10">
                <FragranceNotes notes={product.notes} />
              </div>

              <div className="mt-10">
                <AddToCart
                  productId={product.id}
                  productName={product.name}
                  priceLabel={formatPrice(product.price, product.currency)}
                />
              </div>

              <div className="mt-8">
                <Accordion
                  items={[
                    {
                      id: "beschreibung",
                      title: "Beschreibung",
                      defaultOpen: true,
                      content: <p>{product.story}</p>,
                    },
                    {
                      id: "inhaltsstoffe",
                      title: "Inhaltsstoffe",
                      content: <p>{product.ingredients}</p>,
                    },
                    {
                      id: "versand",
                      title: "Versand & Retouren",
                      content: (
                        <div className="space-y-3">
                          <p>
                            Kostenloser Versand innerhalb der Schweiz, Lieferung in 1–2 Werktagen.
                            Versand nach Europa ab CHF 15.–.
                          </p>
                          <p>
                            Ungeöffnete Produkte können innerhalb von 30 Tagen zurückgegeben werden.{" "}
                            <Link href={routes.info("retouren")} className="text-ink underline underline-offset-4">
                              Mehr erfahren
                            </Link>
                          </p>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="related-heading" className="border-t border-line bg-cream py-20 lg:py-32">
        <div className="container-page">
          <SectionHeading
            id="related-heading"
            title="Weitere Düfte"
            subtitle="Entdecken Sie die ganze Kollektion."
          />
          <ProductGrid products={related} layout="related" className="mt-14 lg:mt-20" />
        </div>
      </section>
    </>
  );
}
