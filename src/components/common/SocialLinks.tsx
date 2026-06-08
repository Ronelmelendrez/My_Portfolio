import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Ronelmelendrez", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/ronel-melendrez-a1a5022ba/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaEnvelope, href: "mailto:ronelmelendrez01@gmail.com", label: "Email" },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-electric dark:hover:text-electric transition-colors"
          whileHover={{ scale: 1.2, y: -3 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          aria-label={social.label}
        >
          <social.icon size={24} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;