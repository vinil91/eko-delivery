const initialState = { city: '', temperature: '', rate: '', isInfoLoading: false };

export default function info(state = initialState, action) {
  switch (action.type) {
    case 'SET_TEMPERATURE': {
      const { city, temperature } = action.payload;
      return { ...state, city, temperature };
    }
    case 'SET_RATE': {
      const { rate } = action.payload;
      return { ...state, rate };
    }
    case 'SET_INFO_LOADING': {
      const { isInfoLoading } = action.payload;
      return { ...state, isInfoLoading };
    }
    default:
      return state;
  }
}