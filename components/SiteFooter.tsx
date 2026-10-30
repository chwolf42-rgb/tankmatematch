import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  { href: "/about", label: "About" },
  { href: "/methodology", label: "How it works" },
  { href: "/privacy", label: "Privacy" },
  { href: "/affiliate-disclosure", label: "Affiliate disclosure" },
  { href: "/species", label: "Species" },
  { href: "/llms.txt", label: "llms.txt" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-[1.4fr_1fr] md:py-10">
        <div>
          <p className="text-base font-semibold">
            <Logo />
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
            Freshwater tank-mate checks from published ranges. No affiliate links on this version of the site.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-11 items-center text-sm font-medium text-slate-700 no-underline hover:text-teal-800">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
