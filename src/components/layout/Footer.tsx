import { Link } from "react-router-dom";
import SocialLinks from "../common/SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-border bg-card">
      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">
              Let's Build Something Amazing
            </p>

            <h2 className="mt-4 text-5xl md:text-6xl font-display font-bold tracking-tight">
              Ready to work{" "}
              <span className="grad-text">together?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-dim leading-relaxed">
              Whether you have an idea, a startup, or an existing product that
              needs improvement, I'd love to help turn your vision into reality.
            </p>

            <div className="mt-10">
              <Link
                to="#contact"
                className="btn btn-primary rounded-xl px-8 py-4"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-10 md:grid-cols-3 md:items-center">

            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="font-display text-xl font-bold">
                Ronel Melendrez
              </h3>

              <p className="mt-2 text-sm text-dim">
                Full Stack Developer
              </p>
            </div>

            {/* Social */}
            <div className="flex justify-center">
              <SocialLinks />
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="font-mono text-xs text-dim">
                © {currentYear} Ronel Melendrez
              </p>

              <p className="mt-1 text-xs text-dim">
                Crafted with React, TypeScript & Tailwind CSS
              </p>
            </div>

          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;