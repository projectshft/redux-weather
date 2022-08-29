import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { fetchLocation } from '../actions';

export default function WeatherIndex() {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLocation(city));
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        name="City Name"
        id="name"
        className="search__text"
        placeholder="Search for any city's 5 day forecast"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button type="submit" className="search__btn">
        City Search
      </button>
    </form>
  );
}
