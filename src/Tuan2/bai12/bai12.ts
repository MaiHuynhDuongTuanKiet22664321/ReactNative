
function simulateTask12(time:number):Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Task done");
        },time)
    })
}


async function promiseTest12(){
    const result = await   simulateTask12(2000);   
    console.log(result)
}


promiseTest12()