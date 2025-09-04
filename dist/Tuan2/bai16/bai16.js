"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function promise16(input, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(input);
        }, time);
    });
}
const task4 = promise16("Task 4", 1000);
const task5 = promise16("Task 5", 2000);
const task6 = promise16("Task 6", 3000);
function promiseTest16() {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield Promise.all([task4, task5, task6]);
        console.log(results);
    });
}
promiseTest16();
