"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloAsync = void 0;
exports.helloAsync = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000); // 2000 milliseconds = 2 seconds
});
