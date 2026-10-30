import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="wordmark">Tank Mate Match</p>
          <p>Freshwater tank-mate checks from published ranges. No affiliate links on this version of the site.</p>
        </div>
        <nav aria-label="Footer">
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/methodology">Methodology</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/affiliate-disclosure">Affiliate disclosure</Link>
            </li>
            <li>
              <Link href="/species">Species</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
