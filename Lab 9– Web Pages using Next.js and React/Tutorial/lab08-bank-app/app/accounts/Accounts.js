import React from 'react'
import styles from '../page.module.css'
import Account from './Account'

export default function Accounts({ initialAccounts }) {
    return (
        <div>
            <label htmlFor="acctType" className={styles.label}>Account Type</label>
            <select id="acctType" className={styles.dropdown}>
                <option value="All">All</option>
                <option value="Saving">Saving</option>
                <option value="Current">Current</option>
            </select>

            <table id="accounts" className={styles.table}>
                <thead>
                    <tr>
                        <th>Account No</th>
                        <th>Account Type</th>
                        <th>Balance</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {initialAccounts.map(account => <Account account={account}></Account>)}
                </tbody>
            </table>
        </div>
    )
}
