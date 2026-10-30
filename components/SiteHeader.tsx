import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap header-bar">
        <Link href="/" className="wordmark">
          Tank Mate Match
        </Link>
        <nav aria-label="Primary">
          <ul>
            <li>
              <Link href="/checker">Checker</Link>
            </li>
            <li>
              <Link href="/species">Species</Link>
            </li>
            <li>
              <Link href="/methodology">How a verdict is reached</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
