export class Employee {
  private name: string;
  private salary: number;
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  work(): string {
    return `${this.name} is working.`;
  }

  getName(): string {
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }

  setName(name: string): void {
    this.name = name;
  }

  setSalary(salary: number): void {
    this.salary = salary;
  }
}
