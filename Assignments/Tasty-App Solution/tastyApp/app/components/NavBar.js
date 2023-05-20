import React from 'react'
import Link from 'next/link'
import styles from '../page.module.css'

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/recipes/add">Add Recipe</Link></li>
            </ul>
        </nav>

    )
}