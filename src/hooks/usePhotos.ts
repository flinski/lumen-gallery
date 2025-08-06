import { useEffect, useRef, useState } from 'react'
import { API_BASE, API_KEY } from '@/api'
import type { ApiFailedResponse, ApiPhoto, ApiSuccessfulResponse } from '@/api'

export function usePhotos(query: string) {
  const [photos, setPhotos] = useState<ApiPhoto[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const prevQueryRef = useRef(query)

  useEffect(() => {
    if (query.trim() === '') {
      return
    }

    async function fetchPhotos() {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(
          `${API_BASE}/search/photos?page=${page}&per_page=30&query=${query}&client_id=${API_KEY}`
        )

        if (!response.ok) {
          throw new Error('Something went wrong')
        }

        const data: ApiSuccessfulResponse | ApiFailedResponse = await response.json()

        if ('errors' in data) {
          throw new Error(data.errors[0])
        }

        if (query !== prevQueryRef.current) {
          setPage(1)
          prevQueryRef.current = query
        }

        setPhotos(data.results)
        setTotalPages(data.total_pages)
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
  }, [query, page])

  return { isLoading, error, photos, page, setPage, totalPages, setTotalPages }
}
