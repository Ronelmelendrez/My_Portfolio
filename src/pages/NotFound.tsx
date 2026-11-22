import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import usePageTitle from '../hooks/usePageTitle';
import Container from '../components/common/Container';
import { Button } from '@/components/ui/button';

const NotFound: React.FC = () => {
  const { pathname } = useLocation();
  usePageTitle('Page Not Found');

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
            className="grad-text text-[clamp(72px,16vw,140px)] font-bold leading-none"
          >
            404
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
                <span className="editor-tab">terminal</span>
              </div>
              <div className="p-6 text-[13.5px] leading-relaxed">
                <p>
                  <span className="text-success">➜</span>{' '}
                  <span className="text-cyan">portfolio</span>{' '}
                  <span className="text-dim">navigate {pathname}</span>
                </p>
                <p className="mt-2 text-amber">error: route not found (404)</p>
                <p className="mt-2 text-dim">
                  The page you're looking for doesn't exist or has moved.
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

export default NotFound;
