import Logo from '@/components/Logo'
import ThemeToggler from '@/components/ThemeToggler'
import SearchBar from '@/components/SearchBar/SearchBar'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Logo />
      </div>
      <div>
        <ThemeToggler />
      </div>
      <div>
        <SearchBar />
      </div>
    </header>
  )
}
