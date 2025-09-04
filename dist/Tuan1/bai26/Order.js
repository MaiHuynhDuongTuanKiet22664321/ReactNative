"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Order {
    constructor(id, products) {
        this.id = id;
        this.products = products;
    }
    getTotalPrice() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}
const order1 = new Order(1, [new Product("Laptop", 1200), new Product("Mouse", 25)]);
console.log(`Total price of order 1: $${order1.getTotalPrice()}`);
