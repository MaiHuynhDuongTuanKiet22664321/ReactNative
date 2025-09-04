"use strict";
class Box {
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log(this.value);
    }
}
let box = new Box(10);
box.display();
