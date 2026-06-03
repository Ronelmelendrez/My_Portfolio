import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { testimonials } from "../../data/testimonials";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20">
      <Container>
        <SectionTitle title="Client Testimonials" subtitle="What people say about my work" />

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-navy-light rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <FaQuoteLeft className="text-4xl text-electric/30 mb-6" />
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {testimonials[current].feedback}
              </p>

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
                  <p className="text-grayText">
                    {testimonials[current].role} at {testimonials[current].company}
                  </p>
                </div>
              </div>

              <div className="flex gap-1">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white dark:bg-navy-light p-3 rounded-full shadow-lg hover:bg-electric hover:text-white transition-colors"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white dark:bg-navy-light p-3 rounded-full shadow-lg hover:bg-electric hover:text-white transition-colors"
          >
            <FaChevronRight />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;