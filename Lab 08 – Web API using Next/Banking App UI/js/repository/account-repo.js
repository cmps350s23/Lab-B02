const baseUrl = 'http://localhost:3002/api/accounts/'

class AccountRepo {
    //returns all the accounts depending on the type the user selected
    async getAccounts(acctType) {
        let response;
        if (acctType === 'All')
            response = await fetch(baseUrl)
        else
            response = await fetch(`${baseUrl}?type=${acctType}`);
        return response.json();
    }

    async deleteAccount(accountNo) {
        return await fetch(`baseUrl${accountNo}`, { method: 'delete' });
    }

    async addAccount(account) {
        return await fetch(baseUrl,
            {
                method: 'POST',
                headers: { 'Content-Type': "application/json", },
                body: JSON.stringify(account)
            });
    }

    async updateAccount(account) {
        return await fetch(baseUrl,
            {
                method: 'PUT',
                headers: { 'Content-Type': "application/json", },
                body: JSON.stringify(account)
            });
    }

    async addTrans(trans) {
        const url = `${baseUrl}${trans.accountNo}/trans`
        await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(trans)
        });
    }
}

export default new AccountRepo()