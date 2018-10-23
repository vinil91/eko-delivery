import Edge from '../models/Edge';

const parser = (data) => {
  let id = 0;
  return data.split(',').map(route => new Edge(id += 1, route[0], route[1], route.substring(2)));
};

export default parser;
