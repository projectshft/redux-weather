import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { displayWeather } from '../actions';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => setQuery(e.target.value);

  const handleClick = () => dispatch(displayWeather(query));

  return (
    <div className="search-bar ">
      <div className="form-group">
        <input
          value={query}
          placeholder="put here your city"
          onChange={handleChange}
        />
        <button onClick={handleClick} type="button" className="btn btn-default">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
