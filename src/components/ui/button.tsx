import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/format";

const variants = {
  primary:
    "bg-ink text-ivory border border-ink hover:bg-stone hover:border-stone disabled:bg-taupe disabled:border-taupe",
  outline:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-ivory disabled:opacity-40",
  link: "bg-transparent text-ink border-0 px-0 py-0 h-auto",
} as const;

type ButtonVariant = keyof typeof variants;

const base =
  "group inline-flex items-center justify-center gap-3 whitespace-nowrap font-sans text-[11px] font-normal uppercase tracking-label transition-colors duration-500 ease-soft disabled:cursor-not-allowed";

const sizes = {
  default: "h-14 px-6 sm:px-8",
  compact: "h-12 px-5",
} as const;

type ButtonSize = keyof typeof sizes;

function Content({ children, withArrow }: { children: ReactNode; withArrow?: boolean }) {
  if (!withArrow) return <>{children}</>;

  return (
    <>
      <span className="relative">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-500 ease-soft group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );
}

function classesFor(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(
    base,
    variants[variant],
    variant !== "link" && sizes[size],
    variant === "link" &&
      "relative pb-1.5 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-current after:transition-transform after:duration-500 after:ease-soft hover:after:scale-x-[0.55]",
    className,
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
}

export function Button({
  variant = "primary",
  size = "default",
  withArrow,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={classesFor(variant, size, className)} {...props}>
      <Content withArrow={withArrow}>{children}</Content>
    </button>
  );
}

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
}

export function ButtonLink({
  variant = "primary",
  size = "default",
  withArrow,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={classesFor(variant, size, className)} {...props}>
      <Content withArrow={withArrow}>{children}</Content>
    </Link>
  );
}
