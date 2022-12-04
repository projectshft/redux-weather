import React from 'react'
import { useState, useDispatch } from 'react'

const Searchbar = (props) => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    setCity(event.target.value);

    dispatch(fetchSearch(city));
    return false;
  };

  return (
    <div>
      <h1>Redux Weather App</h1>
      <form>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="forecast"
        />
      </form>
    </div>
  )
}

export default Searchbar