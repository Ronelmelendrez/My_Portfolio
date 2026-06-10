import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { experiences } from "../../data/experience";
import { FaBriefcase } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Experience: React.FC = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 bg-gray-50 dark:bg-navy/30"
    >
      <Container>
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey"
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric via-electric-light to-cyan" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : {}
              }
              transition={{
                delay: index * 0.2,
                duration: 0.5,
              }}
              className="group relative pb-12 pl-20 last:pb-0"
            >
              {/* Timeline Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={
                  isInView
                    ? {
                        scale: 1,
                      }
                    : {}
                }
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                }}
                className="
                  absolute left-4 top-1 z-20
                  flex h-8 w-8 items-center justify-center
                  rounded-full bg-electric
                  shadow-lg shadow-electric/30
                  transition-all duration-500
                  group-hover:scale-110
                  group-hover:bg-cyan
                  group-hover:shadow-cyan/40
                "
              >
                <FaBriefcase className="text-sm text-white" />
              </motion.div>

              {/* Experience Card */}
              <div
                className="
                  group/card relative overflow-hidden rounded-2xl
                  border border-white/10
                  bg-white dark:bg-navy-light
                  p-6 shadow-lg
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_50px_rgba(59,130,246,0.18)]

                  before:absolute before:right-0 before:top-0
                  before:h-10 before:w-10
                  before:rounded-bl-[40px]
                  before:bg-electric
                  before:transition-all before:duration-500
                  before:ease-out before:z-0
                  hover:before:scale-[35]
                "
              >
                {/* Arrow */}
                <FaArrowRightLong
                  className="
                    absolute right-4 top-4 z-20
                    text-sm text-white
                    transition-transform duration-500
                    group-hover/card:translate-x-1
                  "
                />

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className="
                      mb-1 text-xl font-bold
                      transition-colors duration-500
                      group-hover/card:text-white
                    "
                  >
                    {exp.position}
                  </h3>

                  <p
                    className="
                      mb-2 text-electric
                      transition-colors duration-500
                      group-hover/card:text-cyan-light
                    "
                  >
                    {exp.company}
                  </p>

                  <p
                    className="
                      mb-5 text-sm text-grayText
                      transition-colors duration-500
                      group-hover/card:text-white/80
                    "
                  >
                    {exp.duration}
                  </p>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={
                          isInView
                            ? {
                                opacity: 1,
                              }
                            : {}
                        }
                        transition={{
                          delay:
                            index * 0.2 +
                            i * 0.1,
                        }}
                        className="
                          flex items-start gap-3
                          text-gray-700 dark:text-gray-300
                          transition-colors duration-500
                          group-hover/card:text-white
                        "
                      >
                        <span
                          className="
                            mt-1 text-electric
                            transition-colors duration-500
                            group-hover/card:text-cyan-light
                          "
                        >
                          ▹
                        </span>

                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
