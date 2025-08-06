import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon'
import ChevronRightIcon from '@/components/icons/ChevronRightIcon'
import styles from './Pagination.module.scss'

type PaginationProps = {
  page: number
  totalPages: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export default function Pagination({ page, totalPages, setPage }: PaginationProps) {
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((curPage) => curPage - 1)
    }
  }

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((curPage) => curPage + 1)
    }
  }

  return (
    <div className={styles.pagination}>
      <button className={styles.prevButton} disabled={page === 1} onClick={handlePrevPage}>
        <ChevronLeftIcon />
      </button>
      <div className={styles.pages}>
        Page {page} of {totalPages}
      </div>
      <button className={styles.nextButton} disabled={page === totalPages} onClick={handleNextPage}>
        <ChevronRightIcon />
      </button>
    </div>
  )
}
