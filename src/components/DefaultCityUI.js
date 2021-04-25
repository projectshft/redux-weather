import { useDispatch, useSelector } from "react-redux";
import { changeDefaultCity } from "../actions";

const DefaultCityUI = () => {
  const defaultCity = useSelector(({defaultCity}) => defaultCity);
  const mostRecentCitySearch = useSelector(({cities}) => cities[0]);
  const dispatch = useDispatch();

  // Sets the most recent city searched as the default city to be loaded for the user
  const handleDefaultCityButtonClick = () => {
    localStorage.setItem("defaultCity", mostRecentCitySearch.name)
    dispatch(changeDefaultCity(mostRecentCitySearch.name))
  }

  // If the most recent city searched is the users default city then it displays the default city message. Otherwise it displays the button for the user to set the most recent city searched as their default city.
  const displayMessageOrButton = (currentCity, defaultCity) => {
    if (currentCity) {
      if (defaultCity === currentCity.name) {
        return <p>{currentCity.name} is your default city</p>
      } else {
        return <button className="btn btn-primary mt-3" onClick={handleDefaultCityButtonClick}>Set {currentCity.name} as default City</button>
      }
    }
  }
 
  return (
    <div className="row mb-3">
      <div className="col-md-10 offset-md-1">
        {displayMessageOrButton(mostRecentCitySearch, defaultCity)}
      </div>
    </div>
  );
}

export default DefaultCityUI;