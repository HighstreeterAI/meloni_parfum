import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  preload?: boolean;
  onClick?: () => void;
}

export function Logo({ className, preload, onClick }: LogoProps) {
  return (
    <Link href="/" onClick={onClick} aria-label="Meloni Parfums — Home" className={className}>
      <Image
        src="/images/logo-meloni.png"
        alt="Meloni Parfums"
        width={945}
        height={243}
        preload={preload}
        sizes="(min-width: 1024px) 200px, 160px"
        className="block h-auto w-full"
      />
    </Link>
  );
}
