import React from 'react'

import styles from '../page.module.css'

export default function Header() {
  return (
    <header className={styles.banner}>
      <h1 className={styles.title}>Recipe Management App</h1>
    </header>

  )
}