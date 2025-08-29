"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
const Person_1 = require("../bai1/Person");
class Students extends Person_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }
    setGrade(grade1) {
        this.grade = grade1;
    }
}
exports.Students = Students;
