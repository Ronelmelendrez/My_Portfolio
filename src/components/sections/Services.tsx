import React from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { services } from "../../data/services";

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-navy/30">
      <Container>
        <SectionTitle title="Services I Offer" subtitle="What I can do for you" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative p-6 rounded-xl bg-white dark:bg-navy-light shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-electric/0 via-electric/5 to-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-5xl mb-4 inline-block"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-grayText dark:text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;