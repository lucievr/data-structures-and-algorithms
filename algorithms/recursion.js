// RECURSION
// - when you define something in terms of itself, it's a function that refers to itself inside of the function
// can cause stack overflow (if this happens in the browser it may crash or throw range error: maximum call stack size exceeded)

// recursive functions have 2 paths:
// 1. recursive case - call the func again and run it
// 2. base case - stop calling the function based on some condition

let counter = 0;
const inception = () => {
  if (counter > 3) {
    return 'done';
  }
  counter++;
  return inception();
};
// inception(inception(inception(inception())))

// factorial 5!

// 1! = 1 and 2! is 2 so we start from 2
const findFactorialIterative = (number) => {
  // O(n)
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
    console.log(answer);
  }
  return answer;
};
findFactorialIterative(5);

const findFactorialRecursive = (number) => {
  // O(n)
  if (number < 2) {
    return 1;
  }
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}; // 5 * 4 * 3 * 2

findFactorialRecursive(5); // 120

// fibonacci

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// 0  1  2  3  4  5  6  7   8   9   10  11   12 [indeces]
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

const fibonacciIterative = (n) => { // O(n)
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
};
fibonacciIterative(3);

const fibonacciRecursive = (n) => { // O(2^n) (without memoization) - exponential Big O - very bad!!
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

fibonacciRecursive(6);

// reverse a string

const reverseString = (str) => {
  let arrayStr = str.split("");
  let reversedArray = [];
  //We are using closure here so that we don't add the above variables to the global scope.
  const addToArray = (array) => {
    
    if(array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

reverseString('yoyo master');

const reverseStringRecursive = (str) => {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

reverseStringRecursive('yoyo master');
