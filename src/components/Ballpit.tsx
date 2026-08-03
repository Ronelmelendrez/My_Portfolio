import { useEffect, useRef, useState } from 'react';
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

const ICON_POOL: Array<{ Icon: IconType; color: string }> = [
  { Icon: SiReact, color: '#61DAFB' },
  { Icon: SiTypescript, color: '#3178C6' },
  { Icon: SiJavascript, color: '#F7DF1E' },
  { Icon: SiNodedotjs, color: '#5FA04E' },
  { Icon: SiPython, color: '#3776AB' },
  { Icon: SiTailwindcss, color: '#06B6D4' },
  { Icon: SiDocker, color: '#2496ED' },
  { Icon: SiPostgresql, color: '#4169E1' },
  { Icon: SiMongodb, color: '#47A248' },
  { Icon: SiGraphql, color: '#E10098' },
  { Icon: SiGit, color: '#F05032' },
  { Icon: SiFigma, color: '#F24E1E' },
  { Icon: SiNextdotjs, color: '#FFFFFF' },
  { Icon: SiRedis, color: '#FF4438' },
  { Icon: SiExpress, color: '#FFFFFF' },
  { Icon: SiVite, color: '#646CFF' },
  { Icon: SiHtml5, color: '#E34F26' },
  { Icon: SiCss, color: '#663399' },
  { Icon: SiPrisma, color: '#2D3748' },
  { Icon: FaAws, color: '#FF9900' },
];

interface Ball {
  Icon: IconType;
  color: string;
  size: number;
  r: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  el?: HTMLDivElement | null;
}

interface BallpitProps {
  className?: string;
  count?: number;
  gravity?: number;
  friction?: number;
  wallBounce?: number;
  followCursor?: boolean;
}

const Ballpit = ({
  className = '',
  count = 100,
  gravity = 0.01,
  friction = 0.9975,
  wallBounce = 0.95,
  followCursor = true,
}: BallpitProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [balls] = useState<Ball[]>(() =>
    Array.from({ length: count }, (_, i) => {
      const { Icon, color } = ICON_POOL[i % ICON_POOL.length];
      const size = 26 + Math.round(Math.random() * 26);
      return {
        Icon,
        color,
        size,
        r: size * 0.45,
        x: 0,
        y: 0,
        vx: (Math.random() - 0.5) * 80,
        vy: (Math.random() - 0.5) * 80,
      };
    })
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const control = { x: -9999, y: -9999, active: false };
    const controlRadius = 40;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        control.x = x;
        control.y = y;
        control.active = true;
      } else {
        control.active = false;
      }
    };

    const cw = container.clientWidth;
    const ch = container.clientHeight;
    balls.forEach(b => {
      b.x = Math.random() * cw;
      b.y = Math.random() * ch;
    });

    if (followCursor) {
      window.addEventListener('pointermove', onPointerMove);
    }

    const gravityPx = gravity * 400;

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const W = container.clientWidth;
      const H = container.clientHeight;

      for (const b of balls) {
        b.vy += gravityPx * dt;
        b.vx *= Math.pow(friction, dt * 60);
        b.vy *= Math.pow(friction, dt * 60);
        b.x += b.vx * dt;
        b.y += b.vy * dt;

        if (b.x - b.r < 0) {
          b.x = b.r;
          b.vx = -b.vx * wallBounce;
        }
        if (b.x + b.r > W) {
          b.x = W - b.r;
          b.vx = -b.vx * wallBounce;
        }
        if (b.y + b.r > H) {
          b.y = H - b.r;
          b.vy = -b.vy * wallBounce;
        }
        if (b.y - b.r < 0) {
          b.y = b.r;
          b.vy = -b.vy * wallBounce;
        }
      }

      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const a = balls[i];
          const c = balls[j];
          const dx = c.x - a.x;
          const dy = c.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = a.r + c.r;
          if (dist > 0 && dist < minDist) {
            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = (minDist - dist) / 2;
            a.x -= nx * overlap;
            a.y -= ny * overlap;
            c.x += nx * overlap;
            c.y += ny * overlap;
            const relVx = a.vx - c.vx;
            const relVy = a.vy - c.vy;
            const vn = relVx * nx + relVy * ny;
            if (vn > 0) {
              const imp = vn * 0.5;
              a.vx -= imp * nx;
              a.vy -= imp * ny;
              c.vx += imp * nx;
              c.vy += imp * ny;
            }
          }
        }
      }

      if (followCursor && control.active) {
        for (const b of balls) {
          const dx = b.x - control.x;
          const dy = b.y - control.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = b.r + controlRadius;
          if (dist > 0 && dist < minDist) {
            const nx = dx / dist;
            const ny = dy / dist;
            const overlap = minDist - dist;
            b.x += nx * overlap;
            b.y += ny * overlap;
            b.vx += nx * overlap * 4;
            b.vy += ny * overlap * 4;
          }
        }
      }

      for (const b of balls) {
        if (b.el) {
          b.el.style.transform = `translate(${b.x - b.r}px, ${b.y - b.r}px)`;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      if (followCursor) {
        window.removeEventListener('pointermove', onPointerMove);
      }
    };
  }, [balls, count, gravity, friction, wallBounce, followCursor]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {balls.map((b, i) => (
        <div
          key={i}
          ref={el => {
            b.el = el;
          }}
          className="absolute"
          style={{ width: b.size, height: b.size, color: b.color }}
        >
          <b.Icon size={b.size} />
        </div>
      ))}
    </div>
  );
};

export default Ballpit;
