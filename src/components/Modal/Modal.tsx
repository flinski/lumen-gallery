import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import CrossIcon from '@/components/icons/CrossIcon'
import DownloadIcon from '@/components/icons/DownloadIcon'
import styles from './Modal.module.scss'
import type { ApiPhoto } from '@/api'

type ModalProps = {
  isOpen: boolean
  selectedPhoto: ApiPhoto
  onClose: () => void
}

export default function Modal({ isOpen, selectedPhoto, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isOpen])

  const handleCloseModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) {
    return null
  }

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={(event) => handleCloseModal(event)}>
        <div
          className={styles.inner}
          style={{ aspectRatio: `${selectedPhoto.width} / ${selectedPhoto.height}` }}
        >
          <button className={styles.crossButton} onClick={onClose}>
            <CrossIcon />
          </button>
          <a
            className={styles.downloadButton}
            href={selectedPhoto.urls.full}
            download={true}
            target="_blank"
          >
            <DownloadIcon />
          </a>
          <img
            src={selectedPhoto.urls.regular}
            alt={selectedPhoto.alt_description}
            width={selectedPhoto.width}
            height={selectedPhoto.height}
          />
        </div>
      </div>
    </div>,
    document.body
  )
}
