// Scalability: (in addition to Readability both contribute to good code)
// 1. speed = time complexity
// 2. memory = space complexity
// sometimes we need to trade off one for the other

// BIG O RULES

// Rule 1: Always worst Case
// Rule 2: Remove Constants
// Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
// O(a*b)
// + for steps in order
// * for nested steps
// Rule 4: Drop Non-dominant terms

// O(n) - big O of n or linear time
// as the number of elements increases the number of operations increases linearly/proportionally

'helloworldhowareyoutoday'.length // O(1) in JavaScript it's a property of an object, simple operation
// in other languages it might be O(n) if it's a func that iterates over each letter and returns a sum

const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
];
const large = new Array(10000).fill('nemo');

function findNemo2(fish) {
  let t0 = performance.now();
  for (let i = 0; i < fish.length; i++) {
    if (fish[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
  let t1 = performance.now();
  console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds.');
}

findNemo2(fish); // O(n) => 'nemo' may be at the very end of the array so it would run n times [Rule 1: worst case scenario]
findNemo2(large); // O(n) or O(10000) in this particular case

// O(1) - big O of one or constant time

const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2)

// Exercises

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}
funChallenge(); // Big O(3 + 4n) or O(n) [Rule 2]

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// Big O(4 + 7n) or O(n) [Rule 2]

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log('hi');
  }
}
// O(1 + n/2 + 100)
// => O(n) drop the constants [Rule 2]
// 101 and n/2 have negligent effect with scaling n so we can drop these

function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach((boxes) => console.log(boxes));

  boxes2.forEach((boxes) => console.log(boxes));
}
// O(a + b)
// [Rule 3]: Different inputs should have different variables
// if they were nested it would be O(a * b)

// O(n^2) or quadratic time

//Log all pairs of array (aa, ab, ac, ad, ae, ba, bb, bc, ...)
const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}
logAllPairsOfArray(boxes);
// O(n * n) or O(n^2) O of n squared of O of n to the power of 2

function printAllNumbersThenAllPairSums(numbers) {
  console.log('these are the numbers:');
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}
printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);
// O(n + n^2) => O(n^2) [Rule 4]: drop non-dominant terms, we only care about scale

// O(n!) - O n factorial - adding a loop for every element (probably won't see in practice, it's the most terrible one)
function nFacRuntimeFunc(n) {
  for (let i = 0; i < n; i++) {
    nFacRuntimeFunc(n - 1);
  }
}

// SPACE COMPLEXITY
// variables, data structures, function calls, allocations all add complexity

//#5 Space complexity O(1)
function boooo(n) {
  for (let i = 0; i < n; i++) { // O(1)
      console.log('booooo');
  }
}

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
  var hiArray = [];
  for (let i = 0; i < n; i++) {
      hiArray[i] = 'hi';
  }
  return hiArray;
}
// we're creating a new data structure and each item of the array is extra space

arrayOfHiNTimes(6)
