import type { ApiPhoto } from '@/api'
import styles from './Masonry.module.scss'

type MasonryProps = {
  photos: ApiPhoto[]
  modal: {
    isOpen: boolean
    open: () => void
    close: () => void
    toggle: () => void
  }
  setSelectedPhoto: React.Dispatch<React.SetStateAction<ApiPhoto | null>>
}

export default function Masonry({ photos, modal, setSelectedPhoto }: MasonryProps) {
  const handleOpenModal = (photo: ApiPhoto) => {
    modal.open()
    setSelectedPhoto(photo)
  }

  return (
    <div className={styles.masonry}>
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.urls.regular}
          alt={photo.alt_description}
          width={photo.width}
          height={photo.height}
          onClick={() => handleOpenModal(photo)}
        />
      ))}
    </div>
  )
}
