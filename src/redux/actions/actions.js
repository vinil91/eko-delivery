import { SET_GRAPH, RESET_GRAPH, SET_CASE } from './actionTypes';

export function setGraph(graph, enteredLine, isWronglyParsed) {
  return {
    type: SET_GRAPH,
    payload: { graph, enteredLine, isWronglyParsed }
  }
}

export function resetGraph() {
  return {
    type: RESET_GRAPH,
  }
}

export function setCase(currentCase) {
  return {
    type: SET_CASE,
    payload: { currentCase }
  }
}