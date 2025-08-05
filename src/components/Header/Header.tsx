import Logo from '@/components/Logo'
import ThemeToggler from '@/components/ThemeToggler'
import SearchBar from '@/components/SearchBar/SearchBar'
import styles from './Header.module.scss'

type HeaderProps = {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

export default function Header({ query, setQuery }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div>
        <Logo />
      </div>
      <div>
        <ThemeToggler />
      </div>
      <div>
        <SearchBar query={query} setQuery={setQuery} />
      </div>
    </header>
  )
}
