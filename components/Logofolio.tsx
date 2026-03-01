'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

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

  return (
    <section
      id="logofolio"
      className="py-20 px-6 md:px-12"
      style={{ paddingTop: '80px', backgroundColor: '#0a0a0a' }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
          style={{ marginBottom: '48px' }}
        >
          <h2
            className="font-bold text-center"
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '64px',
              lineHeight: '1.2',
              background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '16px',
            }}
          >
            Logofolio
          </h2>
          <p
            className="text-center mx-auto"
            style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.5)',
              maxWidth: '600px',
            }}
          >
            A collection of logo designs across various industries and styles
          </p>
        </motion.div>

        {/* Logo grid - 4 cols desktop, 2 tablet, 1 mobile */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '24px' }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group"
              style={{
                aspectRatio: '1/1',
                width: '100%',
              }}
            >
              {/* Card container */}
              <div
                className="relative w-full h-full transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                }}
              >
                {/* Image container - centered */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ padding: '32px' }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      loading="lazy"
                      style={{
                        filter: 'brightness(1.1)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
