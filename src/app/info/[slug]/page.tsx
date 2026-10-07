import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { infoPages } from "@/data/pages";

export function generateStaticParams() {
  return infoPages.map((page) => ({ slug: page.slug }));
}

function findPage(slug: string) {
  return infoPages.find((page) => page.slug === slug) ?? null;
}

export async function generateMetadata({ params }: PageProps<"/info/[slug]">): Promise<Metadata> {
  const page = findPage((await params).slug);
  return page ? { title: page.title, description: page.intro } : {};
}

export default async function InfoPage({ params }: PageProps<"/info/[slug]">) {
  const page = findPage((await params).slug);
  if (!page) notFound();

  return (
    <section className="container-page pb-24 pt-16 lg:pb-40 lg:pt-28">
      <div className="mx-auto max-w-2xl">
        <p className="eyebrow">Kundenservice</p>
        <h1 className="display mt-6 text-5xl sm:text-7xl">{page.title}</h1>
        <p className="mt-8 font-serif text-xl font-light italic text-stone lg:text-2xl">{page.intro}</p>

        <div className="mt-14 border-t border-line">
          {page.sections.map((section) => (
            <div key={section.heading} className="grid gap-3 border-b border-line py-8 sm:grid-cols-3 sm:gap-8">
              <h2 className="text-[11px] uppercase tracking-label text-ink">{section.heading}</h2>
              <p className="body-copy sm:col-span-2">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
