import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import Charts from './components/Charts';

function App() {
  return (
    <div className="App">
      <h1>Redux Weather App</h1>
      {/* <SearchBar/> */}
      <Charts/>
    </div>
  );
}

export default App;
