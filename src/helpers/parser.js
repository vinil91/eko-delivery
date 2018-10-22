import Node from '../models/Node';

const parser = (data) => {
  let id = 0;
  return data.split(',').map(node => new Node(id++, node[0], node[1], node.substring(2)));
};

export default parser;
