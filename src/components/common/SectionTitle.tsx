import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ eyebrow, title, subtitle, centered, center = false }) => {
  const isCentered = centered ?? center;
  return (
    <motion.div
      className={`mb-12 ${isCentered ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {eyebrow && (
        <span className="mb-3 inline-block font-mono text-[12px] tracking-[0.2em] uppercase text-graytext">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
        <span className="grad-text">{title}</span>
      </h2>
      {subtitle && <p className="text-graytext dark:text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionTitle;