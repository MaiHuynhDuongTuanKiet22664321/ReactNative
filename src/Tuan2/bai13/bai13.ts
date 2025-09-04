
function  getNumber(check:boolean):Promise<string> {
    return new Promise((resolve, reject) => {
        if(check){
            resolve("success");
        }else{
            reject("Error: something went wrong");
        }
    });
}


async function test12(){
    try {
        const result = await getNumber(false);   
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}


test12()