// SEARCHING & TRAVERSAL
// linear, binary, depth first search (DFS), breadth first seach (BFS)

// 1. linear or sequential search
// = method of finding a target value within a list
// worst case O(n) - we're looping through the entire array

// these built-in js methods all implement a linear search

const beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla'); // 1

beasts.findIndex((item) => item === 'Godzilla'); // 1

beasts.find((item) => item === 'Godzilla'); // Godzilla

beasts.includes('Godzilla'); // true

// 2. binary search
// = efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list
// that could contain the item, until you've narrowed down the possible locations to just one
// storing data in a binary tree is more efficient than in an array, if data is sorted we can search better than with O(n)
// by deciding whether to go left or right, we discard half of the items each step (divide and conquer approach)
// O(log n)

// 3. tree traversal
// = the process of visiting (checking and/or updating) each node in a tree data structure
// e.g. when you need to add some property to each node like colour or age, or when the data is in a tree that is not sorted or graph which is unordered
// O(n)
// for both, graph and tree traversal we can use BFS and DFS

// Breadth First Search/Traversal (BFS)
// you start with the root node, and then you move from left to right across the second level, and again l-r across the third etc.
// uses additional memory coz it is necessary to track the child nodes of all the nodes on a given level (we keep them in a queue)
//     9
//  4     20
//1  6  15  170
[9, 4, 20, 1, 6, 15, 170];

// Depth First Search/Traversal (DFS)
// it follows one branch of the tree down as many levels as possible until the target node is found or the end is reached
// when it reaches the end it continues with the nearest ancestor that has a child node/s and goes all the way down again etc.
// lower memory requirement than BFS (no need to store all the child pointers at each level)
//     9
//  4     20
//1  6  15  170
// [9, 4, 1, 6, 20, 15, 170];

// BFS vs DFS
// time complexity of both is O(n)
// space complexity of BFS is O(n) and for DFS as well, unless we use recursive approach which would be O(h) [worst case], h = max depth of a tree
// BFS is best for: finding the shortest path, for nodes that are closer (if you know the node is in higher level of the tree/graph)
// - downside: requires more memory
// DFS: is good at asking the question Does the path exist (from a source node to the target node)?, uses less memory than BFS
// - it can get slow if the tree/graph is really deep

// Comparison: which one is more suitable?

// If you know a solution is not far from the root of the tree:
// BFS (it start searching the closest nodes first)

// If the tree is very deep and solutions are rare, 
// BFS (DFS will take a really long time)

// If the tree is very wide:
// DFS (BFS will need too much memory)

// If solutions are frequent but located deep in the tree
// DFS (quicker than BFS in this case)

// determining whether a path exists between two nodes
// DFS

// Finding the shortest path
// BFS (closer nodes)

// GRAPH traversal/search
// BFS - e.g. Amazon - closest related item to the last book we bought, FB - friends of friends suggestions, Insta recommendations
// DFS - e.g. LinkedIn - what degree of connection I have with this CEO of a company, maze puzzle

// for finding shortest paths of weighted graphs we would use the following:
// 1. Bellman-Ford's algorithm
// + can accommodate for negative weights between nodes
// - takes longer to run, worst case time complexity of O(n^2)
// 2. Dijkstra's algorithm
// + faster and more efficient than the above
// - doesn't work on negative weights