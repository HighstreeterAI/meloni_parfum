"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/format";
import { isActivePath, mainNavigation } from "./navigation";

export function NavList({ pathname }: { pathname: string | null }) {
  return (
    <ul className="flex items-center gap-9 xl:gap-12">
      {mainNavigation.map((item) => {
        const isActive = isActivePath(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "relative py-2 text-[11px] uppercase tracking-wide-nav transition-colors duration-300",
                "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-ink after:transition-transform after:duration-500 after:ease-soft",
                isActive
                  ? "text-ink after:scale-x-100"
                  : "text-stone hover:text-ink after:scale-x-0 hover:after:scale-x-100",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function DesktopNav() {
  const pathname = usePathname();
  return <NavList pathname={pathname} />;
}
