import SearchResultsItem from "./SearchResultsItem";

const SearchResults = () => {
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
        <SearchResultsItem />
      </tbody>
    </table>
  );
};

export default SearchResults;
