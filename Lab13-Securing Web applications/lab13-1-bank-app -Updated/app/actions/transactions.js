'use server'
import * as repo from '../api/accounts/[id]/trans/trans-repo'
import { redirect } from 'next/navigation'

export const addTransaction = async (formData) => {
    const { transType, amount, accountNo } = Object.fromEntries(formData.entries())
    const transaction = { accountNo, transType, amount }
    await repo.addTransaction(transaction, accountNo)
    redirect('/')
}
