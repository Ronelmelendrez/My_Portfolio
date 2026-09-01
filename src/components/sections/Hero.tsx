import { motion } from 'framer-motion';
import Ballpit from '../Ballpit';
import Container from '../common/Container';
import { Button } from '@/components/ui/button';
import Counter from '../common/Counter';
import TypedCode from './TypedCode';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-[5px]">
      <div className="absolute inset-0 opacity-45">
        <Ballpit
          count={100}
          gravity={0.01}
          friction={0.9975}
          wallBounce={0.95}
          followCursor
        />
      </div>
      <Container className="relative z-10 grid grid-cols-1 items-center gap-14 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1 className="mb-5 font-display text-[clamp(38px,5.4vw,60px)] font-bold leading-[1.08] tracking-tight">
            Building software
            <br />
            that ships <span className="grad-text">without drama.</span>
          </h1>

          <p className="text-dim mb-8 max-w-[480px] text-[17px] leading-relaxed">
            I'm Ronel Melendrez, a full-stack developer who turns ambiguous product ideas into fast,
            reliable systems — from the database schema to the pixel on screen.
          </p>

          <div className="mb-11 flex flex-wrap gap-3.5">
            <Button asChild>
              <a href="#">↓ Download Resume</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex gap-9">
            <div>
              <Counter target={2} className="font-display block text-2xl" />
              <span className="text-dim text-[12.5px]">Years Experience</span>
            </div>
            <div>
              <Counter target={8} className="font-display block text-2xl" />
              <span className="text-dim text-[12.5px]">Projects Shipped</span>
            </div>
            <div>
              <Counter target={5} className="font-display block text-2xl" />
              <span className="text-dim text-[12.5px]">Happy Clients</span>
            </div>
          </div>
        </div>

        <motion.div
          className="editor"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="editor-bar">
            <div className="h-[11px] w-[11px] rounded-full" style={{ background: '#ff5f56' }} />
            <div className="h-[11px] w-[11px] rounded-full" style={{ background: '#ffbd2e' }} />
            <div className="h-[11px] w-[11px] rounded-full" style={{ background: '#27c93f' }} />
            <span className="editor-tab">developer.ts</span>
          </div>
          <TypedCode />
        </motion.div>
      </Container>
    </section>
  );
}