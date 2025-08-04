import type { ApiPhoto } from '@/api'
import styles from './Masonry.module.scss'

type MasonryProps = {
  photos: ApiPhoto[]
}

export default function Masonry({ photos }: MasonryProps) {
  return (
    <div className={styles.masonry}>
      {photos.map((photo) => (
        <img
          src={photo.urls.regular}
          alt={photo.alt_description}
          width={photo.width}
          height={photo.height}
        />
      ))}
    </div>
  )
}
