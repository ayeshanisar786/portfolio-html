'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0a0a0a', paddingTop: '80px' }}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Speech Bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-20 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 z-10"
                style={{
                  background: '#8b5cf6',
                  padding: '16px 32px',
                  borderRadius: '30px',
                  boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)',
                }}
              >
                <p
                  style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: 'white',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  Heya!
                </p>
                {/* Speech bubble tail */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50px',
                    width: '0',
                    height: '0',
                    borderLeft: '15px solid transparent',
                    borderRight: '15px solid transparent',
                    borderTop: '15px solid #8b5cf6',
                  }}
                />
              </motion.div>

              {/* Portrait Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
                style={{ width: '400px', height: '500px', maxWidth: '100%' }}
              >
                <Image
                  src="/images/hero/hero-portrait.jpeg"
                  alt="Noor Tahir - Graphic Designer"
                  fill
                  className="object-contain"
                  style={{
                    filter: 'brightness(1.05) contrast(1.05) saturate(1.1)',
                    mixBlendMode: 'normal',
                  }}
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            {/* Introduction Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '1.8',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '16px',
                }}
              >
                I'm <span style={{ fontWeight: 'bold', color: '#a78bfa' }}>Noor</span>, determined and professional 3D Animator & a Graphic Designer. I took other people's vision and made it even better.
              </p>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                Experienced working with clients to identify needs and present solutions, able to adapt to changing circumstances and needs.
              </p>
            </motion.div>

            {/* Social Links - Icon + URL style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-4"
            >
              {/* Email */}
              <a
                href="mailto:ntfarrt@gmail.com"
                className="flex items-center gap-4 group transition-all duration-300"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                <div
                  className="flex items-center justify-center transition-all duration-300"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: '#1a1a1a',
                    borderRadius: '50%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#8b5cf6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#1a1a1a';
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z"/>
                  </svg>
                </div>
                <span style={{ fontSize: '15px' }}>ntfarrt@gmail.com</span>
              </a>

              {/* Behance */}
              <a
                href="https://www.behance.net/noortahir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group transition-all duration-300"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                <div
                  className="flex items-center justify-center transition-all duration-300"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: '#1a1a1a',
                    borderRadius: '50%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#8b5cf6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#1a1a1a';
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                  </svg>
                </div>
                <span style={{ fontSize: '15px' }}>behance.net/noortahir</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/noortahir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group transition-all duration-300"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                <div
                  className="flex items-center justify-center transition-all duration-300"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: '#1a1a1a',
                    borderRadius: '50%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#8b5cf6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#1a1a1a';
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span style={{ fontSize: '15px' }}>instagram.com/noortahir</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/noor-tahir-9124a8225/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group transition-all duration-300"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                <div
                  className="flex items-center justify-center transition-all duration-300"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: '#1a1a1a',
                    borderRadius: '50%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#8b5cf6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#1a1a1a';
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <span style={{ fontSize: '15px' }}>linkedin.com/in/noor-tahir-9124a8225/</span>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@noortahir8333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group transition-all duration-300"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                <div
                  className="flex items-center justify-center transition-all duration-300"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: '#1a1a1a',
                    borderRadius: '50%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#8b5cf6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#1a1a1a';
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </div>
                <span style={{ fontSize: '15px' }}>youtube.com/@noortahir8333</span>
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-light">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg
              className="w-5 h-5 text-white/30"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
