const baseUrl = '/api/accounts'

class AccountService {
    //returns all the accounts depending on the type the user selected
    async getAccounts(acctType) {
        const data = await fetch(`${baseUrl}?type=${acctType}`)
        return await data.json()
    }

    async deleteAccount(accountNo) {
        const response = await fetch(`${baseUrl}/${accountNo}`, {
            method: 'DELETE'
        })
        return await response.json()
    }

    async addAccount(account) {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(account)
        })
        return await response.json()
    }

    async updateAccount(account) {

    }

    async addTrans(trans) {

    }
}

export default new AccountService()