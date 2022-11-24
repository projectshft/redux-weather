import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "./actions";
import { useEffect } from "react";
import WeatherList from "./components/weather-list"
import WeatherInput from "./components/weather-input"

function App() {

  const weather = useSelector((state)=> state.items)
  const dispatch = useDispatch();
//   useEffect(() => {
//   dispatch(fetchWeather('bangkok'));
// },[dispatch])


console.log('app',weather)

//to do 
//make new objects for every city looked up
//format data in charts

  return (
    <div>
    <WeatherInput />
    <WeatherList weather={ weather}/>
    </div>
  );
}

export default App;
