import WeatherIndex from './containers/WeatherIndex';
import SearchBar from './containers/SearchBar';
import './App.css';
import WeatherHeader from './components/WeatherHeader';

function App() {
  return (
    <div className="root">
      <SearchBar />
      <WeatherHeader />
      <WeatherIndex />
    </div>
  );
}

export default App;
