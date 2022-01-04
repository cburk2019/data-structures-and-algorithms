'use strict';

const Graph = require('../graph.js');
const businessTrip = require('../index.js');

describe('Testing Graph', () => {

  // build out trip graph with edges
  let tripGraph = new Graph();

  let Pandora = tripGraph.addVertex('Pandora');
  let Metroville = tripGraph.addVertex('Metroville');
  let Arendelle = tripGraph.addVertex('Arendelle');
  let Naboo = tripGraph.addVertex('Naboo');
  let Narnia = tripGraph.addVertex('Narnia');
  let Monstropolis = tripGraph.addVertex('Monstropolis');

  tripGraph.addDirectEdge(Pandora, Arendelle, 150);
  tripGraph.addDirectEdge(Pandora, Metroville, 82);

  tripGraph.addDirectEdge(Arendelle, Pandora, 150);
  tripGraph.addDirectEdge(Arendelle, Metroville, 99);
  tripGraph.addDirectEdge(Arendelle, Monstropolis, 42);

  tripGraph.addDirectEdge(Monstropolis, Arendelle, 42);
  tripGraph.addDirectEdge(Monstropolis, Naboo, 73);
  tripGraph.addDirectEdge(Monstropolis, Metroville, 105);

  tripGraph.addDirectEdge(Naboo, Monstropolis, 73);
  tripGraph.addDirectEdge(Naboo, Metroville, 126);
  tripGraph.addDirectEdge(Naboo, Narnia, 250);

  tripGraph.addDirectEdge(Narnia, Naboo, 250);
  tripGraph.addDirectEdge(Narnia, Metroville, 37);

  tripGraph.addDirectEdge(Metroville, Pandora, 82);
  tripGraph.addDirectEdge(Metroville, Arendelle, 99);
  tripGraph.addDirectEdge(Metroville, Naboo, 26);
  tripGraph.addDirectEdge(Metroville, Narnia, 37);
  tripGraph.addDirectEdge(Metroville, Monstropolis, 105);

  // sample city name inputs
  let cityArray1 = ['Metroville', 'Pandora'];
  let cityArray2 = ['Arendelle', 'Monstropolis', 'Naboo'];
  let cityArray3 = ['Naboo', 'Pandora'];
  let cityArray4 = ['Narnia', 'Arendelle', 'Naboo'];

  it('Can successfully return true along with trip price if trip is possible', () => {
    let trip1 = businessTrip(tripGraph, cityArray1);

    expect(trip1).toStrictEqual('True, $82');
  });

  it('Will return false with $0 if trip is not possible', () => {
    let trip3 = businessTrip(tripGraph, cityArray3);
    let trip4 = businessTrip(tripGraph, cityArray4);

    expect(trip3).toStrictEqual('False, $0');
    expect(trip4).toStrictEqual('False, $0');
  });

  it('Can successfully return total cost for a trip with multiple routes', () => {
    let trip2 = businessTrip(tripGraph, cityArray2);

    expect(trip2).toStrictEqual('True, $115');
  });

  it('Will return false with $0 if city array contains one city', () => {
    let trip1 = businessTrip(tripGraph, ['Metroville']);

    expect(trip1).toStrictEqual('False, $0');
  });
});
