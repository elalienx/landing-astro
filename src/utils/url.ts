const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Prefixes a root-relative path (e.g. "/about") with the site's base path. */
export function withBase(path: string): string {
  return BASE + path;
}
