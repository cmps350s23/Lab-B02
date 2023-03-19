import SavingAccount from "./model/saving-account.js";

const accounts = [
    new SavingAccount(1000),
    new SavingAccount(200),
    new SavingAccount(1500),
    new SavingAccount(300),
]

accounts.forEach(acc => console.log(acc.toString()))