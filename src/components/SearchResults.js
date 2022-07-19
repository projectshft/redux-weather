// import SearchResultsItem from "./SearchResultsItem";
import { useSelector } from 'react-redux'
import SearchResultsItem from './SearchResultsItem';

const selectCities = (state) => state.cities;

const SearchResults = () => {
  const cities = useSelector(selectCities)

  const renderedResultsItems = cities.map(city => {
    return (
      <SearchResultsItem key={city.city.id} city={city} />
    );
  })

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">City</th>
          <th scope="col">Temperatue (F)</th>
          <th scope="col">Pressure (hPa)</th>
          <th scope="col">Humidity (%)</th>
        </tr>
      </thead>
      <tbody>
        {renderedResultsItems}
      </tbody>
    </table>
  );
};

export default SearchResults;
