import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Container;