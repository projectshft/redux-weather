import ForecastTable from "./components/ForecastTable";
import { useDispatch } from "react-redux";
import { fetchForecast } from "./actions";
import { useState } from "react";

function App() {
  const [cityName, setCityName] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    if (cityName) {
      dispatch(fetchForecast(cityName));
    }
  };

  return (
    <div className="container app">
      <div className="row">
        <div className="column col-md-8 offset-md-2">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Get a five-day forecast in your favorite cities"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
            <div className="input-group-append">
              <button
                onClick={() => handleClick()}
                className="btn btn-primary"
                type="button"
              >
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
