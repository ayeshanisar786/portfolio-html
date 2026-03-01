'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useRef } from 'react';

const brandingProjects = [
  {
    id: 1,
    name: 'Intagleo Systems',
    industry: 'Information Technology & Services',
    description: 'For over 20 years, Intagleo has been a trusted partner for businesses worldwide, empowering them to achieve their digital transformation goals through innovative software solutions. Headquartered in Slough, UK, with hubs in the US, UAE, and Pakistan, we bring a global perspective and understanding to every project.',
    images: Array.from({ length: 6 }, (_, i) => `/images/branding/intagleo-0${i + 1}.jpeg`),
    color: '#1e40af',
  },
  {
    id: 2,
    name: 'BP Spacer',
    industry: 'Food Brand',
    description: 'BP Spacer is a proudly Pakistani food brand, crafting delicious low-fat toffees that bring joy to every bite. With a perfect blend of flavor and health, BP Spacer is dedicated to offering "A Healthy Treat for Every Sweet Tooth." Trusted by families across the country, we believe in making life sweeter — the wholesome way.',
    images: Array.from({ length: 3 }, (_, i) => `/images/branding/bp-spacer-0${i + 1}.jpeg`),
    color: '#7c2d12',
  },
  {
    id: 3,
    name: 'LimeLight',
    industry: 'Clothing Brand',
    description: 'I crafted a conceptual bridal campaign for "Limelight", inspired by the brand\'s signature fusion of elegance and tradition. Celebrating modern brides with timeless grace, delicate embellishments, and cultural richness. It\'s a tribute to the brand\'s potential to shine in the ceremonial space with sophistication and heart.',
    images: Array.from({ length: 9 }, (_, i) => `/images/branding/limelight-0${i + 1}.jpeg`),
    color: '#064e3b',
  },
];

function ProjectCard({ project, index }: { project: typeof brandingProjects[0]; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32 ${
        index % 2 === 1 ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={index % 2 === 1 ? 'lg:order-2' : ''}
      >
        <motion.div
          className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-white/60">{project.industry}</span>
        </motion.div>

        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white font-serif italic">
          {project.name}
        </h3>

        <p className="text-lg text-white/70 leading-relaxed mb-8">
          {project.description}
        </p>

        <motion.div
          className="flex gap-2 mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="text-sm text-white/50">Services:</span>
          <div className="flex flex-wrap gap-2">
            {['Brand Identity', 'Visual Design', 'Marketing'].map((service) => (
              <span
                key={service}
                className="text-sm text-white/70 px-3 py-1 bg-white/5 rounded-full"
              >
                {service}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Image gallery */}
      <motion.div
        ref={cardRef}
        className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {project.images.map((img, imgIndex) => (
            <motion.div
              key={imgIndex}
              className="relative aspect-square rounded-xl overflow-hidden bg-white/5 cursor-hover group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.5 + imgIndex * 0.05 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
            >
              <Image
                src={img}
                alt={`${project.name} ${imgIndex + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Branding() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="branding" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text font-serif italic">
            Branding
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Creating comprehensive brand identities that tell compelling stories
          </p>
        </motion.div>

        {/* Projects */}
        {brandingProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
