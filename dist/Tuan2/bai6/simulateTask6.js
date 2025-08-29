"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateTask6 = simulateTask6;
function simulateTask6(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
