import { FETCH_RESULT, RESULT, DEFAULT_RESULT_ID } from "../constants";

const localStorageResult = localStorage.getItem(RESULT) || JSON.stringify([]);

const localStorageDefaultResultId = localStorage.getItem(DEFAULT_RESULT_ID);
const defaultState = JSON.parse(localStorageResult).filter(result => result.id === JSON.parse(localStorageDefaultResultId)) || [];

if (defaultState[0]) 
  defaultState[0].id = 1;

localStorage.setItem(DEFAULT_RESULT_ID, JSON.stringify(1));
localStorage.setItem(RESULT, JSON.stringify(defaultState));

const resultsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_RESULT:

      const currentId = state.length + 1;

      const result = {
        id: currentId,
        name: action.payload.data.city.name,
        data: action.payload.data.list.map((result) => {
          return {        
            temperature: result.main.temp,
            pressure: result.main.pressure,
            humidity: result.main.humidity
          }
        })
      }

      localStorage.setItem(RESULT, JSON.stringify([...state, result]));

      return [...state, result];

    default:
      return state;
  }
}

export default resultsReducer;