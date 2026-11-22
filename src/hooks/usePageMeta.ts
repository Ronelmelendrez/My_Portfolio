import { useEffect } from 'react';

const BRAND = 'Ronel Melendrez';
const DEFAULT_DESCRIPTION =
  'Portfolio of Ronel, a full stack developer building scalable web systems.';

function setMetaDescription(content: string) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', 'description');
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/**
 * Sets the per-page document title ("<page> | Ronel Melendrez") and the
 * meta description for SEO. Omitted values fall back to the site defaults.
 */
export default function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${BRAND}` : `${BRAND} — Portfolio`;
    setMetaDescription(description ?? DEFAULT_DESCRIPTION);
  }, [title, description]);
}
