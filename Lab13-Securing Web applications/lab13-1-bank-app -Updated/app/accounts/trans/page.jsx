import React from 'react'
import styles from '../../page.module.css'
import { getAccounts } from '../../actions/accounts'
import { addTransaction } from '../../actions/transactions'


export default async function Transaction() {

    let accounts = await getAccounts('All')
    return (
        <>
            <h3>Add Transaction</h3>
            <form id="trans-form" className={styles.form} action={addTransaction}>
                <label htmlFor="accountNo">Account No</label>
                <select name="accountNo" id="accountNo" required defaultValue="Select account no">
                    <option disabled>Select account no</option>
                    {accounts.map(acct => <option key={acct.accountNo} value={acct.accountNo}>{acct.accountNo} - {acct.balance}</option>)}
                </select>

                <label htmlFor="type">Transaction Type</label>
                <select name="transType" id="transType" required  >
                    <option></option>
                    <option value="Deposit">Deposit</option>
                    <option value="Withdraw">Withdraw</option>
                </select>

                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" name="amount" required />
                <button type="Submit">Submit</button>
            </form>
        </>
    )
}
