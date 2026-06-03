import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const About: React.FC = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  const stats = [
    { value: 5, label: "Years Experience", suffix: "+" },
    { value: 20, label: "Projects Completed", suffix: "+" },
    { value: 15, label: "Happy Clients", suffix: "+" },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-navy/30">
      <Container>
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Passionate Developer Creating Digital Solutions</h3>
            <p className="text-grayText dark:text-gray-400 mb-4 leading-relaxed">
              I'm a full-stack software engineer with over 5 years of experience building robust web applications. 
              My journey in tech started with a curiosity for how things work, which evolved into a career focused on 
              creating elegant solutions to complex problems.
            </p>
            <p className="text-grayText dark:text-gray-400 mb-6 leading-relaxed">
              I specialize in modern JavaScript frameworks and cloud technologies, always staying up-to-date with 
              industry trends. When I'm not coding, I enjoy contributing to open-source projects and mentoring aspiring developers.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-electric rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Bachelor's in CS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-cyan rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">AWS Certified</span>
              </div>
            </div>
          </motion.div>

          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="text-center p-6 rounded-xl bg-white dark:bg-navy-light shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className="text-4xl font-bold gradient-text mb-2"
                >
                  {stat.value}
                  {stat.suffix}
                </motion.div>
                <p className="text-grayText dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;