import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { skills } from "../../data/skills";

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-cyan/5 pointer-events-none"></div>
      <Container>
        <SectionTitle title="Skills & Technologies" subtitle="My technical expertise" />

        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-6 gradient-text">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group relative p-6 rounded-xl bg-white dark:bg-navy-light shadow-lg hover:shadow-electric/20 transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-electric/0 via-electric/5 to-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl">{skill.icon}</span>
                        <h4 className="text-xl font-semibold">{skill.name}</h4>
                      </div>
                      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.proficiency}%` } : {}}
                          transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05 }}
                          className="absolute h-full bg-gradient-to-r from-electric to-cyan rounded-full"
                        />
                      </div>
                      <p className="text-right text-sm text-grayText mt-2">{skill.proficiency}%</p>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Marquee */}
<motion.div
  initial={{ opacity: 0 }}
  animate={isInView ? { opacity: 1 } : {}}
  transition={{ delay: 0.8 }}
  className="mt-16 overflow-hidden"
>
  <div className="flex w-max gap-8 whitespace-nowrap animate-marquee">
    {[...Array(2)].map((_, ri) =>
      skills.map((skill) => (
        <span
          key={`${ri}-${skill.name}`}
          className="
            flex-shrink-0
            inline-flex
            items-center
            gap-2
            rounded-lg
            border border-slate-700/20
            bg-slate-800/60
            px-4 py-2
            text-sm
            font-mono
            text-slate-400
            backdrop-blur-sm
          "
        >
          <span className="text-xl">{skill.icon}</span>
          {skill.name}
        </span>
      ))
    )}
  </div>
</motion.div>
      </Container>
    </section>
  );
};

export default Skills;