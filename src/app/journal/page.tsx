import type { Metadata } from "next";
import { JournalCard } from "@/components/editorial/journal-card";
import { Newsletter } from "@/components/newsletter";
import { getArticles } from "@/services/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Geschichten über Licht, Rohstoffe, Rituale und das Handwerk hinter Meloni Parfums.",
};

export default async function JournalPage() {
  const articles = await getArticles();
  const [lead, ...rest] = articles;
  const secondary = rest.slice(0, 2);
  const archive = rest.slice(2);
  const categories = Array.from(new Set(articles.map((article) => article.category)));

  return (
    <>
      <section className="container-page pb-12 pt-16 lg:pb-16 lg:pt-24">
        <header className="grid gap-8 border-b border-line pb-10 lg:grid-cols-12 lg:items-end lg:pb-14">
          <div className="lg:col-span-8">
            <p className="eyebrow">Geschichten aus dem Atelier</p>
            <h1 className="display mt-6 text-6xl sm:text-8xl lg:text-[8.5rem]">Journal</h1>
          </div>
          <div className="lg:col-span-4">
            <p className="font-serif text-xl italic leading-snug text-stone lg:text-2xl">
              Notizen über Licht, Rohstoffe, Rituale und das langsame Handwerk der Parfumerie.
            </p>
          </div>
        </header>

        <ul className="flex flex-wrap gap-x-8 gap-y-3 py-6 text-[10px] uppercase tracking-label text-taupe">
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </section>

      {lead && (
        <section aria-label="Hauptgeschichte" className="container-page">
          <JournalCard article={lead} variant="feature" headingLevel="h2" />
        </section>
      )}

      {lead?.quote && (
        <section className="container-page py-20 lg:py-32">
          <blockquote className="mx-auto max-w-3xl text-center font-serif text-3xl italic leading-snug text-ink sm:text-4xl lg:text-5xl">
            «{lead.quote}»
          </blockquote>
        </section>
      )}

      {secondary.length > 0 && (
        <section aria-label="Neueste Geschichten" className="container-page">
          <ul className="grid gap-16 md:grid-cols-2 md:gap-10 lg:gap-16">
            {secondary.map((article, index) => (
              <li key={article.slug} className={index === 1 ? "md:mt-24" : undefined}>
                <JournalCard article={article} headingLevel="h2" />
              </li>
            ))}
          </ul>
        </section>
      )}

      {archive.length > 0 && (
        <section aria-labelledby="archive-heading" className="container-page py-20 lg:py-32">
          <h2 id="archive-heading" className="eyebrow border-t border-line pt-8 text-ink">
            Aus dem Archiv
          </h2>
          <ul className="mt-10 divide-y divide-line border-b border-line">
            {archive.map((article) => (
              <li key={article.slug}>
                <JournalCard article={article} variant="feature" headingLevel="h3" className="py-10" />
              </li>
            ))}
          </ul>
        </section>
      )}

      <Newsletter />
    </>
  );
}
