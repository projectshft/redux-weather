import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "./actions";
import { useEffect } from "react";
import WeatherList from "./components/weather-list"
import WeatherInput from "./components/weather-input"

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
  dispatch(fetchWeather('bangkok'));
},[])


  return (
    <div>
    <WeatherInput />
    <WeatherList />
    </div>
  );
}

export default App;
