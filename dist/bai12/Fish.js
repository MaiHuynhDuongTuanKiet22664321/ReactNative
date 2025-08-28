"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = void 0;
class Fish {
    constructor(name) {
        this.name = name;
    }
    swim() {
        return `${this.name} is swimming`;
    }
}
exports.Fish = Fish;
