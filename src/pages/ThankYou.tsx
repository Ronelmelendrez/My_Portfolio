import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import usePageMeta from '../hooks/usePageMeta';
import Container from '../components/common/Container';
import { Button } from '@/components/ui/button';

const ThankYou: React.FC = () => {
  usePageMeta(
    'Thank You',
    'Your message has been sent. Ronel Melendrez will get back to you soon.',
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="flex min-h-[78vh] items-center py-24 font-mono">
        <Container className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grad-text text-[clamp(48px,11vw,96px)] font-bold leading-none"
          >
            Thank you!
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-10 max-w-lg text-left"
          >
            <div className="editor">
              <div className="editor-bar">
                <div className="h-[11px] w-[11px] rounded-full" style={{ background: '#ff5f56' }} />
                <div className="h-[11px] w-[11px] rounded-full" style={{ background: '#ffbd2e' }} />
                <div className="h-[11px] w-[11px] rounded-full" style={{ background: '#27c93f' }} />
                <span className="editor-tab">message.log</span>
              </div>
              <div className="p-6 text-[13.5px] leading-relaxed">
                <p>
                  <span className="text-success">➜</span>{' '}
                  <span className="text-cyan">portfolio</span>{' '}
                  <span className="text-dim">send contact-form</span>
                </p>
                <p className="mt-2 text-success">
                  ✓ 200 message delivered successfully
                </p>
                <p className="mt-2 text-dim">
                  Thanks for reaching out — I read every message and reply within 24 hours.
                </p>
                <p className="mt-2 text-dim">
                  In the meantime, feel free to browse my work.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <Button asChild>
              <Link to="/">← Back to Home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/projects">View Projects</Link>
            </Button>
          </motion.div>
        </Container>
      </section>
    </motion.div>
  );
};

export default ThankYou;
