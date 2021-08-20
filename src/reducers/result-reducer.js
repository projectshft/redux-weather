const resultsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_RESULT':
      const resultsArr = action.payload.data.list.map((result) => {
        return {
          id: result.dt,
          temperature: result.main.temp,
          pressure: result.main.pressure,
          humidity: result.main.humidity
        }
      })
      
      return [...state, resultsArr];

    default:
      return state;
  }
}

export default resultsReducer;