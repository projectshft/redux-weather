const getWeather = ( temperature, humidity, pressure ) => {
  return {
    type: 'GET_WEATHER',
    payload: {
      temperature,
      humidity,
      pressure
    }
  }
};

