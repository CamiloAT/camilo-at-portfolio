import { useState, useRef, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin, FaTimes } from 'react-icons/fa'
import './Outro.css'

const CLICK_THRESHOLD = 15
const CLICK_WINDOW = 4000

const Outro = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const clicksRef = useRef([])

  const handleFooterClick = useCallback(() => {
    const now = Date.now()
    clicksRef.current = clicksRef.current.filter(t => now - t < CLICK_WINDOW)
    clicksRef.current.push(now)

    if (clicksRef.current.length >= CLICK_THRESHOLD) {
      clicksRef.current = []
      window.getSelection()?.removeAllRanges()
      setShowEasterEgg(true)
    }
  }, [])

  useEffect(() => {
    if (showEasterEgg) {
      document.body.style.overflow = 'hidden'
      window.getSelection()?.removeAllRanges()
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [showEasterEgg])

  return (
    <>
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

      <div className="outro__footer" onClick={handleFooterClick}>
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

        <div className="outro__footer-center">
          <p className="outro__copy-detail">Todos los derechos reservados</p>
          <p className="outro__copy">© 2026</p>
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
        </div>
      </div>
    </footer>

      {createPortal(
        <AnimatePresence>
          {showEasterEgg && (
            <motion.div
              className="easter-egg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="easter-egg__card"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4, type: 'spring', damping: 20 }}
                onMouseDown={(e) => e.preventDefault()}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="easter-egg__close" onClick={() => setShowEasterEgg(false)}>
                  <FaTimes size={14} />
                </button>

                <span className="easter-egg__label">Dedicado a</span>

                <p className="easter-egg__text">
                  A la personita que estuvo atenta de escuchar y opinar con entusiasmo a lo largo de todo el proceso de creación de la pagina
                </p>

                <div className="easter-egg__heart">
                  <svg viewBox="-5 -5 110 105" className="easter-egg__heart-svg">
                    <path
                      d="M50 88 C25 65, 0 45, 0 28 C0 10, 14 0, 28 0 C38 0, 46 6, 50 14 C54 6, 62 0, 72 0 C86 0, 100 10, 100 28 C100 45, 75 65, 50 88Z"
                      fill="none"
                      stroke="#8B6F47"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>

                <p className="easter-egg__name">Brenda, mi noviecita hermosa, te quiero muchoooo</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}

export default Outro
