const accounts = [
    { accountNo: 123, balance: 500, type: "Saving" },
    { accountNo: 234, balance: 4000, type: "Current" },
    { accountNo: 345, balance: 35000, type: "Current" },
    { accountNo: 456, balance: 60000, type: "Saving" },
]

export function display() { accounts.forEach(acc => console.log(acc)) }
export function deposit(accountNo, amount) {
    const account = accounts.find(acc => acc.accountNo === accountNo)
    if (account)
        account.balance += amount;
}

export function withdraw(accountNo, amount) {
    const index = accounts.findIndex(acc => acc.accountNo === accountNo)
    if (index >= 0)
        accounts[index].balance -= amount
}

