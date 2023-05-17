'use server'
import * as repo from '../api/accounts/accounts-repo'

import { revalidatePath } from "next/cache";

export const addAccount = async (formData) => {
    const { ownerId, accountNo, acctType, balance } = Object.fromEntries(formData.entries())
    const account = { ownerId, accountNo, acctType, balance: +balance }
    await repo.addAccount(account)
    revalidatePath('/')
}

export const updateAccount = async (formData, accountNo) => {
    const { ownerId, acctType, balance } = Object.fromEntries(formData.entries())
    const account = { ownerId, acctType, balance: +balance }
    await repo.updateAccount(account, accountNo)
    revalidatePath('/')
}

export const getAccounts = async (type) => await repo.getAccounts(type)


export const deleteAccount = async (accountNo) => {
    await repo.deleteAccount(accountNo)
    revalidatePath('/')
}