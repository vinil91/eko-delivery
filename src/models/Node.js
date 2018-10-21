export class Node {
    constructor(id, start, end, weight) {
      this.id = id
      this.start = start
      this.end = end
      this.weight = parseInt(weight, 10)
    }
  }