import { Inter } from 'next/font/google'
import Accounts from './accounts/Accounts'
import AccountsRepo from './api/accounts/accounts-repo'

const inter = Inter({ subsets: ['latin'] })
const accountsRepo = new AccountsRepo()


export default async function Home() {
  const accounts = await accountsRepo.getAccounts()
  return (
    <Accounts initialAccounts={accounts}></Accounts>
  )
}
