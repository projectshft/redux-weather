import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCities } from "../actions";

const CitiesIndex = () => {
  const cities = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCities());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchCities]);

  function renderCities() {
    if (cities.length > 0) {
      return cities.map((city) => (
        <li className="list-group-item" key={city.id}>
          {city.name}
        </li>
      ));
    }
    return <div>No city found</div>
  }

  return (
    <div className="col text-center">
      <div className="text-xs search col-sm-12">
        <input type="text center" id="search-query" class="text-center input-group input-group-sm mb-3" placeholder="Type in city name"></input>
        <br />
        <button className="btn btn-outline-info">Search</button>
      </div>
      <hr />
      <ul className="list-group">{renderCities}</ul>
    </div>
  )
}

export default CitiesIndex;