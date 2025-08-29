"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const Employee_1 = require("./Employee");
class Manager extends Employee_1.Employee {
    constructor(name, salary, teamSize) {
        super(name, salary);
        this.teamSize = teamSize;
    }
    getTeamSize() {
        return this.teamSize;
    }
    setTeamSize(teamSize) {
        this.teamSize = teamSize;
    }
    manage() {
        return `${this.getName()} is managing a team of ${this.teamSize} people.`;
    }
}
exports.Manager = Manager;
