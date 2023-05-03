import { log } from 'console'
import fs from 'fs-extra'
import { nanoid } from 'nanoid'
import path from 'path'

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export default class AccountsRepo {
    constructor() {
        this.filePath = path.join(process.cwd(), 'app/data/accounts.json')
    }

    async getAccounts(type) {
        try {


        }

        catch (err) {
            console.log(err);
            return { error: err.message }
        }

    }

    async addAccount(account) {
        try {

        } catch (error) {
            return { error: error.message }
        }
    }

    async updateAccount(account, accountNo) {
        try {

        } catch (err) {
            return { error: err.message }
        }
    }

    async getAccount(accNo) {
        try {

        } catch (err) {
            return { error: err.message }
        }
    }

    async deleteAccount(accNo) {
        try {

            return "deleted successfully"
        } catch (err) {
            console.log(err);
            return "Unable to delete account because it does not exist"
        }

    }

    async addTransaction(transaction, accountNo) {

        try {


        } catch (err) {
            return {
                issue: 'unable to execute the transaction successful',
                reason: err.message
            }
        }
    }

}

