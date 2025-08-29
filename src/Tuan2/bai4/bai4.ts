export const getRandomNumber: Promise<number> = new Promise((resolve, reject) => {
  const number: number = Math.random(); // random number between 0 and 1

  setTimeout(() => {
    if (number > 0.2) {
      resolve(number);
    } else {
      reject("Random number too low!");
    }
  }, 1000); // simulate 1 second delay
});