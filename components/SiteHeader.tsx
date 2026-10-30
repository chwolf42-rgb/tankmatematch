import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  { href: "/checker", label: "Checker" },
  { href: "/species", label: "Species" },
  { href: "/methodology", label: "How it works" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-6">
        <Link href="/" className="text-base font-semibold tracking-tight no-underline">
          <Logo />
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-slate-700 no-underline hover:bg-foam hover:text-deep"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
