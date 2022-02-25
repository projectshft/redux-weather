import SearchBar from './components/search-bar.js';
import ForecastDisplay from './components/forecast-display.js';

const App = () => {
  const wait = null;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 col-md-offset-2">
          <SearchBar />
          <ForecastDisplay />
        </div>
      </div>
    </div>
  );
};

export default App;
