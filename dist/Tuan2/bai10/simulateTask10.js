"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateTask10 = simulateTask10;
function simulateTask10(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
