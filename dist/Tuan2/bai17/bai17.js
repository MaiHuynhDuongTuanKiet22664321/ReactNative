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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
function fecthExample(input, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(input);
        }, time);
    });
}
const arrayOfPromises = [
    fecthExample("fecht first", 4000),
    fecthExample("fecht second", 2000),
    fecthExample("fecht third", 3000),
];
function promiseTest17() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, e_1, _b, _c;
        try {
            try {
                for (var _d = true, arrayOfPromises_1 = __asyncValues(arrayOfPromises), arrayOfPromises_1_1; arrayOfPromises_1_1 = yield arrayOfPromises_1.next(), _a = arrayOfPromises_1_1.done, !_a; _d = true) {
                    _c = arrayOfPromises_1_1.value;
                    _d = false;
                    const result = _c;
                    console.log(`Result: ${result}`);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = arrayOfPromises_1.return)) yield _b.call(arrayOfPromises_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
promiseTest17();
