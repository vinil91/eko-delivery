const initialState = '';

export default function currentCase(state = initialState, action) {
  switch (action.type) {
    case 'SET_GRAPH': {
      return '';
    }
    case 'RESET_GRAPH': {
      return '';
    }
    case 'SET_CASE': {
      const { currentCase } = action.payload;
      return currentCase;
    }
    default:
      return state;
  }
}