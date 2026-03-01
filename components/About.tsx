'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  'Visual Identity', 'Logofolio', 'Branding', 'Typography',
  'Print Media Design', 'Illustration', 'UI/UX Design',
  'Social Media Design', 'Animation'
];

const experiences = [
  {
    title: 'Graphic Designer',
    company: 'Intagleo Systems',
    location: 'Pakistan',
    period: 'Sep 2022 – Present'
  },
  {
    title: 'Amazon A+ Content Designer | Brand Identity & Social Media Graphics Specialist',
    company: 'Nsawa Enterprises',
    location: 'Remote - USA',
    period: 'Aug 2021 - Present'
  },
  {
    title: 'Graphic Designer',
    company: 'SKINFUDGE',
    location: 'Pakistan',
    period: 'May 2020 – Aug 2022'
  }
];

const education = [
  {
    degree: 'Bachelor's in Graphic Design',
    school: 'Institute of Visual Arts & Design, LCWU',
    period: '2019 - 2023'
  },
  {
    degree: 'Animation',
    school: 'National College of Arts',
    period: '2023'
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Left column */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-8 gradient-text font-serif italic"
            >
              About Me
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/70 leading-relaxed mb-8"
            >
              I'm a determined and professional 3D Animator & Graphic Designer. I take other people's
              visions and make them even better. Experienced working with clients to identify needs
              and present solutions, able to adapt to changing circumstances and needs.
            </motion.p>

            {/* Skills */}
            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-white">Skilled In</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80 hover:bg-[#8b5cf6]/20 hover:border-[#8b5cf6]/50 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column */}
          <div>
            {/* Experience */}
            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#8b5cf6]"></span>
                Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="relative pl-6 border-l-2 border-white/10 hover:border-[#8b5cf6]/50 transition-colors duration-300"
                  >
                    <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-[#8b5cf6]"></div>
                    <p className="text-sm text-[#8b5cf6] mb-1">{exp.period}</p>
                    <h4 className="text-lg font-semibold text-white mb-1">{exp.title}</h4>
                    <p className="text-white/60">{exp.company} ({exp.location})</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#8b5cf6]"></span>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="relative pl-6 border-l-2 border-white/10 hover:border-[#8b5cf6]/50 transition-colors duration-300"
                  >
                    <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-[#8b5cf6]"></div>
                    <p className="text-sm text-[#8b5cf6] mb-1">{edu.period}</p>
                    <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                    <p className="text-white/60">{edu.school}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
