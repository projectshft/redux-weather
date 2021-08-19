import "./App.css";
import WeatherList from "./components/weather_list";
import SearchBar from "./components/searchbar";

const App = () => {
  return (
    <div className='App container'>
      <h1>Project Weather</h1>
      <hr></hr>
      <SearchBar />
      <hr></hr>
      <WeatherList />
    </div>
  )
}

export default App;