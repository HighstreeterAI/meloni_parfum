import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie Meloni Parfums bei Fragen zu unseren Düften, Ihrer Bestellung oder für eine persönliche Beratung.",
};

const details = [
  { label: "E-Mail", value: "hello@meloniparfums.ch", href: "mailto:hello@meloniparfums.ch" },
  { label: "Telefon", value: "+41 44 000 00 00", href: "tel:+41440000000" },
  { label: "Atelier", value: "Bahnhofstrasse 00, 8001 Zürich, Schweiz" },
  { label: "Öffnungszeiten", value: "Montag bis Freitag, 9:00 – 18:00 Uhr" },
] as const;

export default function ContactPage() {
  return (
    <section className="container-page pb-24 pt-16 lg:pb-40 lg:pt-24">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow">Kontakt</p>
          <h1 className="display mt-6 text-6xl sm:text-7xl lg:text-8xl">
            Schreiben
            <br />
            Sie uns
          </h1>
          <p className="mt-8 max-w-sm font-serif text-xl italic leading-snug text-stone lg:text-2xl">
            Bei Fragen zu unseren Düften, zu Ihrer Bestellung oder für eine persönliche Empfehlung.
          </p>

          <dl className="mt-14 space-y-7">
            {details.map((detail) => (
              <div key={detail.label}>
                <dt className="text-[10px] uppercase tracking-label text-taupe">{detail.label}</dt>
                <dd className="mt-2 text-[15px] font-light text-ink">
                  {"href" in detail ? (
                    <a href={detail.href} className="transition-colors hover:text-stone">
                      {detail.value}
                    </a>
                  ) : (
                    detail.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-24">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
