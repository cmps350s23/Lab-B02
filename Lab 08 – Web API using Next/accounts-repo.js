// npm i fs-extra
import fs from 'fs-extra'
import { nanoid } from 'nanoid'
import path from 'path'

export default class AccountsRepo {
    constructor() {
        this.path = path.join(process.cwd(), 'app/data/accounts.json')
        console.log(this.path);
    }

    async getAccounts(type) {
        const accounts = await fs.readJSON(this.path)
        if (type) {
            return accounts.filter(account => account
                .acctType.toLowerCase() === type.toLowerCase())
        }

        return accounts;
    }
    async addAccount(account) {
        account.accountNo = nanoid()
        const accounts = await this.getAccounts()
        accounts.push(account)
        await fs.writeJSON(this.path, accounts)
        return account
    }

    async updateAccount(account) {
        const accounts = await fs.readJson(this.path)
        const index = accounts.findIndex(acc => acc.accountNo == account.accountNo)
        if (index > 0) {
            accounts[index] = account
            await fs.writeJson(this.path, accounts)
            return "updated successfully"
        }
        return "Unable to update account because it does not exist"
    }

    async getAccount(accNo) {
        const accounts = await fs.readJson(this.path)
        const account = accounts.find(acc => acc.accountNo == accNo)
        return account
    }

    async deleteAccount(accNo) {
        const accounts = await fs.readJson(this.path)
        const filteredAccounts = accounts.filter(acc => acc.accountNo != accNo)
        await await fs.writeJson(this.path, filteredAccounts)
        return "deleted successfully"
    }
    async addTransaction(transaction) {
        transaction.accountNo = parseInt(transaction.accountNo.toString());
        transaction.amount = parseInt(transaction.amount.toString());
        try {
            const accounts = await this.getAccounts();
            const account = accounts.find(account => account.accountNo == transaction.accountNo);
            if (transaction.transType == 'Deposit') {
                account.deposit(transaction.amount);
            } else {
                account.withdraw(transaction.amount);
            }
            return await fs.writeJson(filePath, accounts)
        } catch (err) {
            throw err;
        }
    }
}