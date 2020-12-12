// ARRAYS
// + fast lookups, fast push/pop, ordered
// - slow inserts, slow deletes

// Arrays in JavaScript are dynamic: their size is not predetermined, nor the type of data.
// we don't have to determine the size ahead, memory is automatically allocated unlike with static arrays (e.g. in C++)

// In contrast to most languages, in Javascript arrays are objects, and values are stored in a hashtable, just like regular object values. As such:

// Access - O(1)
// Appending - Amortized O(1) (sometimes resizing the hashtable is required; usually only insertion is required)
// Prepending - O(n) via unshift, since it requires reassigning all the indexes
// Insertion - Amortized O(1) if the value does not exist. O(n) if you want to shift existing values (Eg, using splice).
// Deletion - Amortized O(1) to remove a value, O(n) if you want to reassign indices via splice.
// Swapping - O(1)

// MUTATOR METHODS

const strings = ['a', 'b', 'c', 'd'];
// 4 * 4 = 16 bytes of RAM storage

const numbers = [1, 2, 3, 4, 5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

// push => Adds a new element to the end of the array
strings.push('e'); // O(1) or sometimes could be O(n) if resizing is needed (js loops over the items, copies them and moves to a new location in memory)

// pop => Deletes the last element of the array
strings.pop(); // O(1)
// decreasing the size of the array means not to look for a different location in memory

// unshift => Adds one or more elements at the beginning of the array
strings.unshift('x'); // O(n)
// we have to loop through all remaining items and reassign the indeces after adding x to the beginning

// shift => Deletes the first element of the array
strings.shift(); // O(n)

// splice => Removes, adds or replaces a new element indicated by start and end indeces, and optional 3rd arg of the new item
strings.splice(2, 0, 'alien'); // O(n/2) only interated through half the array or O(n)
console.log(strings);

const names = ['Luis', 'John', 'Jose', 'Aaron'];
console.log(names.splice(0, 0, 'Fernando')); // Add Fernando to the beginning
console.log(names.splice(0, 1, 'Michelle')); // replace Fernando to Michelle
console.log(names.splice(0, 1)); // remove Michelle
console.log(names);

// sort => Modifies the array, ordered by a compare Function, or if this compare function is not provided the default order is by the position of the Unicode values in the array
// 0(n log(n))
const names = ['Luis', 'Jose', 'John', 'Aaron'];
console.log(names.sort()); // (4) ["Aaron", "John", "Jose", "Luis"]

const users = [
  { name: 'Luis', age: 25 },
  { name: 'Jose', age: 20 },
  { name: 'Aaron', age: 40 },
];
const compareFuc = (item1, item2) => {
  return item1.age - item2.age;
};
console.log(users.sort(compareFuc));

const numbersArr = [8, 1, 34, 21, 14];
console.log(numbersArr.sort((a, b) => a - b));

// ACCESSOR METHODS

// concat => Creates a new array with the union of two or more arrays
// O(n)
const names1 = ['Luis', 'Jose'];
const names2 = ['John', 'Aaron'];
const newArray = names1.concat(names2, ['Michelle']);
console.log(newArray); // (5) ["Luis", "Jose", "John", "Aaron", "Michelle"]

// slice => Returns a shallow copy of a sub array between the start and end indeces
// O(n)
const users = [
  { name: 'Luis', age: 15 },
  { name: 'Jose', age: 18 },
  { name: 'Aaron', age: 40 },
];

const adults = users.slice(1, users.length);
console.log(adults); // (2) [{name: "Jose", age: 18}, {name: "Aaron", age: 40}]

const a = [1, 2, 3, 4];
const b = a.slice(-2);
// slice(-2) extracts the last two elements in the sequence
// slice(2,-1) extracts the third element through the second-to-last element in the sequence
a[3] = 5;
console.log(a); // -> [1,2,3,5]
console.log(b); // -> [3,4]

// indexOf => Returns the first index of the element that exists in the array or returns -1 if it doesn't exist
// O(n)
const names = ['Luis', 'Jose', 'John', 'Aaron'];
console.log(names.indexOf('John')); // 2
console.log(names.indexOf('Michelle')); // -1
