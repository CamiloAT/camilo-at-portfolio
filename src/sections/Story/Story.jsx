import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Story.css'

const Story = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [30, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="story" className="story" ref={sectionRef}>
      <div className="story__bg">
        <motion.div className="story__bg-gradient" style={{ y: y1 }} />
      </div>

      <div className="story__content">
        <motion.div className="story__header" style={{ opacity }}>
          <motion.div
            className="story__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="story__eyebrow-line" />
            <span className="story__eyebrow-text">ACT II</span>
            <span className="story__eyebrow-line" />
          </motion.div>
          <motion.h2
            className="story__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            About Me
          </motion.h2>
        </motion.div>

        <div className="story__grid">
          <motion.div className="story__text-col" style={{ y: y2 }}>
            <motion.p
              className="story__lead"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Hablemos un poco sobre mí.
            </motion.p>

            <motion.p
              className="story__body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Mi nombre es Camilo Andrés Arias Tenjo, Ingeniero de Sistemas y Computación de la Universidad Pedagógica y Tecnológica de Colombia (UPTC). Me considero un apasionado por la tecnología, siempre en busca de nuevos retos y oportunidades para seguir aprendiendo y creciendo profesionalmente. 
            </motion.p>

            <motion.p
              className="story__body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Desde muy joven siempre me he considerado una persona bastante curiosa, que siempre lleva sus ambiciones al límite, y siempre intenta completar sus objetivos de la mejor forma posible sin importar los contratiempos que se presenten en el camino.
            </motion.p>
          </motion.div>

          <div className="story__visual-col">
            <motion.div
              className="story__visual"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="story__visual-frame">
                <div className="story__visual-inner">
                  <span className="story__visual-placeholder" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="story__stats"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="story__stat">
                <span className="story__stat-number">4+</span>
                <span className="story__stat-label">Años de carrera</span>
              </div>
              <div className="story__stat">
                <span className="story__stat-number">∞</span>
                <span className="story__stat-label">Curiosidad</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
