import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from '../common/Reveal';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="py-[120px]">
      <Container>
        <Reveal>
          <SectionTitle eyebrow="TESTIMONIALS" title="Don't take my word for it." center />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-[680px] text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-4 text-[15px] tracking-widest text-amber">★★★★★</div>
                <p className="font-display text-[19px] font-medium leading-relaxed">
                  "{current.message}"
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <Avatar>
                    <AvatarFallback>{current.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="text-[14px] font-semibold">{current.name}</div>
                    <div className="text-dim text-[12.5px]">{current.role} at {current.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-7 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`testi-dot ${i === index ? 'active' : ''}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}