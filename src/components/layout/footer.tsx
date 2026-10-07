import Link from "next/link";
import { Logo } from "./logo";
import { INSTAGRAM_URL, serviceNavigation, shopNavigation } from "./navigation";

const linkClass =
  "text-[11px] uppercase tracking-wide-nav text-stone transition-colors duration-300 hover:text-ink";

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="container-page grid grid-cols-2 gap-x-6 gap-y-12 py-14 md:grid-cols-12 md:gap-8 lg:py-24">
        <div className="col-span-2 md:col-span-5 lg:col-span-6">
          <Logo className="block w-[140px] sm:w-[160px] lg:w-[180px]" />
          <p className="body-copy mt-6 max-w-sm sm:mt-8">
            Extraits de Parfum voller Wärme, Licht und zeitloser Eleganz. Komponiert in der
            Schweiz.
          </p>
        </div>

        <nav aria-label="Shop" className="md:col-span-2">
          <ul className="space-y-4">
            {shopNavigation.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Kundenservice" className="md:col-span-2">
          <ul className="space-y-4">
            {serviceNavigation.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-2 border-t border-line pt-8 md:col-span-3 md:border-0 md:pt-0 lg:col-span-2">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className={linkClass}>
            Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-label text-taupe">© 2026 Meloni Parfums</p>
          <p className="text-[10px] uppercase tracking-label text-taupe">Aargau · Schweiz</p>
        </div>
      </div>
    </footer>
  );
}
