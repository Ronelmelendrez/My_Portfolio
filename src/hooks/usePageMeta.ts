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

function setMetaProperty(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/**
 * Sets the per-page document title ("<page> | Ronel Melendrez"), the meta
 * description, and the Open Graph title/description so link previews match
 * the page. Omitted values fall back to the site defaults.
 */
export default function usePageMeta(title?: string, description?: string) {
  useEffect(() => {
    const docTitle = title ? `${title} | ${BRAND}` : `${BRAND} — Portfolio`;
    const desc = description ?? DEFAULT_DESCRIPTION;

    document.title = docTitle;
    setMetaDescription(desc);
    setMetaProperty('og:title', docTitle);
    setMetaProperty('og:description', desc);
  }, [title, description]);
}
