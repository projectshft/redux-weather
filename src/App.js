import ForecastTable from "./components/ForecastTable";
import CurrentLocationForecastBtn from "./components/CurrentLocationForecastBtn";
import { useDispatch, useSelector } from "react-redux";
import { fetchForecast } from "./actions";
import { useState } from "react";

function App() {
  const [cityName, setCityName] = useState("");
  const dispatch = useDispatch();
  const defaultCity = useSelector((state) => state.defaultCity);

  if (defaultCity) {
    dispatch(fetchForecast(defaultCity));
  }

  const handleSubmit = (e) => {
    if (cityName) {
      dispatch(fetchForecast(cityName));
      setCityName("");
    }

    e.preventDefault();
  };

  return (
    <div className="container app">
      <div className="row">
        <div className="text-center column col-md-8 offset-md-2">
          <form onSubmit={(e) => handleSubmit(e)}>
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
                  onClick={(e) => handleSubmit(e)}
                  className="btn btn-primary"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <CurrentLocationForecastBtn />
          <ForecastTable />
        </div>
      </div>
    </div>
  );
}

export default App;
