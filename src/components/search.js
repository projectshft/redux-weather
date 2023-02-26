import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from "../actions";

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      fetchWeather(query)
    );

    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className="input-group mt-5">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Get a five-day forecast in your favorite cities"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </div>
      </form>
  )
}

export default Search;
