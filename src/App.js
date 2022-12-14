import logo from './logo.svg';
import './App.css';
import './components/searchBar'

function App() {
  return (
    <div className="App">
      <h1>Redux Weather App</h1>
      <WeatherDisplay/>
    </div>
  );
}

export default App;
