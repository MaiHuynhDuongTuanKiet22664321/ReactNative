export class Account {
  public accountNumber: string;    // public field (ai cũng truy cập được)
  private balance: number;         // private field (chỉ trong class)
  readonly owner: string;          // readonly field (chỉ gán 1 lần trong constructor)

  constructor(accountNumber: string, owner: string, balance: number) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
  }

  // Public method để truy cập balance
  public getBalance(): number {
    return this.balance;
  }

  // Public method để thay đổi balance
  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

}
