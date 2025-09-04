import { c } from "framer-motion/dist/types.d-Bq-Qm38R";

function mutipleWith3(number: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number * 3);
        }, 3000);
    });
}


async function promiseTest14(input:number) {
    console.log(`Input first: ${input}`);
    const result = await mutipleWith3(input);
    console.log(`Result after 3 seconds: ${result}`);
}


promiseTest14(5);
