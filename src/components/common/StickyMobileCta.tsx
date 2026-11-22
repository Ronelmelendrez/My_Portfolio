import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

/**
 * Bottom CTA bar for mobile only (< lg). Slides up after the user scrolls
 * past the hero, and hides on the /contact page where it would be redundant.
 * Uses the same gradient button and pulsing "available" badge as the Hero.
 */
export default function StickyMobileCta() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const visible = scrolled && pathname !== '/contact';

  const label = 'Start a project →';

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="nav-blur fixed inset-x-0 bottom-0 z-50 border-t border-b-0 border-border px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] lg:hidden"
          role="region"
          aria-label="Quick contact"
        >
          <div className="flex items-center justify-between gap-3">
            <span className="flex min-w-0 items-center gap-2 font-mono text-[11.5px] text-success">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="truncate">Available for new projects</span>
            </span>

            {pathname === '/' ? (
              <Button asChild size="sm" className="shrink-0">
                <a href="#contact">{label}</a>
              </Button>
            ) : (
              <Button asChild size="sm" className="shrink-0">
                <Link to="/contact">{label}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
