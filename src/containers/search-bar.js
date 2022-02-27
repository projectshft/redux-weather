import { useDispatch } from "react-redux";
import { fetchForecast } from "../actions/index";

const SearchBar = () => {

  const dispatch = useDispatch();

  const onSearchCity = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value
    dispatch(fetchForecast(city));
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
            <div class="row"> 
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
                >
                  Use Current Location
                </button>
              </div>

              <div className="col-md-2">
                <button type="button" className="btn btn-secondary" id="set-default">
                  Set City As Default
                </button>
              </div>
            </div>
           
          </form>
  )
}

export default SearchBar