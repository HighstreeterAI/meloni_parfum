import type { Metadata } from "next";
import Link from "next/link";
import { routes } from "@/components/layout/navigation";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Kundenkonto",
  robots: { index: false },
};

const labelClass = "text-[10px] uppercase tracking-label text-taupe";

export default function AccountPage() {
  return (
    <section className="container-page pb-24 pt-16 lg:pb-40 lg:pt-24">
      <div className="mx-auto max-w-md">
        <header className="text-center">
          <p className="eyebrow">Kundenkonto</p>
          <h1 className="display mt-6 text-5xl sm:text-6xl">Anmelden</h1>
          <p className="mt-6 font-serif text-xl italic text-stone">
            Kundenkonten sind bald verfügbar.
          </p>
        </header>

        <form className="mt-14 space-y-10" aria-describedby="account-note">
          <fieldset disabled className="space-y-10">
            <div>
              <label htmlFor="account-email" className={labelClass}>
                E-Mail
              </label>
              <input id="account-email" type="email" autoComplete="email" className="field" />
            </div>
            <div>
              <label htmlFor="account-password" className={labelClass}>
                Passwort
              </label>
              <input
                id="account-password"
                type="password"
                autoComplete="current-password"
                className="field"
              />
            </div>
            <Button type="submit" className="w-full" withArrow>
              Anmelden
            </Button>
          </fieldset>
          <p id="account-note" className="body-copy text-center text-[13px]">
            In der Zwischenzeit hilft Ihnen unser Team gerne bei jeder Bestellung.{" "}
            <Link href={routes.contact} className="text-ink underline underline-offset-4">
              Kontakt aufnehmen
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
