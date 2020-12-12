// LINKED LISTS
// + fast insertion, fast deletion, ordered, flexible size
// - slow lookcup, more memory
// implemented in file system, browser history...
// consists of nodes which together represent a sequence
// a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list
// their order is not given by their physical placement in memory, instead each element point to the next
// advantage over hash tables - it is ordered; advantage over arrays - insertion and deletion is faster, no need to shift all indeces

// prepend O(1)
// append O(1)
// lookup O(n) [worst case]
// insert O(n) [worst case]
// delete O(n) [worst case]

// pseudo-code:

// linked list: apples --> grapes --> pears
// apples (head)
// 8947 --> grapes
//           8742 --> pears (tail)
//                     372 --> null

// pointers = references to address in memory

let obj1 = { a: true };
let obj2 = obj1; // creates a reference to obj1
// in our RAM there is only one entry { a: true }
// both obj1 and obj2 point to the same place in memory
obj1.a = 'foo'; // both objs show this value because⬆
delete obj1; // only obj1 reference is deleted from memory since obj2 is pointing to this value too
console.log('1', obj1); // reference error: obj1 not defined
console.log('2', obj2); // 2 { a: 'foo' }
obj2 = hello; // { a: 'foo' } gets garbage collected in JS and automatically deleted since there is no pointer to it
// vs in low level languages you need to manage the memory and manually delete { a: 'foo' }

// not built-in in JavaScript but we can create one from scratch

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) { // O(1)
    const newNode = new Node(value);
    console.log(newNode);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) { // O(1)
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  // (leader)* - *(leader.next)
  //           * (newNode) to be inserted above in between the two nodes
  insert(index, value) { // O(n)
    //Check for proper parameters;
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      console.log('yes');
      return this.append(value);
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    // need to find the index of the leader node, the linked list only has reference to head and tail indeces
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove (index) { // O(n)
    if (index < 0 || index >= this.length) {
      return this.printList();
    }
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  // !COMMON INTERVIEW QUESTION!
  // Basically you need to keep track of your own memory while iterating over the linked list. 
  // It's easily done with 3 pointers. Most of the work in the loop is setting up the next loop iteration.
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
 
    let curr = this.head;
    let prev = null;
    let next = null;
 
    while(curr !== null) {
      next = curr.next; // save next
      curr.next = prev; // reverse
      // setup next iteration
      prev = curr;
      curr = next;
    }
    this.tail = this.head;
    this.head = prev;
    return this.printList();
  }
}
  // or another solution
  // reverse() {
  //   if (!this.head.next) {
  //     return this.head;
  //   }
  //   let first = this.head;
  //   this.tail = this.head;
  //   let second = first.next;

  //   while(second) {
  //     const temp = second.next;
  //     second.next = first;
  //     first = second;
  //     second = temp;
  //   }

  //   this.head.next = null;
  //   this.head = first;
  //   return this.printList();
  // }
// Progressively switching the pointer direction of the nodes in the LL as you loop through it
// initial state : START --> 1 --> 2 --> 3 --> 4 --> END
// step 1 : START <-- 1 --> 2 --> 3 --> 4 --> END
// step 2 :  START <-- 1 <-- 2 --> 3 --> 4 --> END
// step 3 : START <-- 1 <-- 2 <-- 3 --> 4 --> END
// and so on . . .
// final state : START <-- 1 <-- 2 <-- 3 <-- 4<-- END
// and the swap the 'START' & 'END' references i.e 4 becomes the head and 1 becomes the tail

// we could copy and reverse the list, but this is about pointer storage and manipulation
// watch https://www.youtube.com/watch?v=D7y_hoT_YZI and https://www.youtube.com/watch?v=O0By4Zq0OFc 

// I know it's hard but try to think about how computers allocate memory for values:
// When I say something like:
// let a = 1
// let b = a
// Behind the scenes, in this case in the JavaScript runtime the computer is saying...
// 1) I will allocate memory for "a" which will store the variable of 1 in a unique address (arbitrary number for the imaginary address: X1).
// 2) Oh you want me to make "b" the same value as "a" (1). Alright! But before, what is the type of value of a? Oh, is a primitive...alright. Because primitives usually don't take much memory I'll store b(1) in a different address (eg: X2)
// 3) Therefore if i modify either "a" or "b", it doesn't affect the other one.

// However, if the computer sees an object, the computer goes like this:
// let a = {}
// let b = a
// 1) I will allocate memory for "a" which will store the variable of 1 in a unique address (arbitrary number for the imaginary address: X1).
// 2) Oh you want me to make "b" the same value as "a" ({}). Alright! But before, what is the type of value of a? Oh, is an OBJECT (Hash table)...alright. Because hash tables tend to get huge and I don't want to waste too much memory I'll will POINT to the same address (eg: X1)
// 3) Therefore if i modify either "a" or "b", it DOES AFFECT each other because they are pointing to the same place.
// In the video this.head = OBJECT , this.tail = OBJECT.
// In the reverse() function both first and second are variable only pointing to different addresses at a given time. Try to visualise it.

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);

// LinkedList {
//   head: { value: 1, next: { value: 10, next: { value: 16, next: null } } },
//   tail: { value: 16, next: null },
//   length: 4
// }

