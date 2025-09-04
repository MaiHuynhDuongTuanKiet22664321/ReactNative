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
function addWith2(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number + 2);
        }, 3000);
    });
}
function mutipleWith3(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number * 3);
        }, 3000);
    });
}
function square(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number * number);
        }, 3000);
    });
}
function test15(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const result1 = yield addWith2(input);
        const result2 = yield mutipleWith3(result1);
        const result3 = yield square(result2);
        console.log(`Final result: ${result3}`);
    });
}
test15(10);
