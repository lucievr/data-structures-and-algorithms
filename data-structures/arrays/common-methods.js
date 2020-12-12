// ARRAYS
// + fast lookups, fast push/pop, ordered
// - slow inserts, slow deletes

// Arrays in JavaScript are dynamic: their size is not predetermined, nor the type of data.
// we don't have to determine the size ahead, memory is automatically allocated unlike with static arrays (e.g. in C++)

const strings = ['a', 'b', 'c', 'd'];
// 4 * 4 = 16 bytes of RAM storage

const numbers = [1, 2, 3, 4, 5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

//push => Add a new element to the end of the array
strings.push('e'); // O(1) or sometimes could be O(n) if resizing is needed (js loops over the items, copies them and moves to a new location in memory)

//pop => Delete the last element of the array
strings.pop(); // O(1)
// decreasing the size of the array means not to look for a different location in memory

//unshift => Add one or more elements in the beginning of the array
strings.unshift('x'); // O(n)
// we have to loop through all remaining items and reassign the indeces after adding x to the beginning

//shift => Delete the first element of the array
strings.shift(); // O(n)

//splice => Remove, add or replace a new element indicate by index
strings.splice(2, 0, 'alien'); // O(n/2) only interated through half the array or O(n)

const names = ['Luis', 'John', 'Jose', 'Aaron'];
console.log(names.splice(0, 0, 'Fernando')); // Add Fernando to the beginning
console.log(names.splice(0, 1, 'Michelle')); // replace Fernando to Michelle
console.log(names.splice(0, 1)); // remove Michelle
console.log(names);

console.log(strings);

// In contrast to most languages, in Javascript arrays are objects, and values are stored in a hashtable, just like regular object values. As such:

// Access - O(1)
// Appending - Amortized O(1) (sometimes resizing the hashtable is required; usually only insertion is required)
// Prepending - O(n) via unshift, since it requires reassigning all the indexes
// Insertion - Amortized O(1) if the value does not exist. O(n) if you want to shift existing values (Eg, using splice).
// Deletion - Amortized O(1) to remove a value, O(n) if you want to reassign indices via splice.
// Swapping - O(1)