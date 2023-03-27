import fs from 'fs-extra'
import { nanoid } from 'nanoid'
const filePath = 'app/data/accounts.json' // relative to the root of the project

export default class AccountsRepo {
    async getAccounts(type: string) {
        const accounts = await fs.readJson(filePath)
        if (type)
            return accounts.filter(acc => acc.acctType.toLowerCase().includes(type.toLowerCase()))
        else
            return accounts

        // check if a string includes another string
        // const str = 'Hello World'
        // str.includes('Hello') // true
    }

    async addAccount(account) {
        account.accountNo = nanoid()
        const accounts = await fs.readJson(filePath)
        accounts.push(account)
        return await fs.writeJson(filePath, accounts)
    }

    async updateAccount(account) {
        const accounts = await fs.readJson(filePath)
        const index = accounts.findIndex(account => account.accountNo == account.accountNo)
        if (index > 0) {
            accounts[index] = account
            return await fs.writeJson(filePath, accounts)
        }
        return null
    }

    async getAccount(accNo) {
        const accounts = await fs.readJson(filePath)
        const account = accounts.find(acc => acc.accountNo == accNo)
        return account
    }

    async deleteAccount(accNo) {
        const accounts = await fs.readJson(filePath)
        const filteredAccounts = accounts.filter(acc => acc.accountNo != accNo)
        return await fs.writeJson(filePath, filteredAccounts)
    }
}