import type { ApiPhoto } from '@/api'
import styles from './Carousel.module.scss'

type CarouselProps = {
  photos: ApiPhoto[]
  modal: {
    isOpen: boolean
    open: () => void
    close: () => void
    toggle: () => void
  }
  setSelectedPhoto: React.Dispatch<React.SetStateAction<ApiPhoto | null>>
}

export default function Carousel({ photos, modal, setSelectedPhoto }: CarouselProps) {
  const handleOpenModal = (photo: ApiPhoto) => {
    modal.open()
    setSelectedPhoto(photo)
  }

  return (
    <div className={styles.carousel}>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img
              src={photo.urls.regular}
              alt={photo.alt_description}
              onClick={() => handleOpenModal(photo)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
