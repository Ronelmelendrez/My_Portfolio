import { motion, useReducedMotion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiFigma,
  SiNextdotjs,
  SiRedis,
  SiExpress,
  SiVite,
  SiHtml5,
  SiCss,
  SiPrisma,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const ICON_POOL: IconType[] = [
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiFigma,
  SiNextdotjs,
  SiRedis,
  SiExpress,
  SiVite,
  SiHtml5,
  SiCss,
  SiPrisma,
  FaAws,
];

// tiny seeded PRNG (mulberry32) so each section gets a stable, non-random-on-every-render layout
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface TechIconsBgProps {
  /** Any integer — pick a different one per section so each gets a distinct layout */
  seed: number;
  /** How many icons to scatter (default 7) */
  count?: number;
  /** Base opacity of each icon (default 0.1) */
  opacity?: number;
  className?: string;
}

export default function TechIconsBg({ seed, count = 7, opacity = 0.1, className = '' }: TechIconsBgProps) {
  const reduceMotion = useReducedMotion();
  const rand = mulberry32(seed);

  const icons = Array.from({ length: count }, () => {
    const Icon = ICON_POOL[Math.floor(rand() * ICON_POOL.length)];
    return {
      Icon,
      top: `${8 + rand() * 80}%`,
      left: `${4 + rand() * 90}%`,
      size: 20 + Math.round(rand() * 20),
      duration: 6 + rand() * 4,
      delay: rand() * 2,
      drift: 8 + Math.round(rand() * 10),
      rotate: rand() > 0.5 ? 5 : -5,
    };
  });

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {icons.map(({ Icon, top, left, size, duration, delay, drift, rotate }, i) => (
        <motion.div
          key={i}
          className="absolute text-dim"
          style={{ top, left, opacity }}
          animate={reduceMotion ? undefined : { y: [0, -drift, 0], rotate: [0, rotate, 0] }}
          transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon size={size} />
        </motion.div>
      ))}
    </div>
  );
}