import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  SiReact,
  SiVuedotjs,
  SiHtml5,
  SiTailwindcss,
  SiOpenjdk,
  SiSpringboot,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiMariadb,
  SiDocker,
  SiGit,
  SiLinux,
  SiGithubactions,
} from 'react-icons/si'
import { HiShieldCheck } from 'react-icons/hi'
import './Craft.css'

const TECH_CATEGORIES = [
  {
    name: 'Frontend',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Vue.js', icon: SiVuedotjs, color: '#42B883' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    name: 'Backend & APIs',
    items: [
      { name: 'Java', icon: SiOpenjdk, color: '#F89820' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    ],
  },
  {
    name: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MariaDB', icon: SiMariadb, color: '#003545' },
    ],
  },
  {
    name: 'DevSecOps & Cybersecurity',
    items: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'CI/CD', icon: SiGithubactions, color: '#2088D9' },
      { name: 'Cybersecurity', icon: HiShieldCheck, color: '#00CED1' },
    ],
  },
]

const Craft = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="craft" className="craft" ref={sectionRef}>
      <div className="craft__content">
        <motion.div className="craft__header" style={{ y }}>
          <motion.div
            className="craft__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="craft__eyebrow-line" />
            <span className="craft__eyebrow-text">ACT IV</span>
            <span className="craft__eyebrow-line" />
          </motion.div>
          <motion.h2
            className="craft__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Tech Stack
          </motion.h2>
        </motion.div>

        <div className="craft__categories">
          {TECH_CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={category.name}
              className="craft__category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="craft__category-name">{category.name}</h3>
              <div className="craft__techs">
                {category.items.map((tech, techIndex) => {
                  const Icon = tech.icon
                  return (
                    <motion.div
                      key={tech.name}
                      className="craft__tech"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIndex * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{ '--tech-color': tech.color }}
                    >
                      <Icon className="craft__tech-icon" size={16} />
                      <span className="craft__tech-name">{tech.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Craft
