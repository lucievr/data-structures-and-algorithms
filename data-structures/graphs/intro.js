// GRAPHS
// set of values that are related in a pair-wise way
// consists of a finite set of nodes (or vertices) and a set of edges connecting them.
// A pair (x,y) is referred to as an edge, which communicates that the x vertex connects to the y vertex
// e.g. fb social network, amazon recommendation engines, google maps for determining the shortest path to destination
// + great for relationships, networks
// - scaling is hard

// types:

// directed - all the edges are uni-directional i.e. the edges point in a single direction (edges with arrows)
// you can only go one way (one-way street, twitter - you may not follow back a follower)
// undirected - all the edges are bi-directional i.e. the edges do not point in any specific direction
// you can go back and worth (highway, fb friends - connected to each other)

// weighted - each edge is assigned a weight or cost (e.g. google maps for calculating optimal paths)
// vs unweighted

// cyclic - comprises a path that starts from a vertex and ends at the same vertex. That path is called a cycle.
// vs acyclic

// example how graph can be represented
//     2----0
//    / \
//   1---3

// edge list
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
]; // list of connections

// adjacent list
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]]; // by index which = value of the node
//               0     1       2       3

// adjacent matrix
const graph3 = {
  0: [0, 0, 1, 0], // 0 is connected to 2
  1: [0, 0, 1, 1], // 1 is connected to 2 and 3 etc.
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};

// create a graph using adjacent list

class Graph { 
  constructor() { 
    this.numberOfNodes = 0; 
    this.adjacentList = {}; 
  } 
  addVertex(node)  { 
    this.adjacentList[node] = []; 
    this.numberOfNodes++;
  } 
  addEdge(node1, node2) { 
    //uniderected Graph 
    this.adjacentList[node1].push(node2); 
    this.adjacentList[node2].push(node1); 
  } 
  showConnections() { 
    const allNodes = Object.keys(this.adjacentList); 
    for (let node of allNodes) { 
      let nodeConnections = this.adjacentList[node]; 
      let connections = ""; 
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      } 
      console.log(node + "-->" + connections); 
    } 
} 
} 

var myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

myGraph.showConnections(); 