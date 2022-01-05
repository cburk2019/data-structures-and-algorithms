# Graphs

## DSA Implementation

_[Graph Code - index.js](./Graph.js)_\
_[Graph Test Suite](./__tests__/graphs.test.js)_

## Business Trip Function

_[Business Trip - businessTrip.js](./business-trip/businessTrip.js)_
_[Business Trip Test Suite](./business-trip/__tests__/businessTrip.test.js)_

## Feature Tasks

- `addVertex`(value)
  - Arguments: value
  - Returns: The added node

  - Add a node to the graph

- `addDirectedEdge`(startVertex, endVertex, weight)
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing

  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge

  - Both nodes should already be in the Graph

- `getVertices`()
  - Arguments: none
  - Returns: all of the nodes in the graph as a collection (set, list, or similar)

- `getNeighbors`()
  - Arguments: node
  - Returns a collection of edges connected to the given node
    - Include the weight of the connection in the returned collection

- `getSize`()
  - Arguments: none
  - Returns the total number of nodes in the graph

- `Breadth First Traversal`()
  - Arguments: starting node
  - Returns a collection of nodes in the order they were visited

- `Depth First Traversal`()
  - Arguments: node
  - Returns a collection of nodes in their pre-order depth-first traversal order

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write tests to prove the following functionality:

1. Vertex / Node can be successfully added to the graph
    - it('Can successfully add a vertex to the graph')

2. An edge can be successfully added to the graph
    - it('Can successfully add an edge can to the graph')

3. A collection of all nodes can be properly retrieved from the graph
    - it('Can successfully return a collection of all vertexes in the graph')

4. All appropriate neighbors can be retrieved from the graph
    - it('Can retrieve all appropriate neighbors in the graph for a given vertex')

5. Neighbors are returned with the weight between nodes included
    - it('Can return the neighbors of a given vertex that include the weight between that vertex and each neighbor')

6. The proper size is returned, representing the number of nodes in the graph
    - it('Can return the proper size of the graph, i.e. the number of vertexes it contains')

7. A graph with only one vertex / node and edge can be properly returned
    - it('Can properly handle returning a graph that only has one vertex and one edge'

8. An empty graph properly returns null

9. If all vertices are connected, breadthFirst will return the full set of vertices in the map with no repeats
    - it('If all vertices are connected, breadthFirst will return the full set of vertices in the map with no repeats')

10. If no vertices are connected to the vertex argument, breadthFirst will return a set with just the one vertex
    - it('If no vertices are connected to the vertex argument, breadthFirst will return a set with just the one vertex')

11. Only the connected vertices will be returned in the breadthFirst set
    - it('Only the connected vertices will be returned in the breadthFirst set')

Write tests asserting the following business-trip functionality

1. When a trip is valid, the function returns true with a cost for the trip.
2. When a trip doesn't connect, the function returns false with a message for unconnected trips
3. When a city isn't in the graph, an error will be thrown
    - it('Can properly return null given an empty graph')

## Methods

### _`addVertex(value)`_

- Arguments: _value_
- Returns: the added vertex

- Adds a vertex to the graph

- Efficiency and Approach:
  - `Time` and `Space` are constant O(1). One item / vertex is added to the Map, and one item is added to a Set.

### _`addDirectedEdge(startVertex, endVertex, weight)`_

- Arguments: 2 vertices to be connected by the edge, weight (optional)
- Returns: n/a

- Adds a new edge between two vertices in the graph
- If specified, assigns a weight to the edge
- Both vertices should already be in the Graph

- Efficiency and Approach:
  - Time and Space are constant O91). One item is created, the data is fetched from a Map (constant) and the item is appended to the fetched data.

### _`getVertices()`_

- Arguments: none
- Returns: Set containing all vertices in Graph

- Returns all of the vertices in the graph as a collection (set, list, etc)

- Efficiency and Approach:
  - Time and SPace are constant O(1). Fetching a Set

### _`getNeighbors(vertex)`_

- Arguments: vertex
- Returns: collection of edges

- Returns a collection of edges connected to the given vertex. Includes the weight of the connection in the returned collection.

- Efficiency and Approach:
  - Time and Space are constant O(1). This method fetched the value from one item in a Map.

### _`getSize()`_

- Arguments: none
- Returns: integer

- Returns the total number of vertices in the Graph

- Efficiency and Approach:
  - Time and Space are constant O(1). This method retrieves the size value on a Set.

### _`breadthFirst(startVertex)`_

- Arguments: startVertex
- Returns: A collection of vertices / nodes in the order they were "visited".

- Returns the total number of vertices in the graph.

- Efficiency and Approach
  - Time and Space are O(n) because of the implementation of a `queue`. - Worst case is every vertex is visited and added to the queue, dequeued, and added to a Set.