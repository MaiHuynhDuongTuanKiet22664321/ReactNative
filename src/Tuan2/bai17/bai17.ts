

function fecthExample(input:string, time:number):Promise<string>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(input)
        }, time);
    })
}

const arrayOfPromises = [
    fecthExample("fecht first",4000),
    fecthExample("fecht second",2000),
    fecthExample("fecht third",3000),
]


async function promiseTest17(){
    try {
        for await(const result of arrayOfPromises){
        console.log(`Result: ${result}`);
    }
    } catch (error) {
        console.error(error);
    }
}

promiseTest17()