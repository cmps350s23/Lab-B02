import { Inter } from 'next/font/google'
import AccountsTable from './accounts/AccountsTable'
import { getAccounts } from './api/accounts/accounts-repo'
// import { authOptions } from './api/auth/[...nextauth]/route'


const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const initialAccounts = await getAccounts()
  // const session = await getServerSession(authOptions)

  // if (!session) {
  //   redirect('/api/auth/signin?callbackUrl=/')
  // }

  return (
    <>
      <AccountsTable initialAccounts={initialAccounts}></AccountsTable>
    </>
  )
}
