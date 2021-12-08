'use strict';

const Vertex = require('./vertex.js');
const Edge = require('./edge.js');

class Graph {
  // add method should specify direct or undirected
  constructor() {
    this.edges = new Map();
    this.vertices = new Set();
    this.numVertex = 0;
  }

  getSize() {
    return this.numVertex++;
  }

  // adding a vertex to our edges
  addVertex(value) {
    let newVertex = new Vertex(value);
    this.numVertex++;

    // 2nd argument is an array to store edges
    this.edges.set(newVertex, []);
    this.vertices.add(newVertex);

    // for simplicity, but return a vertex when you've added it to a graph, is unusual
    return newVertex;
  }

  // add method should specify direct vs undirected, adding a connection between vertices
  addDirectedEdge(startVertex, endVertex, weight = 0) {

    if (!this.edges.has(startVertex) && !this.edges.has(endVertex)) {
      throw new Error('Sorry partner, vertex error');
    }
    // what should we do to add them to our adjacency values
    let neighbors = this.edges.get(startVertex);
    let newEdge = new Edge(endVertex, weight);
    neighbors.push(newEdge);
  }

  getVertexes() {
    return this.vertices;
  }

  // helper method
  getNeighbors(vertex) {
    if (!this.edges.has(vertex)) {
      return null;
    }
    return [...this.edges.get(vertex)]; // I do not want to mutate the array, just want the values
  }

  // traversal using a queue
  breadthFirst(startVertex) {
    if (!startVertex) {
      return null;
    }

    // define queue and visited <Map>
    let queue = [];
    let visitedVertex = new Set();

    // push start node into the queue and visitedVertex
    queue.push(startVertex);
    visitedVertex.add(startVertex);

    while (queue.length) { // while there are still vertices in my queue

      const current = queue.shift(); // rip the first thing off ----- need to see all adjacencies ----- declares the front

      let neighbors = this.getNeighbors(current); // edge cases -> current doesn't exist

      for (let edge of neighbors) { // could be let neighbor of neighbors
        let neighbor = edge.vertex;

        if (!visitedVertex.has(neighbor)) {
          queue.push(neighbor);
          visitedVertex.add(neighbor);
        } else {
          continue;
        }
      }
    }
    return visitedVertex;
  }

}

let graph = new Graph();

let A = graph.addVertex('A');
let B = graph.addVertex('B');
let C = graph.addVertex('C');
let D = graph.addVertex('D');
let E = graph.addVertex('E');
let F = graph.addVertex('F');
let G = graph.addVertex('G');
let H = graph.addVertex('H');

graph.addDirectedEdge(A, D);
graph.addDirectedEdge(A, C);
graph.addDirectedEdge(A, B);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(B, C);
graph.addDirectedEdge(B, E);
graph.addDirectedEdge(C, F);
graph.addDirectedEdge(C, E);
graph.addDirectedEdge(C, B);
graph.addDirectedEdge(F, G);
graph.addDirectedEdge(G, H);
graph.addDirectedEdge(H, F);

// console.log('GET GRAPH: GRAPH: ', graph);
// console.log('GET BREADTHFIRST: A: ', graph.breadthFirst(A));
// console.log('GET NEIGHBORS: EDGES: ', graph.edges);
console.log('GET VERTEXES: VISITEDVERTEXES: ', graph.getVertexes());
console.log('GET SIZE: VERTICES: ', graph.getSize());

module.exports = Graph;
