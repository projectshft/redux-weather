import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { fetchCoordinates } from "./actions";
import { useEffect } from "react";
import WeatherList from "./components/weather-list"
import WeatherInput from "./components/weather-input"

function App() {
  console.log({fetchCoordinates})
  const dispatch = useDispatch();
  useEffect(() => {
  dispatch(fetchCoordinates('bangkok'));
},[])

const state = useSelector(state => console.log('state on app.js', state))




  return (
    <div>
    <WeatherInput />
    <WeatherList />
    </div>
  );
}

export default App;
