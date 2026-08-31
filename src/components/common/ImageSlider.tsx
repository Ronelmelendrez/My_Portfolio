import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface ImageSliderProps {
  images: string[];
  alt: string;
}

type SlideState = [index: number, direction: number];

const slideVariants = {
  enter: (direction: number) => ({ x: direction >= 0 ? '100%' : '-100%' }),
  center: { x: '0%' },
  exit: (direction: number) => ({ x: direction >= 0 ? '-100%' : '100%' }),
};

/**
 * Image slider used in the project modal: arrow buttons, dot indicators,
 * a slide counter, keyboard arrow keys, and touch/mouse drag — with
 * directional framer-motion transitions (fade-only when reduced motion
 * is preferred). Slides are absolutely positioned so they sweep over
 * each other, and the container keeps the card banner height (170px).
 */
export default function ImageSlider({ images, alt }: ImageSliderProps) {
  const [[index, direction], setSlide] = useState<SlideState>([0, 1]);
  const reduceMotion = useReducedMotion();
  const count = images.length;

  const paginate = useCallback(
    (dir: number) => {
      if (count < 2) return;
      setSlide(([i]) => [(i + dir + count) % count, dir]);
    },
    [count],
  );

  const goTo = useCallback(
    (target: number) => {
      if (count < 2 || target === index) return;
      setSlide([target, target > index ? 1 : -1]);
    },
    [count, index],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') paginate(1);
      if (event.key === 'ArrowLeft') paginate(-1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [paginate]);

  return (
    <div
      className="relative h-[170px] shrink-0 overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${alt} gallery`}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          alt={`${alt} — image ${index + 1} of ${count}`}
          className="absolute inset-0 h-full w-full select-none object-cover"
          draggable={false}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.2, 0.7, 0.2, 1] }}
          drag={reduceMotion ? false : 'x'}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -70) paginate(1);
            else if (info.offset.x > 70) paginate(-1);
          }}
        />
      </AnimatePresence>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <FiChevronRight size={18} />
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index}
                className={`h-[7px] rounded-full transition-all duration-200 ${
                  i === index ? 'w-5 bg-[var(--cyan)]' : 'w-[7px] bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          <span className="absolute bottom-2.5 right-3 z-10 rounded-full bg-black/35 px-2.5 py-1 font-mono text-[11px] text-white/90 backdrop-blur-sm">
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
        </>
      )}
    </div>
  );
}