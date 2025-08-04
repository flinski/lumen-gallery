import SunIcon from '@/components/icons/SunIcon'
import styles from './ThemeToggler.module.scss'

export default function ThemeToggler() {
  return (
    <button className={styles.themeToggler}>
      <SunIcon />
    </button>
  )
}
