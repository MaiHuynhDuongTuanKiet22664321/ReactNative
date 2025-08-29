"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateTask7 = simulateTask7;
function simulateTask7(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
