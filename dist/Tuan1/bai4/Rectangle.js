"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getHeight() {
        return this.height;
    }
    setHeight(x) {
        this.height = x;
    }
    getwidth() {
        return this.width;
    }
    setwidth(x) {
        this.width = x;
    }
    areaOfARectangle() {
        return this.width * this.height;
    }
    perimeterOfARectangle(width, height) {
        return (width + height) * 2;
    }
}
exports.Rectangle = Rectangle;
