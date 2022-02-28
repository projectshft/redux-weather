import ForecastResults from "../containers/forecast-results";
import SearchBar from "../containers/search-bar";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 offset-md-1 text-center">
          <div className="header">
            <h1>Weather Redux Project</h1>
            <hr />
          </div>
          <SearchBar />
          <ForecastResults /> 
        </div>
      </div>
    </div>
  )
}

export default App;
