import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import bytedentalLogo from '../../assets/projects/byte-dental/bytedental-logo.png'
import kiruLogo from '../../assets/projects/kiru/kiru-logo.png'
import './Work.css'

const PROJECTS = [
  {
    id: 1,
    title: 'ByteDental',
    category: 'Fullstack · FastAPI · React',
    year: '2025',
    description: 'Sistema de gestión de clínicas dentales con historiales clínicos SOAP, control de roles y auditoría automatizada.',
    fullDescription: 'ByteDental es una plataforma full-stack diseñada para la clínica Oral Center White, orientada a la gestión integral de consultorios dentales. El sistema permite administrar registros de pacientes, crear historiales clínicos en formato SOAP, dar seguimiento a tratamientos, controlar el acceso por roles (Administrador, Doctor, Asistente, Auditor) y cuenta con un sistema de auditoría automatizada mediante triggers de PostgreSQL. Incluye autenticación con Google OAuth, recuperación de contraseña por OTP, generación de reportes en PDF/JSON, dashboard de estadísticas y notificaciones por email.\n\nEste fue mi primer proyecto desarrollado desde cero: desde la identificación de aspectos a mejorar en la clínica, la elicitación de requisitos con el cliente, el diseño de la arquitectura, el desarrollo iterativo bajo una metodología ágil con roles intercambiables (frontend, backend, QA, DevOps y líder de proyecto) ejecutado a lo largo de 4 sprints, hasta la entrega formal y sustentación del sistema completo, incluyendo toda la documentación, pruebas y validaciones correspondientes.',
    logo: bytedentalLogo,
    accent: '#60a5fa',
    tags: ['FastAPI', 'React', 'PostgreSQL', 'Docker', 'Firebase'],
    collaborators: [
      { name: 'Ronald Samir Molinares Sanabria', github: 'https://github.com/Ronaldmolinares' },
      { name: 'Karen Juliana Pena Suarez', github: 'https://github.com/KarenSuarez4' },
      { name: 'Maria Fernanda Sogamoso Rodriguez', github: 'https://github.com/maria-sogamoso' },
      { name: 'Lunna Karina Sosa Espitia', github: 'https://github.com/lunna21' },
    ],
    github: 'https://github.com/CamiloAT/byte-dental',
    demo: '',
    images: [
      '/projects/byte-dental/app-photo-1.webp',
      '/projects/byte-dental/app-photo-2.webp',
      '/projects/byte-dental/app-photo-3.webp',
      '/projects/byte-dental/app-photo-4.webp',
      '/projects/byte-dental/app-photo-5.webp',
      '/projects/byte-dental/app-photo-6.webp',
      '/projects/byte-dental/app-photo-7.webp',
      '/projects/byte-dental/app-photo-8.webp',
      '/projects/byte-dental/app-photo-9.webp',
      '/projects/byte-dental/app-photo-10.webp',
      '/projects/byte-dental/app-photo-11.webp',
    ],
  },
  {
    id: 2,
    title: 'Kiru',
    category: 'Fullstack · FastAPI · React',
    year: '2026',
    description: 'Sistema para convertir letra manuscrita en un archivo .ttf utilizable.',
    fullDescription: 'Kiru procesa una imagen de tu escritura a mano, segmenta cada carácter, lo vectoriza y genera un archivo .ttf listo para usar en cualquier aplicación. Incluye un editor de glifos con herramientas de dibujar, borrar, mover y escalar, un motor de vectorización que convierte bitmaps en contornos suavizados, y un sandbox en tiempo real para previsualizar la fuente generada con textos de ejemplo, formatos y colores personalizables.\n\nUn proyecto personal que surgió de una idea repentina y que terminó convirtiéndose en uno de los proyectos que más cariño le tengo. Nació de la curiosidad por combinar procesamiento de imágenes con tipografía digital, y fue evolucionando hasta convertirse en una aplicación completa con arquitectura desacoplada: un backend en FastAPI con OpenCV y fontTools, y un frontend en React con Vite, Zustand y Framer Motion.',
    logo: kiruLogo,
    accent: '#a855f7',
    tags: ['FastAPI', 'React', 'OpenCV', 'fontTools', 'Zustand'],
    collaborators: [],
    github: 'https://github.com/CamiloAT/kiru',
    demo: '',
    images: [
      '/projects/kiru/app-photo-1.webp',
      '/projects/kiru/app-photo-2.webp',
      '/projects/kiru/app-photo-3.webp',
      '/projects/kiru/app-photo-4.webp',
      '/projects/kiru/app-photo-5.webp',
    ],
  },
  {
    id: 3,
    title: 'Verde Urbano',
    category: 'Frontend · UX/UI',
    year: '2025',
    description: 'Aplicación web para rastreo de huella de carbono personal.',
    fullDescription: 'Aplicación web para rastreo de huella de carbono personal. Visualización de datos ambientales con gráficas interactivas y gamificación. Los usuarios pueden registrar sus actividades diarias, comparar con la comunidad y ganar logros por acciones sostenibles.',
    accent: '#6b8a5e',
    tags: ['React', 'D3.js', 'Tailwind', 'Supabase'],
    github: 'https://github.com/camiloat/verde-urbano',
    demo: '',
    images: ['/placeholder-1.svg', '/placeholder-2.svg', '/placeholder-3.svg'],
  },
  {
    id: 4,
    title: 'Flux Studio',
    category: 'Creative Dev · WebGL',
    year: '2024',
    description: 'Herramienta de visualización musical con audio-reactive graphics.',
    fullDescription: 'Herramienta de visualización musical con audio-reactive graphics. Experiencia inmersiva que sincroniza sonido y movimiento. Utiliza WebGL para renderizar geometrías 3D que responden al audio en tiempo real, creando una experiencia visual única para cada canción.',
    accent: '#7c5cbf',
    tags: ['Three.js', 'Web Audio API', 'GLSL', 'Vite'],
    github: 'https://github.com/camiloat/flux-studio',
    demo: '',
    images: ['/placeholder-1.svg', '/placeholder-2.svg', '/placeholder-3.svg'],
  },
  {
    id: 5,
    title: 'Portafolio CAAT',
    category: 'Frontend · React · Framer Motion',
    year: '2026',
    description: 'Portafolio personal cinematográfico con animaciones scroll-driven.',
    fullDescription: 'Sitio web portafolio personal con estética cinematográfica. Construido con React y Framer Motion para animaciones scroll-driven, preloader con countdown, partículas flotantes, dock de navegación y diseño responsive. Paleta oscura con acentos ámbar.',
    accent: '#c4956a',
    tags: ['React', 'Framer Motion', 'Vite', 'CSS'],
    github: 'https://github.com/CamiloAT/caat-artifacts',
    demo: '',
    images: ['/placeholder-1.svg', '/placeholder-2.svg', '/placeholder-3.svg'],
  },
]

const Work = () => {
  const sectionRef = useRef(null)
  const [activeProject, setActiveProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [carouselIndices, setCarouselIndices] = useState({})
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Auto-play carousels
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndices(prev => {
        const newIndices = { ...prev }
        PROJECTS.forEach((project) => {
          const currentIndex = newIndices[project.id] || 0
          newIndices[project.id] = (currentIndex + 1) % project.images.length
        })
        return newIndices
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const headerY = useTransform(scrollYProgress, [0, 0.3], [40, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = ''
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
  }

  return (
    <section id="work" className="work" ref={sectionRef}>
      <div className="work__content">
        <motion.div className="work__header" style={{ y: headerY, opacity: headerOpacity }}>
          <motion.div
            className="work__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="work__eyebrow-line" />
            <span className="work__eyebrow-text">ACT III</span>
            <span className="work__eyebrow-line" />
          </motion.div>
          <motion.h2
            className="work__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            My Projects
          </motion.h2>
        </motion.div>

        <div className="work__projects">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              className={`work__project ${activeProject === project.id ? 'work__project--active' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              style={{ '--project-accent': project.accent }}
            >
              <div className="work__project-left">
                <div className="work__project-index">
                  <span className="work__project-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="work__project-content">
                  <div className="work__project-meta">
                    <span className="work__project-category">{project.category}</span>
                    <span className="work__project-year">{project.year}</span>
                  </div>

                  <h3 className="work__project-title">{project.title}</h3>

                  <p className="work__project-desc">{project.description}</p>

                  <div className="work__project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="work__project-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="work__project-actions">
                    <motion.button
                      className="work__project-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openModal(project)}
                    >
                      <span className="work__project-btn-text">More Info</span>
                    </motion.button>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work__project-btn work__project-btn--icon"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work__project-btn work__project-btn--icon"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              <div className="work__project-right">
                <div className="work__project-carousel">
                  <div className="work__project-carousel-inner">
                    {project.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`work__project-slide ${imgIndex === (carouselIndices[project.id] || 0) ? 'work__project-slide--active' : ''}`}
                      >
                        <img
                          src={img}
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          className="work__project-image"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                        <div className="work__project-image-placeholder" style={{ display: 'none' }}>
                          <span className="work__project-image-text">{project.title}</span>
                          <span className="work__project-image-number">Screenshot {imgIndex + 1}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="work__project-carousel-dots">
                    {project.images.map((_, dotIndex) => (
                      <span
                        key={dotIndex}
                        className={`work__project-dot ${dotIndex === (carouselIndices[project.id] || 0) ? 'work__project-dot--active' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="work__project-line" />

              <AnimatePresence>
                {activeProject === project.id && (
                  <motion.div
                    className="work__project-glow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="work__modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="work__modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="work__modal-close" onClick={closeModal}>×</button>

              <div className="work__modal-header">
                <span className="work__modal-category">{selectedProject.category}</span>
                <div className="work__modal-title-row">
                  <h3 className="work__modal-title">{selectedProject.title}</h3>
                  {selectedProject.logo && <img src={selectedProject.logo} alt="" className="work__modal-logo" />}
                </div>
                <span className="work__modal-year">{selectedProject.year}</span>
              </div>

              <div className="work__modal-body">
                <div className="work__modal-info">
                  <div className="work__modal-desc">
                    {selectedProject.fullDescription.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="work__modal-carousel">
                  <button className="work__modal-arrow work__modal-arrow--left" onClick={prevImage}>‹</button>
                  <div className="work__modal-image">
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                      className="work__modal-img"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div className="work__modal-image-placeholder" style={{ display: 'none' }}>
                      <span>Screenshot {currentImageIndex + 1}</span>
                    </div>
                  </div>
                  <button className="work__modal-arrow work__modal-arrow--right" onClick={nextImage}>›</button>
                  <div className="work__modal-dots">
                    {selectedProject.images.map((_, dotIndex) => (
                      <span
                        key={dotIndex}
                        className={`work__modal-dot ${dotIndex === currentImageIndex ? 'work__modal-dot--active' : ''}`}
                        onClick={() => setCurrentImageIndex(dotIndex)}
                      />
                    ))}
                  </div>
                </div>

                {selectedProject.collaborators && selectedProject.collaborators.length > 0 && (
                  <div className="work__modal-collaborators">
                    <span className="work__modal-collaborators-title">Compañeros de trabajo</span>
                    <div className="work__modal-collaborators-list">
                      {selectedProject.collaborators.map((collab) => (
                        <a
                          key={collab.github}
                          href={collab.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work__modal-collaborator"
                        >
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          {collab.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div className="work__modal-tags">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="work__modal-tag">{tag}</span>
                  ))}
                </div>

                <div className="work__modal-actions">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="work__modal-btn">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                  {selectedProject.demo && (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="work__modal-btn work__modal-btn--primary">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                      </a>
                    )}
                  </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Work
