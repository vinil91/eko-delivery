const initialState = { enteredLine: '', isWronglyParsed: false };

export default function userInput(state = initialState, action) {
  switch (action.type) {
    case 'SET_GRAPH': {
      const { enteredLine, isWronglyParsed } = action.payload;
      return { enteredLine, isWronglyParsed };
    }
    case 'RESET_GRAPH': {
      return { enteredLine: '', isWronglyParsed: false };
    }
    default:
      return state;
  }
}