import Header from '@/components/Header'
import Carousel from '@/components/Carousel'
import styles from './App.module.scss'

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Carousel />
    </div>
  )
}
