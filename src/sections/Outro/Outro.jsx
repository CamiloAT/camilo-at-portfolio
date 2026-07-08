import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import './Outro.css'

const Outro = () => {
  return (
    <footer className="outro">
      <motion.div
        className="outro__quote"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8 }}
      >
        <blockquote className="outro__quote-box">
          <p className="outro__quote-text">
            "Al final todo estará bien, y si no está bien, es porque aún no es el final."
          </p>
          <footer className="outro__quote-attr">Mi filosofía de vida</footer>
        </blockquote>
      </motion.div>

      <div className="outro__footer-line" />

      <div className="outro__footer">
        <div className="outro__footer-left">
          <motion.h2
            className="outro__name"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            transition={{ duration: 0.8 }}
          >
            Camilo Andrés Arias Tenjo
          </motion.h2>

          <motion.p
            className="outro__pseudonym"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px 50px 0px' }}
            transition={{ duration: 0.8 }}
          >
            Camilo AT
          </motion.p>
        </div>

        <div className="outro__footer-right">
          <motion.div
            className="outro__socials"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="https://www.linkedin.com/in/camilo-andres-arias-tenjo-34762836b/"
              target="_blank"
              rel="noopener noreferrer"
              className="outro__social"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/CamiloAT"
              target="_blank"
              rel="noopener noreferrer"
              className="outro__social"
            >
              <SiGithub size={18} />
            </a>
          </motion.div>

          <p className="outro__copy">© 2026 · Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}

export default Outro
