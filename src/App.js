import Header from './components/header/Header';
import SearchBar from './components/search/SearchBar';
import './app.css';
import ForecastHeader from './components/weather/ForecastHeader';
import Forecast from './components/weather/Forecast';

function App() {
  return (
    <div className="container">
      <Header />
      <SearchBar />
      <hr className="hr" />
      <ForecastHeader />
      <Forecast />
    </div>
  );
}

export default App;
