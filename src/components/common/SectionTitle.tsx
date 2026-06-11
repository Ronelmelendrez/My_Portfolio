import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      className={`mb-12 ${centered ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && <p className="text-grayText dark:text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionTitle;