import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  target: number;
  className?: string;
  suffix?: string;
}

export default function Counter({ target, className, suffix = '+' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const step = Math.max(1, Math.round(target / 40));
    let current = 0;
    const id = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(id);
      }
      setValue(current);
    }, 30);
    return () => clearInterval(id);
  }, [inView, target]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}