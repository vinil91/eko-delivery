import Edge from '../models/Edge';
import Graph from '../models/Graph';

const parser = (data) => {
  const normalizeNodesIds = (nodes) => {
    let id = 1;
    return nodes.map(node => ({ ...node, id: id++ }))
  }
  let id = 0;
  const edges = data.split(',')
    .map(route => new Edge(id += 1, route[0], route[1], route.substring(2)));
  let correctParsedEdges = edges.filter((node) => node.start !== '*' && node.end !== '*' && node.weight !== '*');
  const isValueWronglyParsed = !(edges.length === correctParsedEdges.length);
  if (isValueWronglyParsed) {
    correctParsedEdges = normalizeNodesIds(correctParsedEdges);
  }
  const graph = new Graph(correctParsedEdges);

  return { graph, isValueWronglyParsed };
};

export default parser;
