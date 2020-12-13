// STACKS
// is a linear data structure which follows a particular order in which the operations are performed. 
// The order may be LIFO (Last In First Out) or FILO (First In Last Out)
// with two main principal operations: Push, which adds an element to the collection, 
// and Pop, which removes the most recently added element that was not yet removed.
// e.g. browser history, undo button

// lookup O(n)
// pop O(1)
// push O(1)
// peek O(1)

//google
//udemy.com
//youtube
__________

// arrays - faster to access items in memory as they are located next to each other
// linked lists - items are scattered all over the memory, plus they take up extra memory because of the pointers
// however adding items will not increase memory, whereas with arrays it might be needed to double the allocated memory once we reach its limit
// => both suitable, depending on our operations and priorities

// QUEUES
// a linear structure which follows a particular order in which the operations are performed
// the order is FIFO (First In First Out)
// adding entities to the end of the sequence and removing entities from the beginning of the sequence
// e.g. waitlist app for tickets, table reservations, Uber or Bolt when you grab a ride, printer queue

// lookup O(n)
// enqueue O(1) [push]
// dequeue o(1) [pop for first person]
// peek O(1)

// Matt -- Joy -- Lucie -- Peggy

// arrays - NOT suitable
// once we remove the first item (dequeue), we need to shift all the remaining indexes
// linked lists

// stacks + queues
// + fast operations, fast peek, ordered
// - slow lookup