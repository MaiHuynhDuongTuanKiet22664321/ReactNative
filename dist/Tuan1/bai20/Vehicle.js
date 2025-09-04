"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    showVehicle() {
        console.log(`Name:${this.name} Price:${this.price}`);
    }
}
class Bike {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    showVehicle() {
        console.log(`Name:${this.name} Price:${this.price}`);
    }
}
const car1 = new car("Honda", "1000000");
car1.showVehicle();
const bike1 = new Bike("Tay ga", "1000000");
bike1.showVehicle();
