export function fetchWeather(city){

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=75e7ccabdef5725374998f0c3f3798b2`;

  return function(dispatch){
    fetch(url)  
    .then(response => {
      return response.json();
    })
    .then(data => {
      dispatch({
        type: 'GET_WEATHER',
        payload: data
      }).catch(err => {
        console.log(err);
      })
    })
  }
}
