//Define a function expression factorial that takes one number as a parameter and returns its factorial.

const factorial = (n) => {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
};

