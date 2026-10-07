"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useCart } from "@/components/cart/cart-provider";
import { AccountIcon, BagIcon, CloseIcon, MenuIcon, SearchIcon } from "@/components/ui/icons";
import { cn } from "@/lib/format";
import { DesktopNav, NavList } from "./desktop-nav";
import { Logo } from "./logo";
import { INSTAGRAM_URL, mainNavigation, routes } from "./navigation";
import { SearchPanel } from "./search-panel";

const iconButtonBase =
  "relative h-10 w-10 items-center justify-center text-ink transition-colors duration-300 hover:text-stone";
const iconButton = `inline-flex ${iconButtonBase}`;

export function Header() {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const itemCount = cart?.itemCount ?? 0;

  useEffect(() => {
    if (!isMenuOpen && !isSearchOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      setIsSearchOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isSearchOpen]);

  const handleCloseAll = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  const handleToggleSearch = () => {
    setIsMenuOpen(false);
    setIsSearchOpen((open) => !open);
  };

  const bagLabel = `Warenkorb, ${itemCount} Artikel`;

  return (
    <header className="sticky top-0 z-40">
      <div className="relative border-b border-line/70 bg-ivory">
        <div className="container-page grid h-[72px] grid-cols-[1fr_auto_1fr] items-center lg:h-[88px]">
          <div className="flex items-center">
            <button
              type="button"
              className={cn(iconButtonBase, "-ml-2.5 inline-flex lg:hidden")}
              onClick={() => {
                setIsSearchOpen(false);
                setIsMenuOpen(true);
              }}
              aria-label="Menü öffnen"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <MenuIcon />
            </button>
            <Logo preload className="hidden w-[150px] lg:block xl:w-[172px]" onClick={handleCloseAll} />
          </div>

          <Logo preload className="block w-[136px] sm:w-[150px] lg:hidden" onClick={handleCloseAll} />

          <nav aria-label="Hauptnavigation" className="hidden lg:block">
            <Suspense fallback={<NavList pathname={null} />}>
              <DesktopNav />
            </Suspense>
          </nav>

          <div className="flex items-center justify-end gap-0.5 sm:gap-1.5">
            <button
              type="button"
              className={iconButton}
              onClick={handleToggleSearch}
              aria-label={isSearchOpen ? "Suche schliessen" : "Suche"}
              aria-expanded={isSearchOpen}
            >
              <SearchIcon />
            </button>
            <Link
              href={routes.account}
              className={cn(iconButtonBase, "hidden sm:inline-flex")}
              aria-label="Kundenkonto"
              onClick={handleCloseAll}
            >
              <AccountIcon />
            </Link>
            <Link href={routes.cart} className={cn(iconButton, "-mr-2.5")} aria-label={bagLabel} onClick={handleCloseAll}>
              <BagIcon />
              <span
                aria-hidden="true"
                className="absolute right-0.5 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-ink px-1 text-[9px] font-normal leading-none text-ivory"
              >
                {itemCount}
              </span>
            </Link>
          </div>
        </div>

        {isSearchOpen && <SearchPanel onClose={() => setIsSearchOpen(false)} />}
      </div>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menü"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-ivory transition-opacity duration-500 ease-soft lg:hidden",
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="container-page grid h-[72px] grid-cols-[1fr_auto_1fr] items-center border-b border-line">
          <button
            type="button"
            className={cn(iconButton, "-ml-2.5")}
            onClick={() => setIsMenuOpen(false)}
            aria-label="Menü schliessen"
          >
            <CloseIcon />
          </button>
          <Logo className="block w-[136px] sm:w-[150px]" onClick={handleCloseAll} />
          <span />
        </div>

        <nav aria-label="Mobile Navigation" className="container-page flex flex-1 flex-col justify-between py-12">
          <ul className="space-y-5">
            {mainNavigation.map((item, index) => (
              <li
                key={item.href}
                className={cn(
                  "transition-all duration-700 ease-soft",
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                )}
                style={{ transitionDelay: isMenuOpen ? `${80 + index * 50}ms` : "0ms" }}
              >
                <Link
                  href={item.href}
                  onClick={handleCloseAll}
                  className="font-serif text-[2.6rem] font-normal leading-none text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-y-4 border-t border-line pt-8">
            <Link href={routes.account} onClick={handleCloseAll} className="eyebrow block text-stone">
              Kundenkonto
            </Link>
            <Link href={routes.cart} onClick={handleCloseAll} className="eyebrow block text-stone">
              Warenkorb ({itemCount})
            </Link>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="eyebrow block text-stone">
              Instagram
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
