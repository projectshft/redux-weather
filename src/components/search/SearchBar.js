import './search.css';
import { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../reduxStore/actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value === '') {
      alert('Please Enter a City Name');
    } else {
      const city = inputRef.current.value;
      fetchWeather(city, dispatch);
      e.target.reset();
    }
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="search-bar">
        <input
          ref={inputRef}
          className="search-bar-input"
          type="text"
          placeholder="Enter City Name"
          name="search"
        />
        <button className="search-bar-button" type="submit">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
