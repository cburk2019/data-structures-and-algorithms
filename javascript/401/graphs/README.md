# Graphs

## DSA Implementation

_[Graph Code - index.js](./graph.js)_\
_[Graph Test Suite](./__tests__/graphs.test.js)_

## Business Trip Function

_[Business Trip - businessTrip.js](./businessTrip.js)_
_[Business Trip Test Suite](./__tests__/businessTrip.test.js)_

## Feature Tasks

- add node
  - Arguments: value
  - Returns: The added node
  - Add a node to the graph

- add edge
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge
  - Both nodes should already be in the Graph

- get nodes
  - Arguments: none
  - Returns all of the nodes in the graph as a collection (set, list, or similar)

- get neighbors
  - Arguments: node
  - Returns a collection of edges connected to the given node
    - Include the weight of the connection in the returned collection

- size
  - Arguments: none
  - Returns the total number of nodes in the graph

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write tests to prove the following functionality:

1. Node can be successfully added to the graph
2. An edge can be successfully added to the graph
3. A collection of all nodes can be properly retrieved from the graph
4. All appropriate neighbors can be retrieved from the graph
5. Neighbors are returned with the weight between nodes included
6. The proper size is returned, representing the number of nodes in the graph
7. A graph with only one node and edge can be properly returned
8. An empty graph properly returns null

Write tests asserting the following business-trip functionality

1. When a trip is valid, the function returns true with a cost for the trip.
2. When a trip doesn't connect, the function returns false with a message for unconnected trips
3. When a city isn't in the graph, an error will be thrown
