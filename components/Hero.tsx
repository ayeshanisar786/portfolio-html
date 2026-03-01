'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#8b5cf6]/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

          {/* Left - Illustration (45% width) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 order-2 md:order-1 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-sm">
              <motion.div
                className="relative w-full aspect-[3/4]"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/images/hero/hero-portrait.jpeg"
                  alt="Noor Tahir"
                  fill
                  className="object-contain drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 40px rgba(139, 92, 246, 0.3))',
                  }}
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Text Content (55% width) */}
          <div className="md:col-span-7 order-1 md:order-2 text-center md:text-left">

            {/* Hello text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm md:text-base text-white/50 uppercase tracking-[0.2em] mb-2"
            >
              Hello, I'm
            </motion.p>

            {/* Name - Large script font */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-3 gradient-text"
              style={{ fontFamily: 'var(--font-script)' }}
            >
              Noor Tahir
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light tracking-wide mb-4"
            >
              Graphic Designer & 3D Animator
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base md:text-lg text-white/60 leading-relaxed mb-6 max-w-[500px] mx-auto md:mx-0"
            >
              I'm determined and professional, taking other people's visions and making them even better.
              Experienced working with clients to identify needs and present solutions.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center md:justify-start"
            >
              <a
                href="#work"
                className="inline-block px-8 py-3 border-2 border-[#8b5cf6] text-[#8b5cf6] font-semibold rounded hover:bg-[#8b5cf6] hover:text-white transition-all duration-300"
              >
                View My Work
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator - at bottom */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex flex-col items-center gap-2 text-white/30">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
