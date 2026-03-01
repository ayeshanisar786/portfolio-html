'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  'Visual Identity', 'Logofolio', 'Branding', 'Typography',
  'Print Media Design', 'Illustration', 'UI/UX Design',
  'Social Media Design', 'Animation'
];

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/noor-tahir',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: 'Behance',
    url: 'https://www.behance.net/noortahir',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/noortahir.designs',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/noortahir',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-7.21.842-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:noortahir.designs@gmail.com',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/923001234567',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    ),
  },
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
    degree: 'Bachelor in Graphic Design',
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

  return (
    <section
      id="about"
      className="py-24 px-12 md:py-24 md:px-12 lg:py-24 lg:px-12"
      style={{ backgroundColor: '#0a0a0a' }}
      ref={ref}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            style={{ paddingLeft: '48px' }}
          >
            {/* About Me Heading */}
            <h2
              className="font-bold mb-6"
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '64px',
                lineHeight: '1.2',
                background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '24px'
              }}
            >
              About Me
            </h2>

            {/* Description */}
            <p
              style={{
                maxWidth: '500px',
                lineHeight: '1.8',
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 0.6)',
                marginBottom: '32px'
              }}
            >
              I'm a determined and professional 3D Animator & Graphic Designer. I take other people's
              visions and make them even better. Experienced working with clients to identify needs
              and present solutions, able to adapt to changing circumstances and needs.
            </p>

            {/* Social Links Row */}
            <div
              className="flex flex-wrap items-center"
              style={{ gap: '10px', marginBottom: '32px' }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.name !== 'Email' && social.name !== 'WhatsApp' ? '_blank' : undefined}
                  rel={social.name !== 'Email' && social.name !== 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                  className="flex items-center transition-all duration-300"
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    gap: '6px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '14px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#8b5cf6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                >
                  {social.icon}
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Skilled In Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: '20px',
                  marginBottom: '16px'
                }}
              >
                Skilled In
              </h3>
              <div className="flex flex-wrap" style={{ gap: '8px' }}>
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.03 }}
                    className="transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '20px',
                      padding: '6px 16px',
                      fontSize: '14px',
                      color: 'rgba(255, 255, 255, 0.8)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#8b5cf6';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Vertical Timeline Line - runs from top to bottom */}
            <div
              className="absolute left-0 top-8"
              style={{
                width: '2px',
                height: 'calc(100% - 64px)',
                background: 'rgba(139, 92, 246, 0.2)',
              }}
            />

            {/* Experience Section */}
            <div className="mb-12">
              <h3
                className="flex items-center mb-8"
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: 'white',
                  gap: '12px'
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#8b5cf6',
                    display: 'inline-block'
                  }}
                />
                Experience
              </h3>

              <div style={{ position: 'relative' }}>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    style={{
                      position: 'relative',
                      paddingLeft: '32px',
                      marginBottom: '24px'
                    }}
                  >
                    {/* Timeline Dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-4px',
                        top: '6px',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#8b5cf6',
                      }}
                    />

                    {/* Content */}
                    <p style={{ fontSize: '12px', color: '#8b5cf6', marginBottom: '4px' }}>
                      {exp.period}
                    </p>
                    <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>
                      {exp.title}
                    </h4>
                    <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.5)' }}>
                      {exp.company} ({exp.location})
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h3
                className="flex items-center mb-8"
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: 'white',
                  gap: '12px'
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#8b5cf6',
                    display: 'inline-block'
                  }}
                />
                Education
              </h3>

              <div style={{ position: 'relative' }}>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    style={{
                      position: 'relative',
                      paddingLeft: '32px',
                      marginBottom: '24px'
                    }}
                  >
                    {/* Timeline Dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-4px',
                        top: '6px',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#8b5cf6',
                      }}
                    />

                    {/* Content */}
                    <p style={{ fontSize: '12px', color: '#8b5cf6', marginBottom: '4px' }}>
                      {edu.period}
                    </p>
                    <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>
                      {edu.degree}
                    </h4>
                    <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.5)' }}>
                      {edu.school}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
