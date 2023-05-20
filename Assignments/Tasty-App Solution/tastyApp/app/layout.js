import NavBar from './components/NavBar'
import Header from './components/Header'
import './globals.css'
import styles from './page.module.css'
// import styles from './page.module.css'

export const metadata = {
  title: 'Recipe App',
  description: 'Find the perfect recipe!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" />
      </head>
      <body>
        <Header />
        <NavBar />
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  )
}
