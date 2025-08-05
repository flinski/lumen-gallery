import styles from './Loader.module.scss'

type LoaderProps = {
  center?: boolean
}

export default function Loader({ center = false }: LoaderProps) {
  if (center) {
    return (
      <div className={styles.loaderWrapper}>
        <div className={styles.loader}></div>
      </div>
    )
  }

  return <div className={styles.loader}></div>
}
