import find from 'lodash/find';
import pull from 'lodash/pull';
import min from 'lodash/min';

class Graph {
  constructor(edges) {
    this.edges = edges;
    this.vertexes = [];

    edges.forEach((edge) => {
      if (this.vertexes.indexOf(edge.start) === -1) this.vertexes.push(edge.start);
      if (this.vertexes.indexOf(edge.end) === -1) this.vertexes.push(edge.end);
    });
  }

  dijkstra(source, goal) {
    const dist = {};
    const prev = {};
    let queue = [];
    this.vertexes.map((vertex) => {
      dist[vertex] = Infinity;
      prev[vertex] = null;
      queue.push(vertex);
    });
    dist[source] = 0;
    while (queue.length > 0) {
      let tempVal = Infinity;
      let vertex = null;
      for (let index = 0; index < queue.length; index += 1) {
        if (dist[queue[index]] < tempVal) {
          vertex = queue[index];
          tempVal = dist[queue[index]];
        }
      }
      if (vertex === goal) {
        break;
      }
      queue = pull(queue, vertex);
      this.edges.filter(node => node.start === vertex).map((node) => {
        const alt = dist[vertex] + node.weight;
        if (alt < dist[node.end]) {
          dist[node.end] = alt;
          prev[node.end] = vertex;
        }
      });
    }
    return dist[goal];
  }

  findBestPath(route) {
    const start = route.charAt(0);
    const end = route.charAt(1);
    if (this.vertexes.indexOf(start) === -1 || this.vertexes.indexOf(end) === -1) {
      return `${route}: NO SUCH ROUTE`;
    }
    const routesWithSuitableStart = this.edges.filter(edge => edge.start === start);
    const pricesOfSuitableStarts = routesWithSuitableStart
      .map(edge => edge.weight + this.dijkstra(edge.end, end));
    const bestPath = min(pricesOfSuitableStarts);
    return bestPath ? `The cost of cheapest delivery on the route ${route} is ${bestPath}` : `${route}: NO SUCH ROUTE`;
  }


  countPathWeight(path) {
    const stopsArray = path.split('');
    let weight = 0;
    for (let i = 0; i < stopsArray.length - 1; i += 1) {
      const pointA = stopsArray[i];
      const pointB = stopsArray[i + 1];
      const suitableZone = find(this.edges, edge => edge.start === pointA && edge.end === pointB);
      if (suitableZone) {
        weight += suitableZone.weight;
      } else {
        weight = -1;
        break;
      }
    }
    return (weight === -1) ? `${path}: NO SUCH ROUTE` : `The cost of route ${path} is ${weight}`;
  }


  countTrips(passedWay, currentPoint, finishPoint, ceiling) {
    if (currentPoint === finishPoint && passedWay.length <= ceiling && passedWay.length !== 0) {
      return 1;
    } if (passedWay.length > ceiling) {
      return 0;
    }
    const passedWayWithCurrentPoint = [...passedWay, currentPoint];
    return this.edges
      .filter(edge => edge.start === currentPoint)
      .reduce(
        (sum, edge) => sum + this.countTrips(passedWayWithCurrentPoint, edge.end, finishPoint, ceiling),
        0,
      );
  }

  countTripsWithLessThanNStops(route, maxStops) {
    const start = route.charAt(0);
    const end = route.charAt(1);
    if (this.vertexes.indexOf(start) === -1 || this.vertexes.indexOf(end) === -1) {
      return `${route}: NO SUCH ROUTE`;
    }
    return `The number of possible delivery of route ${route} with a maximum
        of ${maxStops} stops is ${this.countTrips([], start, end, maxStops)}`;
  }
}

export default Graph;
