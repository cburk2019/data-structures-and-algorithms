'use strict';

// our connection from one Vertex to another Vertex, creating an "Edge"
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

module.exports = Edge;
