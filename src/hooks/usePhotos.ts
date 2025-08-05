import { useEffect, useState } from 'react'
import { API_BASE, API_KEY } from '@/api'
import type { ApiFailedResponse, ApiPhoto, ApiSuccessfulResponse } from '@/api'

export function usePhotos(query: string) {
  const [photos, setPhotos] = useState<ApiPhoto[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (query.trim() === '') {
      return
    }

    async function fetchPhotos() {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(
          `${API_BASE}/search/photos?page=1&per_page=30&query=${query}&client_id=${API_KEY}`
        )

        if (!response.ok) {
          throw new Error('Something went wrong')
        }

        const data: ApiSuccessfulResponse | ApiFailedResponse = await response.json()

        if ('errors' in data) {
          throw new Error(data.errors[0])
        }

        setPhotos(data.results)
        setError(null)
      } catch (err) {
        if (err instanceof Error) {
          setError(err)
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchPhotos()
  }, [query])

  return { isLoading, error, photos }
}
