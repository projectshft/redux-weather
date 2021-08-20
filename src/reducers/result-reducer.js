const resultsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RESULT':

      const result = {
        name: action.payload.data.city.name,
        data: action.payload.data.list.map((result) => {
          return {        
            id: result.dt,
            temperature: result.main.temp,
            pressure: result.main.pressure,
            humidity: result.main.humidity
          }
        })
      }
      
      debugger;

      return [...state, result];

    default:
      return state;
  }
}

export default resultsReducer;