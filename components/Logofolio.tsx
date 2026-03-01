'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useState } from 'react';

const logos = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: `/images/logos/logo-${String(i + 1).padStart(2, '0')}.jpeg`,
  alt: `Logo ${i + 1}`,
}));

export default function Logofolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="logofolio" className="py-20 px-4 md:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text font-serif italic text-center">
            Logofolio
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto text-center">
            A collection of logo designs across various industries and styles
          </p>
        </motion.div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative aspect-square group cursor-hover"
            >
              {/* Background card */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/20 to-[#a78bfa]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Image */}
                <div className="relative w-full h-full p-8 flex items-center justify-center">
                  <motion.div
                    className="relative w-full h-full"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                </div>

                {/* Number badge */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#8b5cf6]/80 backdrop-blur-sm flex items-center justify-center text-white text-xs font-semibold opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(logo.id).padStart(2, '0')}
                </motion.div>
              </motion.div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
