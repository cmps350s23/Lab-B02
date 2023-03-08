import { deposit, getAccount, withdraw } from "../bank.js";
import chai, { expect } from "chai";

//test case

describe("The Bank App ", () => {
    it("Deposit 500 to account 123 should return 1000", () => {
        deposit(123, 500)
        const newBalance = getAccount(123).balance
        expect(newBalance).to.equals(1000)
    })
    it("Withdraw 500 to account 123 should return 500", () => {
        withdraw(123, 500)
        const newBalance = getAccount(123).balance
        expect(newBalance).to.equals(500)
    })
})