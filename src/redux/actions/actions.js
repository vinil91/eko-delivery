import { SET_GRAPH, RESET_GRAPH, SET_CASE, SET_TEMPERATURE, SET_RATE, SET_INFO_LOADING } from './actionTypes';

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

export function setTemperature(city, temperature) {
  return {
    type: SET_TEMPERATURE,
    payload: { city, temperature }
  }
}

export function setRate(rate) {
  return {
    type: SET_RATE,
    payload: { rate }
  }
}

export function setInfoLoading(isInfoLoading) {
  return {
    type: SET_INFO_LOADING,
    payload: { isInfoLoading }
  }
}

export function asyncSetInfo() {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  return async (dispatch) => {
    const spbId = '498817';
    const userApiKey = 'cff9c1c23d29919e22bdde648539d450'
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?id=${spbId}&appid=${userApiKey}&units=metric`;
    const currencyUrl = 'https://api.exchangeratesapi.io/latest?base=USD';
    dispatch(setInfoLoading(true));
    await sleep(1000)
    try {
      const response = await fetch(currencyUrl);
      let json = await response.json();
      dispatch(setRate(Math.floor(json.rates.RUB*100)/100));
    } catch(e) {
      console.error("Ошибка Загрузки Курса Валют");
      dispatch(setRate(0));
    }
    try {
      const response = await fetch(weatherUrl);
      let json = await response.json();
      dispatch(setTemperature(json.name, json.main.temp));
    } catch(e) {
      console.error("Ошибка Загрузки Температуры");
      dispatch(setTemperature('', ''));
    }
    dispatch(setInfoLoading(false));
  }
}