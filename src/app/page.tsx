import { EditorialSection } from "@/components/editorial/editorial-section";
import { JournalCard } from "@/components/editorial/journal-card";
import { FeaturedFragrance } from "@/components/home/featured-fragrance";
import { Hero } from "@/components/home/hero";
import { Philosophy } from "@/components/home/philosophy";
import { routes } from "@/components/layout/navigation";
import { Newsletter } from "@/components/newsletter";
import { ProductPanelStrip } from "@/components/product/product-grid";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { getArticles } from "@/services/journal";
import { getFeaturedProducts, getProduct } from "@/services/products";

export default async function HomePage() {
  const [products, heroProduct, featured, articles] = await Promise.all([
    getFeaturedProducts(3),
    getProduct("charisma"),
    getProduct("black-caviar"),
    getArticles(3),
  ]);

  return (
    <>
      {heroProduct && (
        <Hero
          product={heroProduct}
          image={{
            src: "/images/hero-charisma.jpg",
            alt: "Charisma Extrait de Parfum auf einem Travertinblock im warmen Sonnenlicht",
          }}
          headline={["Eine Aura, die bleibt.", "Sinnlich. Elegant. Unvergesslich."]}
        />
      )}

      <section aria-label="Die Kollektion">
        <ProductPanelStrip products={products} />
      </section>

      <EditorialSection
        id="story"
        tone="cream"
        eyebrow="Unsere Geschichte"
        title={
          <>
            Die Kunst des
            <br />
            langsamen Luxus.
          </>
        }
        image={{
          src: "/images/story-charisma.jpg",
          alt: "Eine Hand neben dem Charisma Flakon auf einem sonnigen Travertintisch",
        }}
        action={
          <ButtonLink href={routes.about} variant="link" withArrow>
            Unsere Geschichte
          </ButtonLink>
        }
      >
        <p>
          Meloni Parfums entstand aus einer einfachen Überzeugung: Wahrer Luxus ist leise. Er liegt
          in den Details, in den Texturen, in den Momenten, die wir uns selbst schenken.
        </p>
        <p>
          Jede Komposition entsteht langsam, in kleinen Chargen und mit erlesenen Rohstoffen. Keine
          Trends, kein Lärm. Nur Düfte, die man lebt und an die man sich erinnert.
        </p>
      </EditorialSection>

      {featured && (
        <FeaturedFragrance
          product={featured}
          image={{
            src: "/images/featured-black-caviar.jpg",
            alt: "Black Caviar auf einem sonnigen Steinsims vor einem Rundbogen",
          }}
        />
      )}

      <Philosophy />

      <section aria-labelledby="journal-heading" className="py-20 lg:py-32">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading id="journal-heading" eyebrow="Geschichten" title="Journal" align="left" />
            <ButtonLink href={routes.journal} variant="link" withArrow>
              Alle Geschichten
            </ButtonLink>
          </div>
          <ul className="-mx-5 mt-12 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 scrollbar-none sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:mt-14 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 lg:mt-20 lg:gap-10">
            {articles.map((article) => (
              <li key={article.slug} className="w-[80%] shrink-0 snap-start sm:w-[55%] md:w-auto">
                <JournalCard article={article} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
