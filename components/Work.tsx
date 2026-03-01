'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useState } from 'react';

const workCategories = [
  {
    id: 'illustrations',
    title: 'Book Illustrations',
    projects: [
      {
        name: 'Recipe Book',
        description: 'How to Make Kashmiri Chai - a cozy recipe book for kids, stirs up joy and learning. A little chef brews magic as she drops tea leaves into a bubbling pot.',
        images: [
          '/images/illustrations/recipe-book-01.jpeg',
          '/images/illustrations/recipe-book-02.jpeg',
          '/images/illustrations/recipe-book-03.jpeg',
          '/images/illustrations/recipe-book-04.jpeg',
        ],
        industry: 'Educational and illustrated cookbook',
      },
      {
        name: 'Story Book',
        description: 'This Urdu poem book follows two adorable chicks as they wander through gardens and meadows, discovering new things with every step.',
        images: [
          '/images/illustrations/story-book-01.jpeg',
          '/images/illustrations/story-book-02.jpeg',
          '/images/illustrations/story-book-03.jpeg',
          '/images/illustrations/story-book-04.jpeg',
        ],
        industry: 'Educational children\'s book',
      },
    ],
  },
  {
    id: 'digital-art',
    title: 'Digital Art',
    projects: [
      {
        name: 'Chess King',
        description: 'The red tie symbolizes his limited movement. He can only advance one square at a time. However, this doesn\'t mean he\'s powerless; he can still make impactful moves.',
        images: [
          '/images/digital-art/chess-king-01.jpeg',
          '/images/digital-art/chess-king-02.jpeg',
        ],
        style: 'Conceptual Illustration',
      },
      {
        name: 'Ufone Offer',
        description: 'Energetic promotional digital art',
        images: ['/images/digital-art/ufone-01.jpeg'],
        style: 'Energetic Promotional',
      },
      {
        name: 'Radio Pakistan',
        description: 'Conceptual illustration for Radio Pakistan',
        images: ['/images/digital-art/radio-pakistan-01.jpeg'],
        style: 'Conceptual Illustration',
      },
      {
        name: 'Poverty',
        description: 'Powerful geometrical illustration on poverty',
        images: ['/images/digital-art/poverty-01.jpeg'],
        style: 'Geometrical Illustration',
      },
      {
        name: 'Fruit Garden',
        description: 'Vibrant geometrical illustration',
        images: ['/images/digital-art/fruit-garden-01.jpeg'],
        style: 'Geometrical Illustration',
      },
    ],
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    projects: [
      {
        name: 'Mobile & Web Interfaces',
        description: 'Clean and modern UI/UX designs for web and mobile applications',
        images: Array.from({ length: 17 }, (_, i) => `/images/ui-ux/ui-ux-${String(i + 1).padStart(2, '0')}.png`),
      },
    ],
  },
  {
    id: '3d-game',
    title: '3D & Game Design',
    projects: [
      {
        name: '3D Posters',
        description: 'Stunning 3D promotional posters with depth and character',
        images: [
          '/images/posters/poster-01.jpeg',
          '/images/posters/poster-02.jpeg',
          '/images/posters/poster-03.jpeg',
        ],
      },
      {
        name: 'Desi Runner Game',
        description: 'Game UI design for a culturally-inspired runner game',
        images: Array.from({ length: 5 }, (_, i) => `/images/game/game-${String(i + 1).padStart(2, '0')}.jpeg`),
      },
    ],
  },
];

export default function Work() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('illustrations');

  return (
    <section id="work" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text font-serif italic">
            More Work
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Exploring creativity across multiple disciplines
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {workCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#8b5cf6] border-[#8b5cf6] text-white'
                  : 'bg-white/5 border-white/10 text-white/60 hover:border-[#8b5cf6]/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects display */}
        {workCategories.map((category) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: selectedCategory === category.id ? 1 : 0,
              height: selectedCategory === category.id ? 'auto' : 0,
            }}
            transition={{ duration: 0.5 }}
            className={selectedCategory === category.id ? 'block' : 'hidden'}
          >
            <div className="space-y-24">
              {category.projects.map((project, projectIndex) => (
                <ProjectShowcase
                  key={projectIndex}
                  project={project}
                  index={projectIndex}
                  inView={inView && selectedCategory === category.id}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProjectShowcase({
  project,
  index,
  inView,
}: {
  project: any;
  index: number;
  inView: boolean;
}) {
  const [projectRef, projectInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={projectRef}
      initial={{ opacity: 0, y: 50 }}
      animate={projectInView && inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Project header */}
      <div className="max-w-3xl">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          {project.name}
        </h3>
        <p className="text-lg text-white/70 leading-relaxed mb-4">
          {project.description}
        </p>
        {project.industry && (
          <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/60">
            {project.industry}
          </span>
        )}
        {project.style && (
          <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/60">
            {project.style}
          </span>
        )}
      </div>

      {/* Image gallery */}
      <div className={`grid gap-6 ${
        project.images.length === 1 ? 'grid-cols-1 max-w-2xl' :
        project.images.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
        project.images.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
        project.images.length === 4 ? 'grid-cols-2 md:grid-cols-4' :
        'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      }`}>
        {project.images.map((img: string, imgIndex: number) => (
          <motion.div
            key={imgIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={projectInView && inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: imgIndex * 0.05 }}
            className="relative aspect-square rounded-xl overflow-hidden bg-white/5 cursor-hover group"
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={img}
              alt={`${project.name} ${imgIndex + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
