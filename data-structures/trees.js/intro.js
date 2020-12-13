// TREES
// abstract data type that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes
// e.g. DOM is a tree data structure

// binary tree
// A tree whose elements have at most 2 children  (left child & right child)

// lookup O(log n)
// insert O(log n)
// delete O(log n)

// perfect binary tree - all the leaf nodes are filled, there is no node that only has one child (either 0 or 2)
// the sum of the bottom nodes is equal to the sum of the remaining nodes + 1 [ 4 = (3 + 1)]

// Level 0: 2^0 = 1;
// Level 1: 2^1 = 2;
// Level 2: 2^2 = 4;
// Level 3: 2^3 = 8;

//        O
//      /   \
//    O      O
//   /\      /\
// O   O   O   O

// # of nodes = 2^h - 1; [2^3 - 1 = 7 nodes]
// (height starts from count of 1)
// log nodes = height

// log 100 = 2 //10^2 = 100

// O(log n) - divide & conquer, similar to looking through a phone book, you start with a letter, then narrow it down further