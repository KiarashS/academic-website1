// Astro rewrites the asset URLs it generates when `base` is set, but not the
// hrefs written by hand in templates. Every internal link goes through this.
//
// With `base: '/academic-website1'`, url('/cv/') -> '/academic-website1/cv/'.
// With no base, it is the identity function.

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** True for anything that must be left exactly as written. */
const isExternal = (path: string) => /^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path);

export const url = (path: string): string => {
  if (!path || isExternal(path)) return path;
  return `${BASE}/${path.replace(/^\//, '')}`;
};

/** Absolute URL, for canonical tags and Open Graph. */
export const absolute = (path: string, site: URL | string): string =>
  new URL(url(path), site).href;
