import find from 'lodash/find'
import pull from 'lodash/pull'
import min from 'lodash/min'
 class Graph {
  constructor(edges) {
    this.edges = edges;
    this.vertexes = [];
    edges.map(edge => {
        if (this.vertexes.indexOf(edge.start) == -1)
          this.vertexes.push(edge.start)
        if (this.vertexes.indexOf(edge.end) == -1) this.vertexes.push(edge.end)
      });
  }

   dijkstra(source, goal) {
    const dist = {}
    const prev = {}
    let queue = []
     this.vertexes.map(vertex => {
      dist[vertex] = Infinity
      prev[vertex] = null
      queue.push(vertex)
    })
     dist[source] = 0
     while (queue.length > 0) {
      let tempVal = Infinity
      let vertex = null
      for (let index = 0; index < queue.length; index++) {
        if (dist[queue[index]] < tempVal) {
          vertex = queue[index]
          tempVal = dist[queue[index]]
        }
      }
      if (vertex === goal) {
        break
      }
      queue = pull(queue, vertex)
      this.edges.filter(edge => edge.start === vertex).map(edge => {
        const alt = dist[vertex] + edge.weight
        if (alt < dist[edge.end]) {
          dist[edge.end] = alt
          prev[edge.end] = vertex
        }
      })
    }
    return dist[goal]
  }
   findBestPath(route) {
    const beginning = route.charAt(0);
    const end = route.charAt(1);
    console.log('!!!');
    const bestPath = min(
      this.edges
        .filter(edge => edge.start === beginning)
        .map(edge => edge.weight + this.dijkstra(edge.end, end))
    );
    return bestPath ? `The cost of cheapest delivery on the route ${route} is ${bestPath}` : 'NO SUCH ROUTE';
  }
   weightOfPathFromString(str) {
    const weight = this.weightOfPath(str.split(''));
    return (weight === -1) ? 'NO SUCH ROUTE' : `The cost of route ${str} is ${weight}`
  }
   weightOfPath(map) {
    let distance = 0
    for (let index = 0; index < map.length - 1; index++) {
      const start = map[index]
      const end = map[index + 1]
      const way = find(
        this.edges,
        edge => edge.start === start && edge.end === end
      )
      if (!way) {
        distance = -1
        break
      } else {
        distance += way.weight
      }
    }
    return distance
  }
   countTrips(trip, location, goal, ceiling, comparator) {
    const soFar = [...trip, location]
    if (comparator(trip, ceiling) && location === goal) {
      return 1
    } else if (trip.length >= ceiling) {
      return 0
    } else {
      return [...this.edges]
        .filter(edge => edge.start === location)
        .reduce(
          (sum, edge) =>
            sum + this.countTrips(soFar, edge.end, goal, ceiling, comparator),
          0
        )
    }
  }
   countTripsWithLessThanNStops(route, stops) {
    const source = route.charAt(0);
    const goal = route.charAt(1);
    return this.countTrips(
      [],
      source,
      goal,
      stops + 1,
      (trip, ceiling) => trip.length < ceiling && trip.length > 1
    )
  }
} 

export default Graph