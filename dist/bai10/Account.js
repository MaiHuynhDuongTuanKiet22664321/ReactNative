"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(accountNumber, owner, balance) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
    }
    // Public method để truy cập balance
    getBalance() {
        return this.balance;
    }
    // Public method để thay đổi balance
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
}
exports.Account = Account;
