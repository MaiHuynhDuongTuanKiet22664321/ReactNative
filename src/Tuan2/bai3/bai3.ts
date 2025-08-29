export const bai3 :Promise<string>= new Promise((rejects) => {
  setTimeout(() => {
    rejects("Something went wrong");
  }, 1000);
});

