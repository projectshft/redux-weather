import ChartHeader from "./chart-header";
import SearchBar from "../containers/search-bar";
import WeatherList from "../containers/weather-list";

// Root component
const App = () => {
  return (
    <div className="app container text-center">
      <div className="row">
        <div className="col-8 offset-2">
          <h1 className="m-4">Redux Blog</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-8 offset-2">
          <SearchBar />
        </div>
      </div>

      <div className="row">
        <div className="col-8 offset-2">
          <ChartHeader />
        </div>
      </div>

      <div className="row">
        <div className="col-8 offset-2">
        <WeatherList />
        </div>
      </div>
    </div>
  );
}
 
export default App;