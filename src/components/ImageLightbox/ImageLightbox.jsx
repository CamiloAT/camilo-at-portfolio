import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import './ImageLightbox.css'

const ImageLightbox = ({ isOpen, onClose, images, captions, currentIndex, onPrev, onNext, onDotClick, dotColors, accentVars }) => {
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
  const isGradient = accentVars?.['--modal-accent-grad']?.includes('gradient')
  const arrowClass = `lightbox-arrow${isGradient ? ' lightbox-arrow--gradient' : ''}`

  return createPortal(
    <div className="lightbox-overlay" onClick={onClose} style={accentVars}>
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
      </div>

      {images.length > 1 && (
        <div className="lightbox-bottom" onClick={(e) => e.stopPropagation()}>
          <div className="lightbox-controls">
            <button className={arrowClass} onClick={onPrev}>‹</button>
            <button className={arrowClass} onClick={onNext}>›</button>
          </div>
          <div className="lightbox-dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`lightbox-dot ${i === currentIndex ? 'lightbox-dot--active' : ''}`}
                style={dotColors && dotColors[i] ? { '--dot-color': dotColors[i] } : undefined}
                onClick={() => onDotClick(i)}
              />
            ))}
          </div>
        </div>
      )}
    </div>,
    document.body
  )
}

export default ImageLightbox
