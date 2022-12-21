import './App.css';
import Heading from './components/Heading';
import SearchBar from './components/SearchBar';
import WeatherTable from './components/WeatherTable';
import { getWeather } from './actions/get-weather';

function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <SearchBar getWeather={getWeather} />
      <WeatherTable />
    </div>
  );
}

export default App;
