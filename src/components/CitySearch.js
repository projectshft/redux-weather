import { fetchForecast, fetchForecastByLatLongCoordinates } from "../actions/index";
import { useDispatch } from "react-redux";
import { useState } from "react";

const CitySearch = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('')

  const onSubmitClick = () => {
    dispatch(fetchForecast(inputValue));
    setInputValue('');
  }

  // Check to see if the user pressed enter while typing in the search bar and submits their search if so.
  const handleInputChange = (e) => {
    if (e.keyCode === 13) {
      onSubmitClick();
    }
  }

  // Finds the coordinates of the user's current location and submits a search for the forecast at those coordinates
  const onCurrentLocationClick = () => {
    navigator.geolocation.getCurrentPosition(({coords})=> dispatch(fetchForecastByLatLongCoordinates({latitude: coords.latitude, longitude: coords.longitude})))
  }

  return (
    <div className="row mb-3">
      <div className="col-md-10 offset-md-1">
        <div className="input-group">
          <input type="text" className="form-control" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyUp={handleInputChange} placeholder="Get a five day forecast in your favorite cities" />
          <div className="input-group-append" >
            <button className="btn btn-outline-primary" type="button" onClick={onSubmitClick}>Submit</button>
            <button className="btn btn-outline-primary" type="button" onClick={onCurrentLocationClick}>See Weather for my Current Location</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CitySearch;