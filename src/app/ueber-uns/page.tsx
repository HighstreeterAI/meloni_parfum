import type { Metadata } from "next";
import Image from "next/image";
import { EditorialSection } from "@/components/editorial/editorial-section";
import { routes } from "@/components/layout/navigation";
import { Newsletter } from "@/components/newsletter";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Die Essenz von Meloni Parfums: ein Schweizer Duftatelier für langsamen Luxus, sorgfältiges Handwerk und erlesene Rohstoffe.",
};

const ingredients = [
  { name: "Bergamotte", origin: "Kalabrien, Italien" },
  { name: "Jasmin", origin: "Grasse, Frankreich" },
  { name: "Iris", origin: "Toskana, Italien" },
  { name: "Sandelholz", origin: "Neukaledonien" },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="container-page pb-16 pt-16 text-center lg:pb-24 lg:pt-24">
        <p className="eyebrow">Über uns</p>
        <h1 className="display mx-auto mt-6 max-w-5xl text-5xl sm:text-7xl lg:text-[6.5rem]">
          Die Essenz von
          <br />
          Meloni Parfums
        </h1>
        <p className="mx-auto mt-10 max-w-2xl font-serif text-2xl italic leading-snug text-stone lg:text-3xl">
          Wir glauben, dass Luxus leise ist. Er liegt im Licht, in der Textur und in den Momenten,
          die wir uns selbst schenken.
        </p>
      </section>

      <div className="container-page">
        <div className="relative aspect-[4/3] overflow-hidden bg-cream sm:aspect-[16/9] lg:aspect-[21/9]">
          <Image
            src="/images/journal-1.jpg"
            alt="Terrasse einer Villa aus Kalkstein an der Mittelmeerküste im Morgenlicht"
            fill
            preload
            sizes="(min-width: 1440px) 1312px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <EditorialSection
        id="philosophie"
        eyebrow="Unsere Philosophie"
        title={
          <>
            Weniger Dinge,
            <br />
            vollendet gemacht.
          </>
        }
        image={{
          src: "/images/story-charisma.jpg",
          alt: "Eine Hand neben dem Charisma Flakon auf einem Travertintisch",
        }}
      >
        <p>
          Meloni Parfums wurde aus der Idee gegründet, dass ein Duft ein persönliches Ritual sein
          sollte, kein Statement. Wir kreieren nur wenige Kompositionen und geben jeder die Zeit,
          die sie braucht.
        </p>
        <p>
          Unsere Inspiration finden wir an Orten, an denen das Leben langsamer wird: sonnenwarme
          Steine am Mittelmeer, stille Nächte am Meer, das erste Licht auf den Gipfeln der Berge.
        </p>
      </EditorialSection>

      <EditorialSection
        id="handwerk"
        tone="cream"
        reverse
        eyebrow="Unser Handwerk"
        title={
          <>
            Langsam komponiert,
            <br />
            von Hand gefertigt.
          </>
        }
        image={{
          src: "/images/nugget.jpg",
          alt: "Nugget Extrait de Parfum auf Travertin mit Goldnuggets",
        }}
      >
        <p>
          Jede Formel wird über viele Monate entwickelt und in Hunderten von Versuchen auf der Haut
          getestet. Als Extrait de Parfum enthalten unsere Düfte eine besonders hohe Konzentration
          an Duftölen und entfalten sich langsam über den ganzen Tag.
        </p>
        <p>
          Gemischt, gereift und abgefüllt werden sie in kleinen Chargen in der Schweiz. Jedes
          Etikett ist eine eigens gestaltete Illustration, die die Geschichte des Duftes erzählt.
        </p>
      </EditorialSection>

      <section aria-labelledby="ingredients-heading" className="py-20 lg:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">Unsere Rohstoffe</p>
            <h2 id="ingredients-heading" className="heading mt-6 text-4xl sm:text-5xl xl:text-6xl">
              Seltene Essenzen,
              <br />
              ehrlich bezogen.
            </h2>
            <p className="body-copy mt-8 max-w-md">
              Wir wählen jeden Rohstoff wegen seiner Qualität und seiner Geschichte. Viele stammen
              von kleinen Produzenten, die wir persönlich kennen, die von Hand ernten und den
              Rhythmus der Jahreszeiten respektieren.
            </p>

            <dl className="mt-12 border-t border-line">
              {ingredients.map((ingredient) => (
                <div
                  key={ingredient.name}
                  className="flex items-baseline justify-between border-b border-line py-5"
                >
                  <dt className="font-serif text-2xl text-ink">{ingredient.name}</dt>
                  <dd className="text-[10px] uppercase tracking-label text-taupe">
                    {ingredient.origin}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-sand lg:aspect-auto lg:h-full lg:min-h-[640px]">
              <Image
                src="/images/ingredients.jpg"
                alt="Natürliche Rohstoffe: Bergamotte, Iriswurzel, Jasmin, Sandelholz und rosa Pfeffer"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream py-24 lg:py-36">
        <div className="container-page text-center">
          <blockquote className="mx-auto max-w-3xl font-serif text-3xl italic leading-snug text-ink sm:text-4xl lg:text-5xl">
            «Ein Duft wird nicht getragen.
            <br />
            Er wird erinnert.»
          </blockquote>
          <ButtonLink href={routes.collection} variant="link" withArrow className="mt-12">
            Düfte entdecken
          </ButtonLink>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
