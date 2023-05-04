import { log } from 'console'
import fs from 'fs-extra'
import { nanoid } from 'nanoid'
import path from 'path'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export default class AccountsRepo {
    constructor() {
        this.filePath = path.join(process.cwd(), 'app/data/accounts.json')
    }

    async getAccounts(type) {
        try {
            if (type == 'Saving' || type == 'Current')
                return await prisma.account.findMany({ where: { acctType: type } })

            return await prisma.account.findMany()

        }
        catch (err) {
            console.log(err);
            return { error: err.message }
        }

    }

    async addAccount(account) {
        try {
            console.log('from client ', account);
            const newAccount = await prisma.account.create({ data: account })
            return newAccount
        } catch (error) {
            return { error: error.message }
        }
    }

    async updateAccount(updatedAccount, accountNo) {
        try {
            return await prisma.account.update({ data: updatedAccount, where: { accountNo } })
        } catch (err) {
            return { error: err.message }
        }
    }

    async getAccount(accNo) {
        try {
            return await prisma.account.findUnique({ where: { accountNo: accNo } })
        } catch (err) {
            return { error: err.message }
        }
    }

    async deleteAccount(accNo) {
        try {
            const count = await prisma.account.delete({ where: { accountNo: accNo } })
            if (count == 0)
                return "account does not exist"

            return "account deleted successfully"
        } catch (err) {
            console.log(err);
            return "Unable to delete account because it does not exist"
        }

    }

    async addTransaction(transaction, accountNo) {
        try {
            transaction.amount = parseFloat(transaction.amount)

            const account = await this.getAccount(accountNo)
            if (account.error || account == null)
                return { error: "account does not exist" }

            if (transaction.transType == 'Deposit')
                account.balance += transaction.amount
            else
                if (account.balance >= transaction.amount)
                    account.balance -= transaction.amount
                else
                    return { error: "insufficient fund" }

            await this.updateAccount(account, accountNo)
            return await prisma.transaction.create({ data: transaction })

        } catch (err) {
            console.log(err);
            return {
                issue: 'unable to execute the transaction successful',
                reason: err.message
            }
        }
    }

}

