import logo from './logo.svg';
import Searchbar from './components/Searchbar'
import Weather from './components/Weather'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Redux Weather App</h1>
      <Searchbar/>
      <Weather/>
    </div>
  );
}

export default App;
