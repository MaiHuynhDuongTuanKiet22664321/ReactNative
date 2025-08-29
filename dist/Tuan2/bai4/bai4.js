"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomNumber = void 0;
exports.getRandomNumber = new Promise((resolve, reject) => {
    const number = Math.random(); // random number between 0 and 1
    setTimeout(() => {
        if (number > 0.2) {
            resolve(number);
        }
        else {
            reject("Random number too low!");
        }
    }, 1000); // simulate 1 second delay
});
