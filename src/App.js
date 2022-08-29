import './App.css';
import Header from './components/Header'
import DisplayWeather from './containers/Display_Weather';
import SearchBar from './containers/Search_Bar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <DisplayWeather />
    </div>
  );
}

export default App;
