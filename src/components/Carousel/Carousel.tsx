import type { ApiPhoto } from '@/api'
import styles from './Carousel.module.scss'

type CarouselProps = {
  photos: ApiPhoto[]
}

export default function Carousel({ photos }: CarouselProps) {
  return (
    <div className={styles.carousel}>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.urls.regular} alt={photo.alt_description} />
          </li>
        ))}
      </ul>
    </div>
  )
}
