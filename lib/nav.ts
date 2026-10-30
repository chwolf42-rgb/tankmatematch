/** Drop a trailing slash so /checker and /checker/ are the same page. Root stays /. */
export function normalizePath(path: string | null | undefined): string {
  if (!path) return "/";
  const pathOnly = path.split("?")[0]?.split("#")[0] ?? "/";
  if (pathOnly.length > 1 && pathOnly.endsWith("/")) {
    return pathOnly.replace(/\/+$/, "") || "/";
  }
  return pathOnly || "/";
}

export function isCurrentPage(pathname: string | null | undefined, href: string): boolean {
  return normalizePath(pathname) === normalizePath(href);
}
