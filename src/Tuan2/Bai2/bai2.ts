export const bai2 : Promise<number> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 1000); // 2000 milliseconds = 2 seconds
});

