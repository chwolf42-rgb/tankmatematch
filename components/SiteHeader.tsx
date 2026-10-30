"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isCurrentPage } from "@/lib/nav";
import { Logo } from "./Logo";

const links = [
  { href: "/checker", label: "Checker" },
  { href: "/species", label: "Species" },
  { href: "/methodology", label: "How it works" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-6">
        <Link href="/" className="text-base font-semibold tracking-tight no-underline">
          <Logo />
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-1">
            {links.map((link) => {
              const current = isCurrentPage(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={current ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium hover:bg-foam hover:text-deep ${
                      current
                        ? "text-deep underline decoration-2 underline-offset-4"
                        : "text-slate-700 no-underline"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
