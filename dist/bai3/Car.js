"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getBrand() {
        return this.brand;
    }
    setBrand(x) {
        this.brand = x;
    }
    getModel() {
        return this.model;
    }
    setModel(x) {
        this.model = x;
    }
    getYear() {
        return this.year;
    }
    setYear(x) {
        this.year = x;
    }
}
exports.Car = Car;
