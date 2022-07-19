// import SearchResultsItem from "./SearchResultsItem";
import { useSelector } from 'react-redux'
import SearchResultsItem from './SearchResultsItem';

const selectCities = (state) => state.cities;

const SearchResults = () => {
  const cities = useSelector(selectCities)

  const renderedResultsItems = cities.map(city => {
    return (
      <SearchResultsItem key={city.id} city={city} />
    );
  })

  return (
    <table className="table table-striped text-center">
      <thead>
        <tr>
          <th scope="col" className='w-25'>City</th>
          <th scope="col" className='w-25'>Temperatue (F)</th>
          <th scope="col" className='w-25'>Pressure (hPa)</th>
          <th scope="col" className='w-25'>Humidity (%)</th>
        </tr>
      </thead>
      <tbody>
        {renderedResultsItems}
      </tbody>
    </table>
  );
};

export default SearchResults;
