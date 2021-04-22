import { useState } from 'react';

const SearchValue = ({ citySearch }) => {
  debugger;
  const [value, setValue] = useState('');

  // const dispatch = useDispatch();

  // const handleSearch = (event) => {
  //   event.preventDefault();

  return (
    <div className="col text-center">
      <div className="text-xs search col-sm-12">
        <input
          value={value}
          onChange={event => {
            setValue(event.target.value)
            citySearch(value)
          }}
          type="text center" id="search-query" className="text-center input-group input-group-sm mb-3" placeholder="Type in city name"></input>
        <br />
        <button className="btn btn-outline-info">Search</button>
      </div>
      <hr />
    </div>
  )
}

export default SearchValue;