import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { experiences } from "../../data/experience";
import { FaBriefcase } from "react-icons/fa";

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-gray-50 dark:bg-navy/30" ref={ref}>
      <Container>
        <SectionTitle title="Work Experience" subtitle="My professional journey" />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric to-cyan"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2, type: "spring" }}
                className="absolute left-4 top-0 w-8 h-8 bg-electric rounded-full flex items-center justify-center shadow-lg"
              >
                <FaBriefcase className="text-white" />
              </motion.div>

              <div className="bg-white dark:bg-navy-light rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                <p className="text-electric mb-2">{exp.company}</p>
                <p className="text-sm text-grayText mb-4">{exp.duration}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-electric mt-1">▹</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;