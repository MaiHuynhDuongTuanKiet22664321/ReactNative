export class BankAccount {
    balance:number;

    constructor(initialBalance:number) {
        this.balance = initialBalance;
    }

    getBalance(): number {
        return this.balance;
    }

    setBalance(x : number): void{
        this.balance = x;
    }


     deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
        } else if (amount <= 0) {
            console.log('Withdrawal amount must be positive.');
        } else {
            console.log('Insufficient funds.');
        }
    }
    
}