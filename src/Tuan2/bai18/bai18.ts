interface User{
    id:number,
    name:string,
    email:string
}

function getUser(id:number):Promise<User>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({id,name:`User ${id}`,email:`user${id}@example.com`})
        }, 1000);
    })
}   

async function run() {
  try {
    const user: User = await getUser(1);
    console.log("User nhận được:", user);
  } catch (error) {
    console.error("Có lỗi xảy ra:", error);
  }
}

run();