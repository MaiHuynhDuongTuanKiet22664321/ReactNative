export function bai9(arr: number[]): Promise<number[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr.filter((item)=>
        item%2 === 0
      ))
    }, 1000);
  });
}