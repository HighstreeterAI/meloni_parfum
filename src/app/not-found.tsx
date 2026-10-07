import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60svh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="display mt-6 text-5xl sm:text-7xl">Seite nicht gefunden</h1>
      <p className="mt-6 max-w-md font-serif text-xl font-light italic text-stone">
        Die gesuchte Seite ist verflogen, wie ein Duft im Wind.
      </p>
      <ButtonLink href="/" variant="outline" withArrow className="mt-12">
        Zur Startseite
      </ButtonLink>
    </section>
  );
}
