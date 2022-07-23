import './search.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('test');
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="search-bar">
        <input
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
