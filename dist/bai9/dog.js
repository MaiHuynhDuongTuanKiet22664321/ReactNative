"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
class Dog {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    sound() {
        return "Woof woof!";
    }
}
exports.Dog = Dog;
