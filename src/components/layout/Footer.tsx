// src/components/layout/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SocialLinks from "../common/SocialLinks";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-mono bg-white dark:bg-navy-light border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold gradient-text">Ronel Melendrez</h3>
            <p className="text-grayText mt-2">Full Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-6"
          >
            <Link to="/" className="text-grayText hover:text-electric transition-colors">Home</Link>
            <Link to="/projects" className="text-grayText hover:text-electric transition-colors">Projects</Link>
            <Link to="/contact" className="text-grayText hover:text-electric transition-colors">Contact</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-grayText"
        >
          <p>&copy; {currentYear} Ronel Melendrez. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;