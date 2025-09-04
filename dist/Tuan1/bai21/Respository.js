"use strict";
class Responsitory {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
}
const repository = new Responsitory();
repository.add(1);
repository.add(2);
repository.add(3);
console.log(repository.getAll());
