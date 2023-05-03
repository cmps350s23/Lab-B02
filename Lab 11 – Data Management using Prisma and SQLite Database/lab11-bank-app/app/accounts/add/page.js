'use client'
import React, { useState } from 'react'
import styles from '../../page.module.css'
import { useRouter } from 'next/navigation';
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Add() {
    const router = useRouter();
    const [account, setAccount] = useState({})

    function handleChange(e) {
        const { name, value } = e.target
        const newAccount = { ...account }
        newAccount[name] = value
        setAccount(newAccount)
    }

    async function handleAddAccount(e) {
        e.preventDefault()
        account.balance = Number(account.balance)
        await fetch('/api/accounts', {
            method: 'POST',
            body: JSON.stringify(account),
            headers: { 'Content-Type': 'application/json' }
        })
        router.push('/', undefined, { shallow: true })
    }

    return (
        <>
            <h3 className={styles.title}>Add Account</h3>
            <form id="account-form" className={styles.form} onSubmit={handleAddAccount}>
                <label htmlFor="acctType">Account Type</label>
                <select name="acctType" id="acctType" required onChange={handleChange}>
                    <option></option>
                    <option value="Saving">Saving</option>
                    <option value="Current">Current</option>
                </select>

                <label htmlFor="balance">Balance</label>
                <input type="number" name="balance" id="balance" required onChange={handleChange} />
                <button type="Submit">Submit</button>
            </form>
        </>
    )
}
