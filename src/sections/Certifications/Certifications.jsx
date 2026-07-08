import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SiCisco } from 'react-icons/si'
import './Certifications.css'

const CERTIFICATIONS = [
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    date: 'Dic. 2025',
    skills: ['Ciberseguridad', 'Gestión de amenazas', 'Vulnerabilidades'],
    url: 'https://www.credly.com/badges/412e5360-bb75-48bf-8a8b-cf770a2e6f80',
  },
  {
    name: 'Endpoint Security',
    issuer: 'Cisco',
    date: 'Dic. 2025',
    skills: ['Seguridad de punto final'],
    url: 'https://www.credly.com/badges/bb393cbb-bb3d-44f2-b071-3ca274c840b9',
  },
  {
    name: 'Network Defense',
    issuer: 'Cisco',
    date: 'Ene. 2026',
    skills: ['Defensa de Redes'],
    url: 'https://www.credly.com/badges/5e4dcc05-b11d-4670-ba1a-b8611941c187',
  },
  {
    name: 'Cyber Threat Management',
    issuer: 'Cisco',
    date: 'Ene. 2026',
    skills: ['Análisis de amenazas', 'Seguridad de puntos finales', 'Detección de amenazas'],
    url: 'https://www.credly.com/badges/47b43e13-a6ff-4c34-b23d-1a9f11a27f49',
  },
]

const Certifications = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="certifications" className="certs" ref={sectionRef}>
      <div className="certs__content">
        <motion.div className="certs__header" style={{ y }}>
          <motion.div
            className="certs__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="certs__eyebrow-line" />
            <span className="certs__eyebrow-text">ACT VI</span>
            <span className="certs__eyebrow-line" />
          </motion.div>
          <motion.h2
            className="certs__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Certifications
          </motion.h2>
        </motion.div>

        <div className="certs__grid">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="certs__card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 8 }}
            >
              <div className="certs__card-icon">
                <SiCisco size={24} />
              </div>
              <div className="certs__card-body">
                <div className="certs__card-top">
                  <h3 className="certs__card-name">{cert.name}</h3>
                  <span className="certs__card-date">{cert.date}</span>
                </div>
                <p className="certs__card-issuer">{cert.issuer}</p>
                <div className="certs__card-skills">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="certs__skill">{skill}</span>
                  ))}
                </div>
              </div>
              <span className="certs__card-link">
                Ver certificado <span className="certs__card-arrow">→</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
