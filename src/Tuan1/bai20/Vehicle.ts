import { c } from "framer-motion/dist/types.d-Bq-Qm38R";

interface Vehicle {
    name:string;
    price:string;
    showVehicle():void
}

class car implements Vehicle {

    name: string;
    price: string;

    constructor(name: string, price: string) {
        this.name = name;
        this.price = price;
    }
    showVehicle(): void {
        console.log(`Name:${this.name} Price:${this.price}`);
    }
}

class Bike implements Vehicle {
    name: string;
    price: string;

    constructor(name: string, price: string) {
        this.name = name;
        this.price = price;
    }
    showVehicle(): void {
        console.log(`Name:${this.name} Price:${this.price}`);
    }
}

const car1 = new car("Honda", "1000000");
car1.showVehicle()

const bike1 = new Bike("Tay ga", "1000000");
bike1.showVehicle()