//Create an anonymous function that takes an array of numbers as an argument and returns the array with each number doubled. Assign this function to a variable called doubleArray.
//map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

const doubleArray = number => {
  return number.map(num => num * 2)
}
console.log(doubleArray([2, 3, 4]));
