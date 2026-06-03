import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-navy/30">
      <Container>
        <SectionTitle title="Get In Touch" subtitle="Let's work together" />

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
            <p className="text-grayText mb-8">
              I'm currently available for freelance work or full-time opportunities. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-electric/10 rounded-full flex items-center justify-center text-electric">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-grayText">San Francisco, CA</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-electric/10 rounded-full flex items-center justify-center text-electric">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-grayText">john.doe@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-electric/10 rounded-full flex items-center justify-center text-electric">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-grayText">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-navy-light border border-gray-300 dark:border-gray-700 focus:border-electric focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-navy-light border border-gray-300 dark:border-gray-700 focus:border-electric focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-navy-light border border-gray-300 dark:border-gray-700 focus:border-electric focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-navy-light border border-gray-300 dark:border-gray-700 focus:border-electric focus:outline-none transition-colors"
              ></textarea>
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Send Message
            </Button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;