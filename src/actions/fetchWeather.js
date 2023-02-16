
export function fetchWeather(city){

  return function(dispatch) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=2e476490bb1ef8ffc44a25b310baf4b7${city}`)
    .then(res => {
      return res.json();
    })
    .then(JSONres => {
      dispatch({type:'FETCH_WEATHER', payload: JSONres});
    }).catch(err => {
      console.log(err);
    })
  }
}