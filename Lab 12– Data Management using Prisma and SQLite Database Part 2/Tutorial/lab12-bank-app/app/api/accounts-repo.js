import { log } from 'console'
import fs from 'fs-extra'
import { nanoid } from 'nanoid'
import path from 'path'
import { AccountType } from '@prisma/client'

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class AccountsRepo {
    constructor() {

    }

    async getAccounts(type) {
        try {
            /*
                All the test will go here
                await this.getOwners()
                this.deleteOwners('dfghfrjki756gh')
                this.searchOwner('John')
                 this.getTrans('rsfrg2fprksfrg2fpt', '2021-08-16T10:00:00.000Z', '2022-08-16T10:00:00.000Z')
                this.getAvgBalance()
                this.getMinMaxBalance()
                this.getTop3Accounts()
                this.getTransSum('rsfrg2fprksfrg2fpt', '2021-08-16T10:00:00.000Z', '2022-08-16T10:00:00.000Z')
            */


            this.getOwnerReport('ckockkdifg2fpt')

            let accounts = []
            if (type == 'Savings' || type == 'Current') {
                console.log('I am inside getAccounts trying to query the database', type);
                return await prisma.account.findMany(
                    {
                        where: {
                            acctType: type
                        }
                    }
                    // {
                    //     select: {
                    //         accountNo: true,
                    //         acctType: true,
                    //         balance: true
                    //     },
                    // }
                )
            }
            return await prisma.account.findMany(
                {
                    include: {
                        Owner: true
                    }
                }
            )
        }
        catch (err) {
            console.log(err);
            return { error: err.message }
        }

    }

    async addAccount(account) {
        try {
            const newAccount = await prisma.account.create({
                data: account
            })
            return newAccount
        } catch (error) {
            return { error: error.message }
        }
    }

    async updateAccount(account, accountNo) {
        // update account
        console.log('updateAccount called', accountNo);
        const updatedAccount = await prisma.account.update({
            where: { accountNo },
            data: account
        })

        if (updatedAccount)
            return "updated successfully"

        return "Unable to update account because it does not exist"
    }

    async getAccount(accNo) {
        console.log('getAccount called');
        const account = await prisma.account.findUnique({
            where: {
                accountNo: accNo
            }
        })

        if (account) return account
        else return { errorMessage: 'Account does not exit' }
    }

    async deleteAccount(accNo) {
        try {
            const count = await prisma.account.delete({
                where: {
                    accountNo: accNo
                }
            })
            return "deleted successfully"
        } catch (err) {
            console.log(err);
            return "Unable to delete account because it does not exist"
        }

    }

    async addTransaction(transaction, accountNo) {
        console.log('addTransaction called', accountNo);
        transaction.amount = parseInt(transaction.amount.toString());
        try {
            const account = await this.getAccount(accountNo);
            console.log(account);

            if (transaction.transType == 'Deposit')
                account.balance += parseInt(transaction.amount);
            else
                account.balance -= parseInt(transaction.amount);

            await this.updateAccount(account, accountNo);
            const newTransaction = await prisma.transaction.create({
                data: transaction
            })

            return {
                message: 'transaction successful',
                newTransaction
            }

        } catch (err) {
            return {
                error: 'unable to execute the transaction successful',
                errorMessage: err.message
            }
        }
    }


    async getOwners() {

        try {
            const owners = await prisma.owner.findMany()
            console.log(owners);
            return owners
        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    }

    async deleteOwners(ownerId) {
        try {
            const count = await prisma.owner.delete({
                where: { id: ownerId }
            })
            console.log('deleted owner with ID ', ownerId);
            return "deleted successfully"

        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    }

    async searchOwner(name) {

        try {
            const owner = await prisma.owner.findMany({
                where: {
                    OR: [
                        {
                            firstName: {
                                contains: name
                            }
                        },
                        {
                            lastName: {
                                contains: name
                            }
                        }
                    ]
                }
            })
            console.log(owner);
            return owner
        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    }

    async getTrans(accountNo, fromDate, toDate) {
        try {
            const transactions = await prisma.transaction.findMany({
                where: {
                    accountNo,
                    date: {
                        gte: new Date(fromDate).toISOString(),
                        lte: new Date(toDate).toISOString()
                    }
                }
            })

            console.log(transactions);
            // 
            return transactions
        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    }



    async getTransSum(accountNo, fromDate, toDate) {
        try {

            const transSum = await prisma.transaction.groupBy({
                where: {
                    accountNo,
                    date: {
                        gte: new Date(fromDate).toISOString(),
                        lte: new Date(toDate).toISOString()
                    }
                },
                by: ['transType'],
                _sum: { amount: true }
            })
            console.log(transSum);
            return transSum

        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    }
    async getAvgBalance() {
        try {
            const avgBalance = await prisma.account.groupBy({
                by: ['acctType'],
                _avg: { balance: true },
                _count: { accountNo: true }

            })
            console.log(avgBalance);
            return avgBalance

        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    }

    async getMinMaxBalance() {
        try {
            const mixMaxBalance = await prisma.account.aggregate({
                _min: { balance: true },
                _max: { balance: true }
            })
            console.log(mixMaxBalance);
            return mixMaxBalance
        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    }

    async getTop3Accounts() {
        try {
            // find many accounts
            // order by balance
            // take 3
            const top3Accounts = await prisma.account.findMany({
                orderBy: { balance: 'desc' },
                take: 3
            })
            console.log(top3Accounts);
            return top3Accounts

        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    }

    async getOwnerReport(ownerId) {
        try {
            const owner = await prisma.owner.findUnique({
                where: { id: ownerId },
                include: {
                    accounts: {
                        include: {
                            transactions: true
                        }
                    }
                }
            })
            console.log(JSON.stringify(owner, null, 2));
            return owner
        } catch (error) {
            console.log(error);
            return { error: error.message }
        }
    }
}

