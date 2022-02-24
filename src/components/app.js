import ForecastResults from "./forecast-results";
import SearchBar from "./search-bar";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
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
