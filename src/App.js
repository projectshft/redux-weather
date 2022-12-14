import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import Graphs from './components/Graphs';

function App() {
  return (
    <div className="App">
      <h1>Redux Weather App</h1>
      {/* <SearchBar/> */}
      <Graphs/>
    </div>
  );
}

export default App;
