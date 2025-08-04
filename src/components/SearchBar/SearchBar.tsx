import SearchIcon from '@/components/icons/SearchIcon'
import styles from './SearchBar.module.scss'

export default function SearchBar() {
  return (
    <form className={styles.searchBar}>
      <input type="text" id="search" name="search" size={1} placeholder="Search..." />
      <button>
        <SearchIcon />
      </button>
    </form>
  )
}
