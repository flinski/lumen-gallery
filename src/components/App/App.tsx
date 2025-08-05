import { useState } from 'react'
import { usePhotos } from '@/hooks/usePhotos'
import { initialQuery } from '@/api'
import Header from '@/components/Header'
import Carousel from '@/components/Carousel'
import Masonry from '@/components/Masonry'
import Loader from '@/components/Loader'
import styles from './App.module.scss'

export default function App() {
  const [query, setQuery] = useState(initialQuery)
  const { isLoading, error, photos } = usePhotos(query)

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div className={styles.app}>
      <Header query={query} setQuery={setQuery} />
      {isLoading ? (
        <Loader center={true} />
      ) : (
        <>
          <Carousel photos={photos.slice(0, 7)} />
          <Masonry photos={photos.slice(7)} />
        </>
      )}
    </div>
  )
}
