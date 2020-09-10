import Edge from '../models/Edge';

const parser = (data) => {
  let id = 0;
  const result = data.split(',')
    .map(route => new Edge(id += 1, route[0], route[1], route.substring(2)));
  return result;
};

export default parser;
