// src/components/layout/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../common/SocialLinks";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-mono w-full bg-gray-50 dark:bg-navy text-gray-900 dark:text-white border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top CTA section */}
        <div className="w-full text-5xl md:text-7xl font-bold">
          <h1 className="w-full md:w-2/3 leading-tight">
            How can we help you. get in touch
          </h1>
        </div>

        <div className="flex mt-8 flex-col md:flex-row md:justify-between items-start">
          <p className="w-full md:w-2/3 text-grayText text-base">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <Link
              to="/contact"
              className="bg-electric justify-center text-center rounded-lg shadow px-10 py-3 flex items-center hover:bg-electric-light transition-colors text-white"
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
              <h3 className="text-2xl font-bold tracking-tight">Ronel Melendrez</h3>
              <p className="text-grayText text-sm mt-1">Full Stack Developer</p>
            </div>

            {/* Navigation links */}
            <div className="flex flex-row space-x-8 order-1 md:order-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="cursor-pointer text-grayText hover:text-electric dark:hover:text-electric uppercase transition-colors"
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

          <hr className="border-gray-200 dark:border-white/10" />

          <p className="w-full text-center my-12 text-grayText">
            Copyright © {currentYear} Ronel Melendrez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
