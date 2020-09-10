import Graph from '../../models/Graph';

const initialState = new Graph([]);

export default function graph(state = initialState, action) {
  switch (action.type) {
    case 'SET_GRAPH': {
      const { graph } = action.payload;
      return graph;
    }
    case 'RESET_GRAPH': {
      // const { graph } = action.payload;
      return new Graph([]);
    }
    default:
      return state;
  }
}