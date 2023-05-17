'use client'
import { React, useState } from 'react'
import Account from './Account'
import styles from '../page.module.css'
import Link from 'next/link'
import { getAccounts } from '../actions/accounts'
import { deleteAccount } from '../actions/accounts'
import { useRouter } from 'next/navigation'


export default function AccountsTable({ initialAccounts }) {

    const router = useRouter()
    const [accounts, setAccounts] = useState(initialAccounts)

    // async function server() {
    //     'use server'
    //     getAccounts()
    //     console.log('server');
    // }
    async function handleTypeChange(e) {
        // alert('handleTypeChange => ' + e.target.value);
        // console.log('...getting called from handleTypeChange');
        const filteredAccounts = await getAccounts(e.target.value)
        setAccounts(filteredAccounts)
    }

    async function handleDelete(accountNo) {
        if (confirm('Are you sure you want to delete this account?') === false) return
        await deleteAccount(accountNo)
        const newAccounts = await getAccounts()
        setAccounts(newAccounts)
    }
    return (
        <div>
            <label htmlFor="acctType"> Account Type</label>
            <Link href="/accounts/add" className={styles.addAccount}>Add Account</Link>
            <select id="acctType" className="dropdown" onChange={handleTypeChange}>
                <option value="All">All</option>
                <option value="Savings">Savings</option>
                <option value="Current">Current</option>
            </select>
            <table id="accounts" className='table table-striped'>
                <thead>
                    <tr>
                        <th>Account No</th>
                        <th>Account Type</th>
                        <th>Balance</th>
                        <th>Owner Id</th>
                        <th>Owner Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        accounts.map(account =>
                            <Account
                                onDelete={handleDelete}
                                account={account}
                                key={account.accountNo}>
                            </Account>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
