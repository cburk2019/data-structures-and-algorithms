'use strict';

function businessTrip(graph, cityArray) {

  let price = 0;

  // if city array contains only one city, return false
  if (cityArray.length === 1) {
    return `False, $${price}`;
  }

  // get all the vertices in the graph
  let vertices = graph.getNodes();

  // loop through the cityArray
  for (let i = 0; i < cityArray.length; i++) {

    // see if cityArray[i] exists in the adjacency table
    let currentCity = vertices.filter(city => city.value === cityArray[i])[0];

    // if there is no match, return false
    if (!currentCity) {
      return `False, $${price}`;
    }

    // if there is a match, get the neighbors of the vertex and filter them to see if the next city name in the city array shares an edge
    let edges = graph.getNeighbors(currentCity);
    let edgeMatch = edges.filter(city => city.vertex.value === cityArray[i + 1])[0];

    // if there's a match, take the edge weight and add it to the price, if its the last element in the array, return final price, if theres no match, return false
    if (edgeMatch) {
      price = (price + edgeMatch.weight);
    } else if (i === cityArray.length - 1) {
      return `True, $${price}`;
    } else {
      return `False, $${price}`;
    }
  }
}

module.exports = businessTrip;
