const weatherReducer = function(state = [], action) {
  switch (action.type) {
    case 'FETCH_WEATHER':
      if (!action.payload.data) {
        console.log('city not found- try a different one');
        return state;
      };
      const result = {
        name: action.payload.data.city.name,
        id: action.payload.data.city.id,
        data: action.payload.data.list.map((result) => {
          return {        
            temperature: result.main.temp,
            pressure: result.main.pressure,
            humidity: result.main.humidity
          };
        })
      };
      return[...state, result];
    default:
      return state;
  }
};

export default weatherReducer;