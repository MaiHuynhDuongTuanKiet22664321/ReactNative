"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    setName(name) {
        this.name = name;
    }
    setPrice(price) {
        this.price = price;
    }
}
exports.Product = Product;
