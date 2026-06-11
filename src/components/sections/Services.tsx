import React from "react";
import { motion } from "framer-motion";
import {
  IconDeviceDesktop,
  IconDeviceMobile,
  IconPalette,
  IconApi,
  IconFolderCode,
  IconShieldLock,
} from "@tabler/icons-react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { services } from "../../data/services";

// Map icon name strings to actual React components
const iconMap: Record<string, React.ElementType> = {
  IconDeviceDesktop,
  IconDeviceMobile,
  IconPalette,
  IconApi,
  IconFolderCode,
  IconShieldLock,
};

const Services: React.FC = () => {
  return (
    <section className="font-monopy-20 bg-gray-50 dark:bg-navy/30">
      <Container>
        <SectionTitle
          title="Services I Offer"
          subtitle="End-to-end engineering across the full product lifecycle."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group h-full"
              >
                <div
                  className="
                    relative h-full overflow-hidden rounded-2xl
                    border border-electric/10
                    bg-white/80 dark:bg-navy-light/80
                    p-8 backdrop-blur-xl
                    shadow-lg
                    transition-all duration-300
                    hover:bg-electric/5
                    hover:border-electric/20
                    hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]
                  "
                >
                  <div
                    className="
                      absolute inset-0 opacity-0
                      bg-gradient-to-br
                      from-electric/5
                      via-transparent
                      to-cyan/5
                      transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="
                        mb-5 flex h-14 w-14 items-center justify-center
                        rounded-xl
                        border border-electric/20
                        bg-electric/10
                        transition-all duration-300
                        group-hover:bg-gradient-to-br
                        group-hover:from-electric
                        group-hover:to-cyan
                        group-hover:text-white
                        group-hover:shadow-lg
                        group-hover:shadow-electric/30
                      "
                    >
                      {IconComponent && <IconComponent size={28} stroke={1.5} />}
                    </motion.div>

                    <h3
                      className="
                        mb-4 text-xl font-bold
                        transition-colors duration-300
                        group-hover:text-electric
                      "
                    >
                      {service.title}
                    </h3>

                    <p className="leading-relaxed text-grayText dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>

                  <div
                    className="
                      absolute -right-10 -top-10
                      h-32 w-32 rounded-full
                      bg-electric/5 blur-3xl
                      opacity-0
                      transition-opacity duration-500
                      group-hover:opacity-100
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Services;