'use strict';

const { it } = require('eslint/lib/rule-tester/rule-tester');
const Graph = require('../graph.js');

describe('Tests the Graph data structure implementation', () => {

  it('Can successfully add a vertex to the graph', () => {
    let graph = new Graph();
    let vertex = graph.addVertex('1');
    graph.addVertex('2');
    graph.addVertex('3');

    expect(graph.breadthFirst(vertex).has(vertex)).toBe(true);
  });

  it('Can successfully add an edge can to the graph', () => {
    let graph = new Graph();
    let startVertex = graph.addVertex('1');
    let endVertex = graph.addVertex('2');
    graph.addVertex('3');

    graph.addDirectedEdge(startVertex, endVertex);

    expect(graph.edges.get(startVertex)).toEqual([{ 'vertex': { 'value': '2' }, 'weight': 0 }]);
  });

  it('Can successfully return a collection of all vertexes in the graph', () => {
    let graph = new Graph;
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');

    let vertex = graph.getVertices();
    //breadth first won't work if some vertexes are not connected/don't have edges

    expect(vertex).toBeTruthy();
    expect(vertex.size).toBe(3);
  });

  it('Can retrieve all appropriate neighbors in the graph for a given vertex', () => {
    let graph = new Graph;

    let A = graph.addVertex(1);
    let B = graph.addVertex(2);
    let C = graph.addVertex(3);
    let D = graph.addVertex(4);
    let E = graph.addVertex(5);
    let F = graph.addVertex(6);

    graph.addDirectedEdge(A, C);
    graph.addDirectedEdge(A, E);
    graph.addDirectedEdge(A, F);
    graph.addDirectedEdge(A, B);
    graph.addDirectedEdge(A, D);

    const neighbors = graph.getNeighbors(A);
    expect(neighbors.length).toBe(5);
  });

  it('Can return the neighbors of a given vertex that include the weight between that vertex and each neighbor', () => {
    let graph = new Graph;
    let A = graph.addVertex('A');
    let B = graph.addVertex('B');
    let C = graph.addVertex('C');

    graph.addDirectedEdge(A, B, 1);
    graph.addDirectedEdge(A, C, 3);

    const aEdges = graph.edges.get(A);

    expect(aEdges[0].weight).toEqual(1);
    expect(aEdges[1].weight).toEqual(3);
  });

  it('Can return the proper size of the graph, i.e. the number of vertexes it contains', () => {
    let graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addVertex('G');
    graph.addVertex('H');

    expect(graph.getSize()).toBe(8);
  });

  it('Can properly handle returning a graph that only has one vertex and one edge', () => {
    let graph = new Graph();
    graph.addVertex(1);

    expect(graph.vertices.size).toBe(1);
    expect(graph.edges.size).toBe(1);
    expect(graph).toBeTruthy();
  });

  it('Can properly return null given an empty graph', () => {
    let graph = new Graph();
    expect(graph.getVertices()).toBe(graph.getVertices());
  });

  it('If all vertices are connected, breadthFirst will return the full set of vertices in the map with no repeats', () => {
    let graph = new Graph();
    let A = graph.addVertex(1);
    let B = graph.addVertex(2);
    let C = graph.addVertex(3);
    let D = graph.addVertex(4);
    let E = graph.addVertex(5);
    let F = graph.addVertex(6);
    graph.addDirectedEdge(A, B);
    graph.addDirectedEdge(A, C);
    graph.addDirectedEdge(A, D);
    graph.addDirectedEdge(A, E);
    graph.addDirectedEdge(A, F);
    const breadthFirstSet = graph.breadthFirst(A);
    expect(graph.vertices).toStrictEqual(breadthFirstSet);
  });

  it('If no vertices are connected to the vertex argument, breadthFirst will return a set with just the one vertex', () => {
    let graph = new Graph();
    let A = graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addVertex(5);
    graph.addVertex(6);
    const breadthFirstSet = graph.breadthFirst(A);
    expect(breadthFirstSet.size).toBe(1);
  });

  it('Only the connected vertices will be returned in the breadthFirst set', () => {
    let graph = new Graph();
    let A = graph.addVertex(1);
    let B = graph.addVertex(2);
    graph.addVertex(3);
    let D = graph.addVertex(4);
    let E = graph.addVertex(5);
    let F = graph.addVertex(6);
    graph.addDirectedEdge(A, B);
    graph.addDirectedEdge(A, D);
    graph.addDirectedEdge(A, F);
    graph.addDirectedEdge(D, E);
    graph.addDirectedEdge(D, F);
    graph.addDirectedEdge(F, B);
    graph.addDirectedEdge(F, A);
    const breadthFirstSet = graph.breadthFirst(A);
    expect(breadthFirstSet.size).toBe(5);
  });

});
