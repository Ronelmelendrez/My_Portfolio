import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-electric to-cyan text-white hover:shadow-lg hover:shadow-electric/30 hover:scale-105",
    secondary:
      "bg-navy-light text-white hover:bg-electric/80 hover:scale-105",
    outline:
      "border-2 border-electric text-electric hover:bg-electric hover:text-white hover:scale-105",
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;