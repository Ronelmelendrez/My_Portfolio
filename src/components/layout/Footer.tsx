import { Link } from "react-router-dom";
import SocialLinks from "../common/SocialLinks";

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-card text-card-foreground mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top CTA section */}
        <div className="w-full text-5xl md:text-7xl font-bold font-display">
          <h1 className="w-full md:w-2/3 leading-tight">
            How can we help you. get in touch
          </h1>
        </div>

        <div className="flex mt-8 flex-col md:flex-row md:justify-between items-start">
          <p className="w-full md:w-2/3 text-dim text-base">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <Link
              to="/contact"
              className="btn btn-primary justify-center text-center rounded-lg px-10 py-3 flex items-center"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom links and social */}
        <div className="flex flex-col mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mb-12">
            {/* Brand */}
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold font-display tracking-tight">Ronel Melendrez</h3>
              <p className="text-dim text-sm font-mono mt-1">Full Stack Developer</p>
            </div>

            {/* Navigation links */}
            <div className="flex flex-row space-x-8 order-1 md:order-2">
              {NAV_ITEMS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="nav-link uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="order-3">
              <SocialLinks />
            </div>
          </div>

          <hr className="border-border" />

          <p className="w-full text-center mt-12 text-dim font-mono text-sm">
            Copyright © {currentYear} Ronel Melendrez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
