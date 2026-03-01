'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const text = "Graphic Designer & 3D Animator";
  const words = text.split(' ');

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#8b5cf6]/10 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto px-6 text-center"
        style={{ opacity }}
      >
        {/* Animated greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          className="mb-6"
        >
          <span className="text-lg md:text-xl text-white/50 font-light">Hello, I'm</span>
        </motion.div>

        {/* Main heading with letter animation */}
        <div className="mb-8">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            <span className="gradient-text font-serif italic">Noor Tahir</span>
          </motion.h1>

          {/* Animated subtitle */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {words.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                className="text-xl md:text-3xl lg:text-4xl text-white/70 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.7 + wordIndex * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          I'm determined and professional, taking other people's visions and making them even better.
          Experienced working with clients to identify needs and present solutions.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <a
            href="#work"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-[#8b5cf6]/50 transform hover:scale-105 transition-all duration-300"
          >
            View My Work
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 4 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/30"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
