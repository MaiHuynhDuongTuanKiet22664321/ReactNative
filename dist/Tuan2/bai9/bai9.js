"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai9 = bai9;
function bai9(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arr.filter((item) => item % 2 === 0));
        }, 1000);
    });
}
