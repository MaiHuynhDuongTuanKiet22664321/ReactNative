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
Object.defineProperty(exports, "__esModule", { value: true });
function mutipleWith3(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number * 3);
        }, 3000);
    });
}
function promiseTest14(input) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Input first: ${input}`);
        const result = yield mutipleWith3(input);
        console.log(`Result after 3 seconds: ${result}`);
    });
}
promiseTest14(5);
