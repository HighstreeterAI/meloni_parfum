export const routes = {
  home: "/",
  collection: "/duefte",
  about: "/ueber-uns",
  journal: "/journal",
  contact: "/kontakt",
  cart: "/warenkorb",
  account: "/konto",
  product: (slug: string) => `/duefte/${slug}`,
  article: (slug: string) => `/journal/${slug}`,
  info: (slug: string) => `/info/${slug}`,
} as const;

export const mainNavigation = [
  { label: "Home", href: routes.home },
  { label: "Düfte", href: routes.collection },
  { label: "Über uns", href: routes.about },
  { label: "Journal", href: routes.journal },
  { label: "Kontakt", href: routes.contact },
] as const;

export const shopNavigation = [
  { label: "Shop", href: routes.collection },
  { label: "Düfte", href: routes.collection },
  { label: "Über uns", href: routes.about },
  { label: "Journal", href: routes.journal },
  { label: "Kontakt", href: routes.contact },
] as const;

export const serviceNavigation = [
  { label: "Versand", href: routes.info("versand") },
  { label: "Retouren", href: routes.info("retouren") },
  { label: "FAQ", href: routes.info("faq") },
  { label: "Datenschutz", href: routes.info("datenschutz") },
  { label: "AGB", href: routes.info("agb") },
] as const;

export const INSTAGRAM_URL = "https://www.instagram.com/";

export function isActivePath(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  if (href === routes.home) return pathname === routes.home;
  return pathname.startsWith(href);
}
