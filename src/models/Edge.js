class Edge {
  constructor(id, start = ' ', end = ' ', weight = ' ') {
    this.id = id;
    this.start = start.replace(/[^A-Z]/, '*');
    this.end = end.replace(/[^A-Z]/, '*');
    this.weight =  weight.match(/^\d+$/) ? parseInt(weight, 10) : '*';
  }
}

export default Edge;
