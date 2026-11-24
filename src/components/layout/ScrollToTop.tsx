import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the top on route changes, or to the hash target when the
 * location carries one (e.g. /projects → /#about). The target section may
 * live in a lazy route, so it retries for up to ~1s until it mounts.
 */
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.slice(1);
      let tries = 0;
      let raf = 0;

      const tryScroll = () => {
        const el = document.getElementById(targetId);
        if (el) {
          // scroll-padding-top on <html> keeps it clear of the fixed navbar.
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        if (tries++ < 60) raf = requestAnimationFrame(tryScroll);
      };

      raf = requestAnimationFrame(tryScroll);
      return () => cancelAnimationFrame(raf);
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
