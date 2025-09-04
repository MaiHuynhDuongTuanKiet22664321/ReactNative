"use strict";
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(message);
    }
}
const logger = Logger.getInstance();
logger.log("Hello, world!");
