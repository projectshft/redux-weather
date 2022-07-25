import './search.css';
import { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../reduxStore/actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const onClick = (e) => {
    e.preventDefault();
    const city = inputRef.current.value;
    fetchWeather(city, dispatch);
  };
  return (
    <form className="form">
      <div className="search-bar">
        <input
          ref={inputRef}
          className="search-bar-input"
          type="text"
          placeholder="Enter City Name"
          name="search"
        />
        <button className="search-bar-button" type="submit" onClick={onClick}>
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
