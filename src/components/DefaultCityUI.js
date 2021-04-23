import { useSelector } from "react-redux";

const DefaultCityUI = () => {
  const defaultCity = useSelector(({defaultCity}) => defaultCity);
  const mostRecentCitySearch = useSelector(({cities}) => cities[0]);

  let ui;
 
  if (mostRecentCitySearch) {
    if (defaultCity === mostRecentCitySearch.name) {
      ui = <p>{defaultCity} is your default city</p>
    } else {
      ui = <button className="btn btn-primary mt-3">Set {mostRecentCitySearch.name} as default City</button>
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