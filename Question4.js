//Write a function processArray that takes an array and a callback function as parameters. The function should apply the callback function to each element of the array and return a new array with the results. Use an anonymous function as the callback to double each number in the array.

const processArray = (array, callback) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
};
const numbers = [2, 3, 4, 5, 6, 7];
const doubleNumbers = processArray(numbers, (num) => num * 2);
console.log(doubleNumbers);
