let currentId = 1;

const resultsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RESULT':

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

      currentId++;

      return [...state, result];

    default:
      return state;
  }
}

export default resultsReducer;