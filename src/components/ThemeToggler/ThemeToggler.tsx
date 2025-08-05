import { useEffect } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { LS_KEY } from '@/constants'
import SunIcon from '@/components/icons/SunIcon'
import MoonIcon from '@/components/icons/MoonIcon'
import styles from './ThemeToggler.module.scss'

export default function ThemeToggler() {
  const [isDark, setIsDark] = useLocalStorage(false, LS_KEY)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <button
      className={styles.themeToggler}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setIsDark((curIsDark) => !curIsDark)}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
