import BankAccount from "./bank-account.js"

export default class SavingAccount extends BankAccount {
    static minBalance = 500
    static benefitPercentage = 0.6

    constructor(balance) {
        super(balance)
    }

    distributeBenefit() {
        const newBalance = this.getBalance() + (this.getBalance() * benefitPercentage)
        this.setBalance(newBalance)
    }

    toString() {
        return `
        ${super.toString()}
        Min Balance :  ${SavingAccount.minBalance}
        Benefit Percentage :  ${SavingAccount.benefitPercentage}
        `
    }

}