//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// function firstRecurringCharacter(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if(input[i] === input[j]) {
//         return input[i];
//       }
//     }
//   }
//   return undefined
// }
// O(n^2) & O(1)
// this returns incorrect results!
// for [1,5,5,1,3,4,6] returns 1 instead of 5 as it compares [1,5], [1,5], [1,1]...

// this works though
const firstRecurringCharacterNaive = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
      if (array[j] === array[j + 1]) {
        return array[j];
      }
    }
  }
  return undefined;
};

const firstRecurringCharacter2 = (input) => {
  for (let i = 0; i < input.length; i++) {
    // O(n)
    if (input.indexOf(input[i]) !== i) {
      // O(n)
      return input[i];
    }
  }
  return undefined;
} // O(n^2) & O(1)

const firstRecurringCharacter3 = (input) => {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
} // O(n) & O(n)

firstRecurringCharacter3([1, 5, 5, 1, 3, 4, 6]);

const firstRecurringCharacter4 = (array) => {
  const map = new Map();
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (!map.hasOwnProperty(array[i])) {
        map[array[i]] = true;
      } else {
        return array[i];
      }
    }
  }
  return undefined;
}; // O(n) & O(n)

// previous 2 solutions return 5 instead of undefined because numbers get converted to strings as object keys
// solution: Map - allows objects and numbers to be keys
const firstRecurringCharacter5 = (arr) => {
  const hash = new Map();
  for (const item of arr) {
    if (!hash.get(item)) {
      hash.set(item, true);
    } else {
      return item;
    }
  }
  return undefined;
}; // O(n) & O(n)

firstRecurringCharacter5([2, 3, 4, 5, '5']); // -> undefined
