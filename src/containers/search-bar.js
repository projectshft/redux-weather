import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchForecast, setDefaultCity } from "../actions/index";
import axios from "axios";

const SearchBar = () => {
  const currCity = useSelector(state => {
    return state.forecast.forecast_data.city});

  const default_city = useSelector(state => {
    return state.default_city});


  const errors = useSelector((state) => {
    return state.forecast.error});

  const dispatch = useDispatch();

  useEffect(() => {
    if (default_city) {
      dispatch(fetchForecast(default_city));
    }
  }, []);

  const onSearchCity = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value
    dispatch(fetchForecast(city));
  }

  const onSetDefaultCity = () => {
    if(!errors){
      dispatch(setDefaultCity(currCity));
    }
  }

  const geoSuccess = function(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=e43df3ee29061e8e1fa215f9fd605f4a
    `;

    axios.get(`${url}`)
    .then(function (response) {
      dispatch(fetchForecast(response.data[0].name))
      loadAndUnloadPage("loaded", false);
    })
  };

  const geoError = function(postition) {
    console.log("geo error");
  }

  const loadAndUnloadPage = function(action, state) {
    if (action === "loading") {
      document.getElementById('root').classList.add('loading');
    } else {
      document.getElementById('root').classList.remove('loading')
    }
    const buttons = document.querySelectorAll("button")
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = state
    }
  }


  const fetchForecastWithCurrentLocation = (e) => {

    loadAndUnloadPage("loading", true)

    if(!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      document.getElementById('root').classList.remove('loading');
    } else {
      console.log("success")
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }
  }

  return (
    <form onSubmit={onSearchCity} className="search-bar row">
            <div className="form-group col-md-12">
              <input
                type="text"
                placeholder="Enter City"
                className="form-control"
                name="city"
                id="weather-input"
              />
            </div>
            <div className="row"> 
              <div className="col-md-2 offset-md-3">
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  id="search-weather"
                  >
                  Search
                </button>
              </div>

              <div className="col-md-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  id="current-location"
                  onClick={fetchForecastWithCurrentLocation}
                >
                  Use Current Location
                </button>
              </div>

              <div className="col-md-2">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  id="set-default"
                  onClick={onSetDefaultCity}>
                  Set City As Default
                </button>
              </div>
            </div>

          </form>
  )
}

export default SearchBar 