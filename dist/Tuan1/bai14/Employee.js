"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work() {
        return `${this.name} is working.`;
    }
    getName() {
        return this.name;
    }
    getSalary() {
        return this.salary;
    }
    setName(name) {
        this.name = name;
    }
    setSalary(salary) {
        this.salary = salary;
    }
}
exports.Employee = Employee;
