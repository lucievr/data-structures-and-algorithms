// HASH TABLES / hash maps / maps / dictionaries / objects
// data structure used to store keys/value pairs
// hash function = func that generates a value of fixed length for each input it receives
// example types of hash functions: md5, SHA-1, SHA-256

// uses a hash function to generate an index where an element is to be inserted or is to be located from
// || hashes the key, maps the hash into a memory address where the data is to be stored or retrieved from
// it is fast - we assume O(1) time complexity

// PROBLEM: hash collision, sometimes happens
// = when a hash function maps two different keys to the same table address
// when there is a collision it slows down reading and writing to O(n)
// resolution
// 1. Separate Chaining: the keys will share the same index
// 2. Linear Probing / Open Addressing: One will occuppy index 417 and the other the next free index, 418

// traditional objects - only have strings as keys

// ES6 - maps and sets added

// map - allows us to have a function or an array as a key, mantains insertion order (unlike objects)
const a = new Map();

// set - only stores the keys, no values
const b = new Set();

// create own hash function from scratch

class HashTable {
  constructor(size) {
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } // O(1) hash functions are very fast

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  } // O(1)

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } // O(1) - most of the times if there are no collisions
    return undefined;
  }

  // needs to loop over 50 times (allocated number of shelves) even if there are just 2 items, not very efficient
  keys() {
    const keysArray = [];
    console.log(this.data.length);
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');
myHashTable.set('apples', 9);
myHashTable.get('apples');
myHashTable.keys();
