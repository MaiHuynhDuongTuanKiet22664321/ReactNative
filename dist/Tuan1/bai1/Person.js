"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(name1) {
        this.name = name1;
    }
    getAge() {
        return this.age;
    }
    setAge(age1) {
        this.age = age1;
    }
}
exports.Person = Person;
