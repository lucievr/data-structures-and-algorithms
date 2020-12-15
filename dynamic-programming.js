// dynamic programming
// = an optimization technique that uses caching
// caching is a way of storing values so that you can use them later on
// combining Divide & Conquer with Memoization

// memoization
// = a special form of caching which caches the return value of a function based on its parameters (remembering a solution so that we don't have to calculate it again)
// if the param doesn't change then it uses the cached return value (it doesn't perform the calculation/operation again)

const addTo80 = (n) => {
  console.log('long time');
  return n + 80;
};

// memoized
function memoizeAddTo80(n) {
  let cache = {};
  // using closure, so that we don't pollute global scope with variable cache (can't be used without closure in a recursive func or it would reset to {} each run)
  //  a closure gives you access to an outer function's scope from an inner function
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  };
}

const memoized = memoizeAddTo80();
console.log(1, memoized(6));
console.log(2, memoized(6));

// fibonacci

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

function fibonacciRecursive(n) { //O(2^n), large number of operations
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciRecursiveMemo() { //O(n)
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

function fibonacciRecursiveMemo2(n, cache = { 0: 0, 1: 1 }) { // using ES6 default params
  if (n in cache) {
    return cache[n];
  } else {
    cache[n] =
      fibonacciRecursiveMemo2(n - 1, cache) +
      fibonacciRecursiveMemo2(n - 2, cache);
    return cache[n];
  }
}

console.log(fibonacciRecursiveMemo2(4));

function fibonacciIterative(n) { // O(n) faster than memo recursive
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

const fasterFib = fibonacciRecursiveMemo();

console.log('Slow', fibonacciRecursive(5));
console.log('DP', fasterFib(5));
console.log('DP2', fibonacciIterative(5));
