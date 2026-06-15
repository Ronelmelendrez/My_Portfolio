// src/components/layout/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../common/SocialLinks";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white">
      <div className="md:w-2/3 w-full px-4 mx-auto flex flex-col py-16">
        {/* Top CTA section */}
        <div className="w-full text-5xl md:text-7xl font-bold">
          <h1 className="w-full md:w-2/3 leading-tight">
            How can we help you. get in touch
          </h1>
        </div>

        <div className="flex mt-8 flex-col md:flex-row md:justify-between items-start">
          <p className="w-full md:w-2/3 text-gray-400 text-base">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <Link
              to="/contact"
              className="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center hover:bg-red-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom links and social */}
        <div className="flex flex-col mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mb-12">
            {/* Logo / Brand */}
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold tracking-tight">Ronel Melendrez</h3>
              <p className="text-gray-400 text-sm mt-1">Full Stack Developer</p>
            </div>

            {/* Navigation links */}
            <div className="flex flex-row space-x-8 order-1 md:order-2">
              <Link to="/about" className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase transition-colors">About</Link>
              <Link to="/services" className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase transition-colors">Services</Link>
              <Link to="/why-us" className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase transition-colors">Why us</Link>
              <Link to="/contact" className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase transition-colors">Contact</Link>
            </div>

            {/* Social Links Component (GitHub, LinkedIn, Twitter, Email) */}
            <div className="order-3">
              <SocialLinks />
            </div>
          </div>

          <hr className="border-gray-600" />

          <p className="w-full text-center my-12 text-gray-600">
            Copyright © {currentYear} Ronel Melendrez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;