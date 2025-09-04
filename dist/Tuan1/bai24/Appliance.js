"use strict";
class Appliance {
}
class Fan extends Appliance {
    turnOn() {
        console.log("Fan is turned on.");
    }
}
class AirConditioner extends Appliance {
    turnOn() {
        console.log("Air conditioner is turned on.");
    }
}
const fan = new Fan();
fan.turnOn();
const airConditioner = new AirConditioner();
airConditioner.turnOn();
