import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaMusic, FaCode, FaHeadphones, FaPlay, FaPause, FaGuitar, FaWalking, FaBroadcastTower, FaStepBackward, FaStepForward } from 'react-icons/fa'
import './Interests.css'

const INTERESTS = [
  { name: 'Musica', icon: FaMusic, description: 'Lo que suena mientras programo' },
  { name: 'Tocar la guitarra', icon: FaGuitar, description: 'Mi otro pasatiempo' },
  { name: 'Caminar', icon: FaWalking, description: 'Mi forma de relajarme' },
  { name: 'Coding', icon: FaCode, description: 'Por diversion y curiosidad' },
]

const PLAYLIST = [
  { title: 'Doma', artist: 'Josean Log', youtubeId: 'e8qJWFrZFCI' },
  { title: 'La Graciosa', artist: 'Quevedo', youtubeId: 'LZPLBSRnxSY' },
  { title: 'Own My Mind', artist: 'Maneskin', youtubeId: 'ABbggjVQm6A' },
  { title: 'El Hexxo', artist: 'Feid', youtubeId: 'Ro1sDfvXZPg' },
  { title: 'Te Falle', artist: 'Christian Nodal', youtubeId: 'oZmXYET4qQU' },
  { title: 'Understand', artist: 'Boy With Uke', youtubeId: 'T2fjQrsKbAM' },
  { title: 'Stolen Dance', artist: 'Milky Chance', youtubeId: 'iX-QaNzd-0Y' },
  { title: 'Guaya', artist: 'Lucho RK & Quevedo', youtubeId: 'dQw4w9WgXcQ' },
  { title: '1000 Canciones', artist: 'Alvaro Diaz', youtubeId: 'dQw4w9WgXcQ' },
  { title: 'Tus Vueltas', artist: 'Milo J', youtubeId: 'dQw4w9WgXcQ' },
]

const Interests = () => {
  const sectionRef = useRef(null)
  const playerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [playerReady, setPlayerReady] = useState(false)
  const [isPlayerOpen, setIsPlayerOpen] = useState(false)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  useEffect(() => {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.head.appendChild(tag)

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('yt-player-hidden', {
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
          onReady: () => setPlayerReady(true),
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              playNext()
            }
          },
        },
      })
    }

    return () => {
      delete window.onYouTubeIframeAPIReady
    }
  }, [])

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
            <span className="interests__eyebrow-text">ACT VI</span>
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
            <button
              className="interests__music-btn"
              onClick={() => setIsPlayerOpen(!isPlayerOpen)}
            >
              <FaBroadcastTower size={14} />
              <span>{isPlayerOpen ? 'Cerrar reproductor' : 'Ir escuchando'}</span>
            </button>
          </motion.div>
        </div>
      </div>

      <div id="yt-player-hidden" className="interests__player-hidden" />

      <AnimatePresence>
        {isPlayerOpen && (
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
                onClick={() => setIsPlayerOpen(!isPlayerOpen)}
              >
                <FaBroadcastTower size={18} className={isPlaying ? 'floating-player__radio-icon--spin' : ''} />
              </button>
            </div>

            <div className="floating-player__expanded">
              <div className="floating-player__header">
                <FaBroadcastTower size={12} className="floating-player__header-icon" />
                <span className="floating-player__header-label">Sonando</span>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Interests
