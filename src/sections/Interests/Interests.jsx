import { useRef, useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaMusic, FaCode, FaHeadphones, FaPlay, FaPause, FaGuitar, FaWalking, FaBroadcastTower, FaStepBackward, FaStepForward, FaTimes, FaBars } from 'react-icons/fa'
import './Interests.css'

const INTERESTS = [
  { name: 'Musica', icon: FaMusic, description: 'Lo que suena mientras programo' },
  { name: 'Tocar la guitarra', icon: FaGuitar, description: 'Mi otro pasatiempo' },
  { name: 'Caminar', icon: FaWalking, description: 'Mi forma de relajarme' },
  { name: 'Coding', icon: FaCode, description: 'Por diversion y curiosidad' },
]

const PLAYLIST = [
  { title: 'Ojitos Playa', artist: 'Nanpa Básico', youtubeId: 'WNj85EwKsAg' },
  { title: 'La Graciosa', artist: 'Quevedo', youtubeId: 'Kev3r6W4TPo' },
  { title: 'Own My Mind', artist: 'Maneskin', youtubeId: 'LRApJG5WdIg' },
  { title: 'El Hexxo', artist: 'Feid', youtubeId: 'hgSNktUvOuc' },
  { title: 'Amé', artist: 'Christian Nodal', youtubeId: '2JkU7obnr5A' },
  { title: 'Understand', artist: 'BoyWithUke', youtubeId: 'euD9Mr2M7Mw' },
  { title: 'Stolen Dance', artist: 'Milky Chance', youtubeId: 'JnYr3wlVF08' },
  { title: 'Guaya', artist: 'Lucho RK & Quevedo', youtubeId: 'OlV-SJEd_oo' },
  { title: 'Te vi en mis pesadillas', artist: 'Alvaro Diaz', youtubeId: 'LIBVl4uSmC4' },
  { title: 'Tus Vueltas', artist: 'Milo J', youtubeId: 'PmVejpfw_yU' },
]

const Equalizer = () => (
  <div className="equalizer">
    <span className="equalizer__bar" />
    <span className="equalizer__bar" />
    <span className="equalizer__bar" />
    <span className="equalizer__bar" />
  </div>
)

const Interests = () => {
  const sectionRef = useRef(null)
  const playerRef = useRef(null)
  const currentTrackRef = useRef(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [playerReady, setPlayerReady] = useState(false)
  const [isPlayerActive, setIsPlayerActive] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false)

  useEffect(() => {
    currentTrackRef.current = currentTrack
  }, [currentTrack])
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  useEffect(() => {
    let scriptTag = null
    let player = null

    const createPlayer = () => {
      if (!document.getElementById('yt-player-hidden')) return
      player = new window.YT.Player('yt-player-hidden', {
        height: '1',
        width: '1',
        videoId: PLAYLIST[0].youtubeId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: () => {
            playerRef.current = player
            setPlayerReady(true)
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              const next = (currentTrackRef.current + 1) % PLAYLIST.length
              setCurrentTrack(next)
              playerRef.current.loadVideoById(PLAYLIST[next].youtubeId)
              setIsPlaying(true)
            }
          },
        },
      })
    }

    if (window.YT && window.YT.Player) {
      createPlayer()
    } else {
      scriptTag = document.createElement('script')
      scriptTag.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(scriptTag)

      window.onYouTubeIframeAPIReady = () => {
        createPlayer()
      }
    }

    return () => {
      if (player && typeof player.destroy === 'function') {
        player.destroy()
      }
      playerRef.current = null
      setPlayerReady(false)

      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag)
      }

      delete window.onYouTubeIframeAPIReady
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isPlaylistOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isPlaylistOpen])

  useEffect(() => {
    const handleScroll = () => {
      const player = document.querySelector('.floating-player')
      const footer = document.querySelector('.outro__footer-line')
      if (!player || !footer) return

      const footerRect = footer.getBoundingClientRect()
      const safeGap = 16

      if (footerRect.top < window.innerHeight) {
        const bottomPx = window.innerHeight - footerRect.top + safeGap
        player.style.setProperty('bottom', `${bottomPx}px`, 'important')
      } else {
        player.style.removeProperty('bottom')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const playTrack = useCallback((index) => {
    if (!playerRef.current) return
    setCurrentTrack(index)
    playerRef.current.loadVideoById(PLAYLIST[index].youtubeId)
    setIsPlaying(true)
    setIsPlayerActive(true)
  }, [])

  const toggleTrack = useCallback((index) => {
    setIsPlayerActive(true)
    if (!playerRef.current) return
    if (index === currentTrack) {
      if (isPlaying) {
        playerRef.current.pauseVideo()
        setIsPlaying(false)
      } else {
        playerRef.current.playVideo()
        setIsPlaying(true)
      }
    } else {
      setCurrentTrack(index)
      playerRef.current.loadVideoById(PLAYLIST[index].youtubeId)
      setIsPlaying(true)
    }
  }, [currentTrack, isPlaying])

  const playNext = useCallback(() => {
    if (!playerRef.current) return
    const next = (currentTrack + 1) % PLAYLIST.length
    setCurrentTrack(next)
    playerRef.current.loadVideoById(PLAYLIST[next].youtubeId)
    setIsPlaying(true)
  }, [currentTrack])

  const playPrev = useCallback(() => {
    if (!playerRef.current) return
    const prev = currentTrack === 0 ? PLAYLIST.length - 1 : currentTrack - 1
    setCurrentTrack(prev)
    playerRef.current.loadVideoById(PLAYLIST[prev].youtubeId)
    setIsPlaying(true)
  }, [currentTrack])

  const togglePlay = useCallback(() => {
    if (!playerRef.current) return
    if (isPlaying) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const handleOpenPlayer = () => {
    setIsPlayerActive(true)
    setIsMenuOpen(true)
    if (playerRef.current && playerReady) {
      playerRef.current.playVideo()
      setIsPlaying(true)
    }
  }

  const handleCloseCompletely = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo()
    }
    setIsPlaying(false)
    setIsPlayerActive(false)
    setIsMenuOpen(false)
  }

  const track = PLAYLIST[currentTrack]

  return (
    <section id="interests" className="interests" ref={sectionRef}>
      <div className="interests__content">
        <motion.div className="interests__header" style={{ y }}>
          <motion.div
            className="interests__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="interests__eyebrow-line" />
            <span className="interests__eyebrow-text">ACT V</span>
            <span className="interests__eyebrow-line" />
          </motion.div>
          <motion.h2
            className="interests__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Interests & Music
          </motion.h2>
        </motion.div>

        <div className="interests__layout">
          <div className="interests__grid">
            {INTERESTS.map((interest, index) => {
              const Icon = interest.icon
              return (
                <motion.div
                  key={interest.name}
                  className="interests__card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="interests__card-icon">
                    <Icon size={20} />
                  </div>
                  <h3 className="interests__card-name">{interest.name}</h3>
                  <p className="interests__card-desc">{interest.description}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="interests__music-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="interests__music-header">
              <FaHeadphones size={14} className="interests__music-icon" />
              <span className="interests__music-label">Lo que suelo escuchar</span>
            </div>
            <p className="interests__music-text">
              Si quieres ir escuchando mientras navegas...
            </p>
            <div className="interests__music-btns">
              <button
                className="interests__music-btn"
                onClick={handleOpenPlayer}
              >
                <FaBroadcastTower size={14} />
                <span>Ir escuchando</span>
              </button>
              <button
                className="interests__music-btn interests__music-btn--secondary"
                onClick={() => setIsPlaylistOpen(true)}
              >
                <FaBars size={14} />
                <span>Ver playlist</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div id="yt-player-hidden" className="interests__player-hidden" />

      <AnimatePresence>
        {isPlayerActive && (
          <motion.div
            className="floating-player"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="floating-player__compact">
              <button
                className="floating-player__radio-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <FaBroadcastTower size={18} className={isPlaying ? 'floating-player__radio-icon--spin' : ''} />
              </button>
              <button
                className="floating-player__close-btn"
                onClick={handleCloseCompletely}
              >
                <FaTimes size={10} />
              </button>
            </div>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className="floating-player__expanded"
                  initial={{ opacity: 0, x: -10, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="floating-player__header">
                    <FaBroadcastTower size={12} className="floating-player__header-icon" />
                    <span className="floating-player__header-label">Sonando</span>
                    <button
                      className="floating-player__playlist-btn"
                      onClick={() => setIsPlaylistOpen(true)}
                    >
                      <FaBars size={12} />
                    </button>
                  </div>

                  <div className="floating-player__body">
                    <img
                      src={`https://img.youtube.com/vi/${track.youtubeId}/mqdefault.jpg`}
                      alt={track.title}
                      className="floating-player__thumb"
                    />
                    <div className="floating-player__info">
                      <span className="floating-player__title">{track.title}</span>
                      <span className="floating-player__artist">{track.artist}</span>
                    </div>
                  </div>

                  <div className="floating-player__controls">
                    <button className="floating-player__ctrl" onClick={playPrev}>
                      <FaStepBackward size={12} />
                    </button>
                    <button className="floating-player__ctrl floating-player__ctrl--play" onClick={togglePlay} disabled={!playerReady}>
                      {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
                    </button>
                    <button className="floating-player__ctrl" onClick={playNext}>
                      <FaStepForward size={12} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {createPortal(
        <AnimatePresence>
          {isPlaylistOpen && (
            <motion.div
              className="playlist-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPlaylistOpen(false)}
            >
              <motion.div
                className="playlist-modal__content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="playlist-modal__header">
                  <FaBroadcastTower size={14} className="playlist-modal__icon" />
                  <span className="playlist-modal__title">Playlist</span>
                  <button className="playlist-modal__close" onClick={() => setIsPlaylistOpen(false)}>
                    <FaTimes size={14} />
                  </button>
                </div>

                <div className="playlist-modal__list">
                  {PLAYLIST.map((item, index) => (
                    <div
                      key={item.title}
                      className={`playlist-modal__item ${index === currentTrack ? 'playlist-modal__item--active' : ''}`}
                      onClick={() => toggleTrack(index)}
                    >
                      <div className="playlist-modal__item-left">
                        {index === currentTrack && isPlaying ? (
                          <Equalizer />
                        ) : (
                          <span className="playlist-modal__item-num">{String(index + 1).padStart(2, '0')}</span>
                        )}
                        <div className="playlist-modal__item-info">
                          <span className="playlist-modal__item-title">{item.title}</span>
                          <span className="playlist-modal__item-artist">{item.artist}</span>
                        </div>
                      </div>
                      <button className="playlist-modal__item-play" onClick={(e) => { e.stopPropagation(); toggleTrack(index); }}>
                        {index === currentTrack && isPlaying ? <FaPause size={10} /> : <FaPlay size={10} />}
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  )
}

export default Interests
