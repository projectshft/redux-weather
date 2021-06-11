import ForecastTable from "./components/ForecastTable";

function App() {
  return (
    <div className="container app">
      <div className="row">
        <div className="column col-md-8 offset-md-2">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Get a five-day forecast in your favorite cities"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                Submit
              </button>
            </div>
          </div>
          <ForecastTable />
        </div>
      </div>
    </div>
  );
}

export default App;
