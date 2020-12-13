// binary heap
// = heap data structure that takes the form of a binary tree
// + better than O(n), priority, flexible size, fast insert
// - slow lookup
// A max-heap is a complete binary tree in which the value in each internal node is greater than or equal to 
// the values in the children of that node (root node is the greatest)
// a min heap - root node is the smallest
// DON'T confuse with memory heap, that's not a heap data structure

// lookup O(n) // unlike binary tree with heaps left and right can be any value as long as it's less than parent, slower operation
// insert O(log n)
// delete O(log n)

// e.g. findMax is O(1) as it's the root node

//       101
//      /   \
//    72     33
//   /\      /\
// 2   45   5  1

// good for comparison operations, e.g. to find nodes with values over 33 (that would be O(n) with BST)
// they take up the least amount of space possible, insertion from left to right
// no problems with unbalanced binary heaps

// priority queues
// each element has a priority and elements with higher priority are served before elements with lower priority
// e.g. queue to get to a club, some vip members have priority; emergency room; boarding a plane