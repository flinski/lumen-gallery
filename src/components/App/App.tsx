import { useState } from 'react'
import { usePhotos } from '@/hooks/usePhotos'
import { useModal } from '@/hooks/useModal'
import { initialQuery, type ApiPhoto } from '@/api'
import Header from '@/components/Header'
import Carousel from '@/components/Carousel'
import Masonry from '@/components/Masonry'
import Loader from '@/components/Loader'
import Footer from '@/components/Footer'
import Pagination from '@/components/Pagination'
import Modal from '@/components/Modal'
import styles from './App.module.scss'

export default function App() {
  const [query, setQuery] = useState(initialQuery)
  const [selectedPhoto, setSelectedPhoto] = useState<ApiPhoto | null>(null)
  const modal = useModal()
  const { isLoading, error, photos, page, totalPages, setPage } = usePhotos(query)

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
          <Carousel photos={photos.slice(0, 7)} modal={modal} setSelectedPhoto={setSelectedPhoto} />
          <Masonry photos={photos.slice(7)} modal={modal} setSelectedPhoto={setSelectedPhoto} />
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      )}
      <Footer />

      {modal.isOpen && selectedPhoto ? (
        <Modal isOpen={modal.isOpen} onClose={modal.close} selectedPhoto={selectedPhoto} />
      ) : null}
    </div>
  )
}
