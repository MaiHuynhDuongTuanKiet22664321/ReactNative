export const bai8 = () => {
  Promise.resolve(2)
  .then((num) => {
    const squared = num * num;
    console.log("Squared:", squared);
    return squared;
  })
  .then((squared) => {
    const doubled = squared * 2;
    console.log("Doubled:", doubled);
    return doubled;
  })
  .then((doubled) => {
    const result = doubled + 5;
    console.log("Final Result:", result);
    return result;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

};