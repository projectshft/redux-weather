import { useDispatch, useSelector } from "react-redux";
import { changeDefaultCity } from "../actions";

const DefaultCityUI = () => {
  const defaultCity = useSelector(({defaultCity}) => defaultCity);
  const mostRecentCitySearch = useSelector(({cities}) => cities[0]);
  const dispatch = useDispatch();

  const handleDefaultCityButtonClick = () => {
    localStorage.setItem("defaultCity", mostRecentCitySearch.name)
    dispatch(changeDefaultCity(mostRecentCitySearch.name))
  }

  let ui;
 
  if (mostRecentCitySearch) {
    if (defaultCity === mostRecentCitySearch.name) {
      ui = <p>{defaultCity} is your default city</p>
    } else {
      ui = <button className="btn btn-primary mt-3" onClick={handleDefaultCityButtonClick}>Set {mostRecentCitySearch.name} as default City</button>
    }
  }
  return (
    <div className="row mb-3">
      <div className="col-md-10 offset-md-1">
        {ui}
      </div>
    </div>
  );
}

export default DefaultCityUI;