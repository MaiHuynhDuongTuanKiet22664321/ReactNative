"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bird = void 0;
class Bird {
    constructor(name) {
        this.name = name;
    }
    fly() {
        return `${this.name} fly`;
    }
}
exports.Bird = Bird;
