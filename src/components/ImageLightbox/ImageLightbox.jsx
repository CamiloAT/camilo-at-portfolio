import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import './ImageLightbox.css'

const ImageLightbox = ({ isOpen, onClose, images, captions, currentIndex, onPrev, onNext, dotColors }) => {
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [isOpen, onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const isVideo = (url) => /\.(mp4|webm|ogg)$/i.test(url)
  const caption = captions && captions[currentIndex]

  return createPortal(
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>×</button>

      {caption && (
        <div className="lightbox-caption">
          <span className="lightbox-caption-title">{caption.title}</span>
          <span className="lightbox-caption-desc">{caption.desc}</span>
        </div>
      )}

      <div className="lightbox-image-wrapper" onClick={(e) => e.stopPropagation()}>
        {isVideo(images[currentIndex]) ? (
          <video
            src={images[currentIndex]}
            className="lightbox-video"
            autoPlay
            muted
            loop
          />
        ) : (
          <img
            src={images[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            className="lightbox-img"
          />
        )}

        {images.length > 1 && (
          <>
            <button className="lightbox-arrow lightbox-arrow--left" onClick={onPrev}>‹</button>
            <button className="lightbox-arrow lightbox-arrow--right" onClick={onNext}>›</button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="lightbox-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`lightbox-dot ${i === currentIndex ? 'lightbox-dot--active' : ''}`}
              style={dotColors && dotColors[i] ? { background: i === currentIndex ? dotColors[i] : 'rgba(255,255,255,0.2)', borderColor: dotColors[i] } : undefined}
              onClick={(e) => { e.stopPropagation(); /* dots navigate via parent state */ }}
            />
          ))}
        </div>
      )}
    </div>,
    document.body
  )
}

export default ImageLightbox
