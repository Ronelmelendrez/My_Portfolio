import { useEffect } from 'react';

const BRAND = 'Ronel Melendrez';

/**
 * Sets the document title for the current page as "<page> | Ronel Melendrez".
 * Call with no argument to fall back to the site default.
 */
export default function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${BRAND}` : `${BRAND} — Portfolio`;
  }, [title]);
}
