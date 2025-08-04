import { useEffect, useState } from 'react'
import { API_BASE, API_KEY } from '@/api'
import type { ApiFailedResponse, ApiPhoto, ApiSuccessfulResponse } from '@/api'
import Header from '@/components/Header'
import Carousel from '@/components/Carousel'
import Masonry from '@/components/Masonry'
import styles from './App.module.scss'

export default function App() {
  const [photos, setPhotos] = useState<ApiPhoto[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchPhotos() {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(
          `${API_BASE}/search/photos?page=1&per_page=30&query=japan&client_id=${API_KEY}`
        )
        const data: ApiSuccessfulResponse | ApiFailedResponse = await response.json()

        if ('errors' in data) {
          throw new Error(data.errors[0])
        }

        console.log(data)
        setPhotos(data.results)
        setError(null)
      } catch (err) {
        if (err instanceof Error) {
          console.error(err)
          setError(err)
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchPhotos()
  }, [])

  console.log(error)
  console.log(isLoading)

  return (
    <div className={styles.app}>
      <Header />
      <Carousel photos={photos.slice(0, 7)} />
      <Masonry photos={photos.slice(7)} />
    </div>
  )
}
