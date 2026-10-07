import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JournalCard } from "@/components/editorial/journal-card";
import { routes } from "@/components/layout/navigation";
import { ButtonLink } from "@/components/ui/button";
import { getArticle, getArticles } from "@/services/journal";

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { images: [article.image.src] },
  };
}

export default async function ArticlePage({ params }: PageProps<"/journal/[slug]">) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const more = (await getArticles()).filter((item) => item.slug !== article.slug).slice(0, 3);
  const [firstParagraph, ...paragraphs] = article.body;

  return (
    <>
      <article>
        <header className="container-page pb-12 pt-16 text-center lg:pb-16 lg:pt-28">
          <nav aria-label="Brotkrumen">
            <Link
              href={routes.journal}
              className="text-[10px] uppercase tracking-label text-taupe transition-colors hover:text-ink"
            >
              ← Journal
            </Link>
          </nav>
          <p className="mt-10 text-[10px] uppercase tracking-label text-taupe">
            {article.category}
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            {article.date}
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            {article.readingTime}
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl font-serif text-5xl font-normal leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            {article.title}
          </h1>
          <p className="mx-auto mt-8 max-w-xl font-serif text-xl font-light italic text-stone lg:text-2xl">
            {article.excerpt}
          </p>
        </header>

        <div className="container-page">
          <div className="relative aspect-[4/3] overflow-hidden bg-sand lg:aspect-[16/9]">
            <Image
              src={article.image.src}
              alt={article.image.alt}
              fill
              preload
              sizes="(min-width: 1440px) 1312px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="container-page py-16 lg:py-28">
          <div className="mx-auto max-w-2xl">
            <p className="font-serif text-2xl font-light leading-relaxed text-ink first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-7xl first-letter:leading-[0.8] lg:text-[1.7rem]">
              {firstParagraph}
            </p>

            {article.quote && (
              <blockquote className="my-14 border-y border-line py-10 text-center font-serif text-3xl font-light italic leading-snug text-ink lg:text-4xl">
                «{article.quote}»
              </blockquote>
            )}

            <div className="body-copy space-y-6 text-base">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-16 border-t border-line pt-10">
              <ButtonLink href={routes.collection} variant="link" withArrow>
                Düfte entdecken
              </ButtonLink>
            </div>
          </div>
        </div>
      </article>

      <section aria-labelledby="more-heading" className="border-t border-line bg-cream py-20 lg:py-28">
        <div className="container-page">
          <h2 id="more-heading" className="heading text-center text-3xl sm:text-4xl lg:text-5xl">
            Weitere Geschichten
          </h2>
          <ul className="mt-14 grid gap-14 md:grid-cols-3 md:gap-8 lg:mt-16 lg:gap-10">
            {more.map((item) => (
              <li key={item.slug}>
                <JournalCard article={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
