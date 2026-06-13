import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { testimonials } from "../../data/testimonials";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

// ------------------------------------------------------------
// Single Tooltip Trigger Component
// ------------------------------------------------------------
interface TestimonialTooltipProps {
  testimonial: typeof testimonials[0];
  index: number;
  activeId: number | null;
  setActiveId: (id: number | null) => void;
}

const TestimonialTooltip: React.FC<TestimonialTooltipProps> = ({
  testimonial,
  index,
  activeId,
  setActiveId,
}) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const isActive = activeId === index;

  // Adjust tooltip position to stay within viewport
  useEffect(() => {
    if (isActive && tooltipRef.current && triggerRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const overflowRight = tooltipRect.right - viewportWidth;
      const overflowLeft = tooltipRect.left;

      if (overflowRight > 0) {
        tooltipRef.current.style.left = `-${overflowRight + 8}px`;
        tooltipRef.current.style.right = "auto";
      } else if (overflowLeft < 0) {
        tooltipRef.current.style.right = `${overflowLeft - 8}px`;
        tooltipRef.current.style.left = "auto";
      } else {
        tooltipRef.current.style.left = "50%";
        tooltipRef.current.style.transform = "translateX(-50%)";
        tooltipRef.current.style.right = "auto";
      }
    }
  }, [isActive]);

  const handleMouseEnter = () => setActiveId(index);
  const handleMouseLeave = () => setActiveId(null);
  const handleFocus = () => setActiveId(index);
  const handleBlur = (e: React.FocusEvent) => {
    if (!tooltipRef.current?.contains(e.relatedTarget as Node)) {
      setActiveId(null);
    }
  };

  return (
    <div
      className="relative inline-flex justify-center align-middle"
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={triggerRef}
        className={`
          h-12 w-12 md:h-14 md:w-14 rounded-2xl
          transition-all duration-200 ease-[cubic-bezier(0.5,0.85,0.25,1.8)]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric
          ${isActive ? "rotate-0 scale-110" : "rotate-6 hover:rotate-0"}
        `}
        onMouseEnter={handleMouseEnter}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-labelledby={`testimonial-${index}`}
      >
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full rounded-2xl object-cover shadow-lg"
        />
      </button>

      <AnimatePresence>
        {isActive && (
          <div
            ref={tooltipRef}
            id={`testimonial-${index}`}
            role="tooltip"
            className="absolute top-full pt-4 z-50 w-80 md:w-96"
            style={{ left: "50%", transform: "translateX(-50%)" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative bg-gray-800 rounded-2xl shadow-2xl p-5 text-left"
            >
              {/* Tooltip arrow */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 bg-gray-800" />

              <FaQuoteLeft className="text-electric/40 text-2xl mb-3" />

              <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-4">
                {testimonial.feedback}
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mt-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-sm" />
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ------------------------------------------------------------
// Main Testimonials Component
// ------------------------------------------------------------
const Testimonials: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="font-mono py-20 bg-slate-50 dark:bg-transparent">
      <Container>
        <SectionTitle
          title="Client Testimonials"
          subtitle="What people say about my work"
        />

        <div className="max-w-3xl mx-auto text-center">
          {/* Introductory text with embedded avatars */}
          <div className="text-lg md:text-xl text-slate-700 dark:text-gray-300 leading-relaxed">
            <span>Don't just take my word for it – </span>
            <span className="inline-flex items-center gap-2 mx-1 align-middle">
              {testimonials.map((t, idx) => (
                <TestimonialTooltip
                  key={t.id || idx}
                  testimonial={t}
                  index={idx}
                  activeId={activeId}
                  setActiveId={setActiveId}
                />
              ))}
            </span>
            <span> have shared their experience working with me.</span>
          </div>

          {/* Optional hint */}
          <p className="text-sm text-slate-500 dark:text-gray-500 mt-8">
            Hover or focus on any avatar to read the testimonial
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;