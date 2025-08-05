import SearchIcon from '@/components/icons/SearchIcon'
import styles from './SearchBar.module.scss'
import { useRef } from 'react'

type SearchBarProps = {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchBar({ setQuery }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputRef.current) {
      setQuery(inputRef.current.value)
    }
  }

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        name="search"
        size={1}
        placeholder="Search..."
        autoComplete="off"
        ref={inputRef}
      />
      <button>
        <SearchIcon />
      </button>
    </form>
  )
}
