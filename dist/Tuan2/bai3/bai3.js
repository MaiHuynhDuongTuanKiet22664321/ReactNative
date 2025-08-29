"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai3 = void 0;
exports.bai3 = new Promise((rejects) => {
    setTimeout(() => {
        rejects("Something went wrong");
    }, 1000);
});
