export default class BankAccount {
    constructor(balance) {
        this._accountNo = Math.floor(Math.random() * 1000)
        this._balance = balance
    }

    getBalance() { return this._balance }
    setBalance(balance) { this._balance = balance }

    getAccountNo() { return this._accountNo }

    toString() {
        return `
        Acc No : ${this.getAccountNo()}
        Balance : ${this.getBalance()}
       `
    }

}