'use strict';

// our connection from one Vertex to another
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

module.exports = Edge;
