import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import usePageMeta from '../hooks/usePageMeta';
import Container from '../components/common/Container';

const SECTIONS: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: 'collect',
    title: 'Information I collect',
    body: (
      <p>
        This portfolio site does not require an account and does not collect personal data
        automatically. The only information I receive is what you choose to send through the
        contact form: your <b className="font-medium text-foreground">name</b>,{' '}
        <b className="font-medium text-foreground">email address</b>,{' '}
        <b className="font-medium text-foreground">subject</b>, and{' '}
        <b className="font-medium text-foreground">message</b>.
      </p>
    ),
  },
  {
    id: 'use',
    title: 'How your information is used',
    body: (
      <p>
        Any information you send is used for one purpose only: to reply to your inquiry and
        discuss a potential project. I do not sell, trade, or share your details with third
        parties for marketing, and I do not add you to any mailing list.
      </p>
    ),
  },
  {
    id: 'storage',
    title: 'Local storage',
    body: (
      <p>
        The site stores a single item in your browser's local storage — your{' '}
        <b className="font-medium text-foreground">theme preference</b> (dark or light). It stays
        on your device, is not sent to any server, and can be cleared at any time through your
        browser settings.
      </p>
    ),
  },
  {
    id: 'third-parties',
    title: 'Third-party services',
    body: (
      <div className="space-y-3">
        <p>This site is hosted on Vercel and loads fonts from Google Fonts. Both process
          standard technical data (such as IP address) as part of delivering the site, under
          their own privacy policies:</p>
        <ul className="list-disc space-y-1.5 pl-5 text-dim">
          <li>
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer" className="text-cyan hover:underline">
              Vercel Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-cyan hover:underline">
              Google Privacy Policy
            </a>
          </li>
        </ul>
        <p>
          There are no advertising trackers, analytics scripts, or cookies on this site — only
          the local storage theme preference described above.
        </p>
      </div>
    ),
  },
  {
    id: 'retention',
    title: 'Data retention',
    body: (
      <p>
        Messages I receive are kept only as long as needed to continue the conversation or for
        record-keeping about a project. You can request deletion of your correspondence at any
        time using the contact details below.
      </p>
    ),
  },
  {
    id: 'rights',
    title: 'Your rights',
    body: <p>You may ask what data I hold about you, request a correction, or ask me to delete it. I respond to all such requests promptly.</p>,
  },
  {
    id: 'children',
    title: "Children's privacy",
    body: (
      <p>
        This site is directed at a general audience and does not knowingly collect personal
        information from children under 13. If you believe a child has provided me information,
        contact me and I will remove it.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        I may update this page from time to time. The “last updated” date below always reflects
        the latest version.
      </p>
    ),
  },
];

const PrivacyPolicy: React.FC = () => {
  usePageMeta(
    'Privacy Policy',
    'How this portfolio site handles your data: what the contact form collects, local storage usage, and the third-party services involved.',
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="font-mono pt-20 pb-10 bg-gradient-to-b from-electric/5 to-transparent">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 grad-text">Privacy Policy</h1>
            <p className="text-graytext text-lg max-w-2xl mx-auto">
              Plain English, no legal theatre — here's exactly what happens to your data.
            </p>
            <p className="mt-4 font-mono text-[12.5px] text-dim">
              last updated: November 25, 2026
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <nav
              aria-label="Privacy policy sections"
              className="manifest mb-10 p-5 sm:p-6"
            >
              <div className="manifest-bar mb-4 -mx-5 -mt-5 sm:-mx-6 sm:-mt-6">
                <span className="text-dim">
                  <span className="text-success">✓</span> table of contents
                </span>
                <span className="text-dim">privacy.md</span>
              </div>
              <ol className="grid grid-cols-1 gap-x-8 gap-y-2 font-mono text-[13px] sm:grid-cols-2">
                {SECTIONS.map((section, i) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-dim transition-colors hover:text-cyan"
                    >
                      <span className="text-cyan">{String(i + 1).padStart(2, '0')}</span>{' '}
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="space-y-10">
              {SECTIONS.map((section, i) => (
                <motion.article
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="scroll-mt-24"
                >
                  <h2 className="font-display mb-3 flex items-baseline gap-3 text-xl font-semibold tracking-tight">
                    <span className="font-mono text-[14px] text-cyan">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {section.title}
                  </h2>
                  <div className="text-dim text-[15px] leading-relaxed">
                    {section.body}
                  </div>
                </motion.article>
              ))}

              <motion.article
                id="contact-policy"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-24"
              >
                <h2 className="font-display mb-3 flex items-baseline gap-3 text-xl font-semibold tracking-tight">
                  <span className="font-mono text-[14px] text-cyan">09</span>
                  Contact
                </h2>
                <div className="text-dim text-[15px] leading-relaxed">
                  <p>
                    Questions about this policy or your data? Reach me through the{' '}
                    <Link to="/contact" className="text-cyan hover:underline">
                      contact page
                    </Link>{' '}
                    or at{' '}
                    <a
                      href="mailto:ronelmelendrez01@gmail.com"
                      className="text-cyan hover:underline"
                    >
                      ronelmelendrez01@gmail.com
                    </a>
                    .
                  </p>
                </div>
              </motion.article>
            </div>

            <div className="mt-12">
              <Link
                to="/"
                className="font-mono text-[13px] text-dim transition-colors hover:text-cyan"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicy;
