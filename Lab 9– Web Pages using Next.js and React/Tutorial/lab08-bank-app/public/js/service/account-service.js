const baseUrl = '/api/accounts'

class AccountService {
    //returns all the accounts depending on the type the user selected
    async getAccounts(acctType) {
        const data = await fetch(`${baseUrl}?type=${acctType}`)

        const accounts = await data.json()
    }

    async deleteAccount(accountNo) {

    }

    async addAccount(account) {

    }

    async updateAccount(account) {

    }

    async addTrans(trans) {

    }
}

export default new AccountService()