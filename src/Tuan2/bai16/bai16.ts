

function promise16(input:string,time:number):Promise<string>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(input)
        }, time);
    })
}

const task4 = promise16("Task 4",1000);
const task5 = promise16("Task 5",2000);
const task6 = promise16("Task 6",3000);

async function promiseTest16(){
    const results = await Promise.all([task4,task5,task6]);
    console.log(results);
}


promiseTest16();
