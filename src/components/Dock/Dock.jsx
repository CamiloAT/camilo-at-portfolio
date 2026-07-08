import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Dock.css'

const NAV_ITEMS = [
  { id: 'hero', label: 'I', title: 'Intro', offset: 80 },
  { id: 'story', label: 'II', title: 'About Me', offset: -100 },
  { id: 'work', label: 'III', title: 'My Projects', offset: 10 },
  { id: 'craft', label: 'IV', title: 'Tech Stack', offset: -30 },
]

const Dock = () => {
  const [hovered, setHovered] = useState(null)

  const scrollTo = (id, offset) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <nav className="dock" aria-label="Main navigation">
      <div className="dock__container">
        {NAV_ITEMS.map((item, index) => (
          <motion.button
            key={item.id}
            className="dock__item"
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => scrollTo(item.id, item.offset)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.5 + index * 0.1 }}
            whileHover={{ y: -4 }}
            aria-label={`Navigate to ${item.title}`}
          >
            <span className="dock__label">{item.label}</span>
            <AnimatePresence>
              {hovered === item.id && (
                <motion.span
                  className="dock__tooltip"
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>
    </nav>
  )
}

export default Dock
