import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  )
}
