import React from "react";
import { motion } from "framer-motion";
import ContactSection from "../components/sections/Contact";
import Container from "../components/common/Container";

const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="font-mono pt-20 pb-10 bg-gradient-to-b from-electric/5 to-transparent">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 grad-text">Contact Me</h1>
            <p className="text-graytext text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your ideas to life
            </p>
          </div>
        </Container>
      </section>
      <ContactSection />
    </motion.div>
  );
};

export default ContactPage;