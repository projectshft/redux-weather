import logo from './logo.svg';
import './App.css';
import searchBar from './components/searchBar';
import WeatherGraphs from './components/WeatherGraphs';

function App() {
  return (
    <div className="App">
      <h1>Redux Weather App</h1>
      <searchBar/>
      <WeatherDisplay/>
    </div>
  );
}

export default App;
