"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coder = void 0;
const Employee_1 = require("./Employee");
class Coder extends Employee_1.Employee {
    constructor(name, salary, programmingLanguage) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;
    }
    code() {
        return `${this.getName()} is coding in ${this.programmingLanguage}.`;
    }
}
exports.Coder = Coder;
