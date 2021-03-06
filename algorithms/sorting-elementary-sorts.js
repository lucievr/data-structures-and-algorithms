// SORTING
// sorting and searching are one of the biggest computer science problems in the software world
// v important and widely used, we often need data sorted in a meaningful way rather than just in a random order
// e.g. sorting of products on Amazon, films & shows on Netflix...
// these companies need custom sorting based on the data, built-in sort methods like .sort() won't do
// => lower the number of operations performed and lower their costs

// other issues with .sort() in js - it converts items to strings and sorts them according to unicode character codes
// => doesn't work with numbers or localized characters with accents for example
// under the hood, V8 Chrome's engine uses quick sort or insertion sort (for smaller arrays) for .sort() method
// and Mozilla uses merge sort

// ELEMENTARY SORTS (bubble sort, insertion sort, selection sort)

// 1. bubble sort
// simple and one of the least efficient, bubbling up largest item, comparing two values and swaping positions if greater preceeds smaller
// O(n^2) time complexity
// O(1) space complexity

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const bubbleSort = (array) => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) { 
      if(array[j] > array[j+1]) {
        //Swap the numbers
        let temp = array[j]
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }        
  }
}

bubbleSort(numbers);
console.log(numbers);

// 2. selection sort
// finding the smallest item in each iteration and placing it to the front, ifirst to index 0, then 1 etc.
// O(n^2) time complexity
// O(1) space complexity

const selectionSort = (array) => {
  const length = array.length;
  for(let i = 0; i < length; i++){
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for(let j = i+1; j < length; j++){
      if (array[j] < array[min]){
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);

// 3. insertion sort
// is super fast if we have only a few items or items are mostly sorted

const insertionSort = (array) => {
  const length = array.length;
	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i,1)[0]);
    } else {
      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i-1]) {
        //find where number should go
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j-1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j,0,array.splice(i,1)[0]);
          }
        }
      }
    }
	}
}

insertionSort(numbers);
console.log(numbers);

//#1 - Sort 10 schools around your house by distance:
// => insertion sort
// just a few items, probably partially sorted

//#2 - eBay sorts listings by the current Bid amount:
// => radix or counting sort
// bid amounts are integers within a fixed range (probably between 0 and $1000)

//#3 - Sort scores on ESPN
// => Quick sort
// slightly better on memory than merge, very diverse data here

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// => Merge Sort
// if memory is not an issue, I care more about speed/performance, especially if the data is so big, we don't want to risk worst case of quick sort O(n^2)

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// => Insertion Sort

//#6 - Temperature Records for the past 50 years in Canada
// radix or counting Sort
// Quick sort if decimal places

//#7 - Large user name database needs to be sorted. Data is very random.
// probably Quick sort to save on memory (vs merge)

//#8 - You want to teach sorting
// Bubble sort or Selection sort