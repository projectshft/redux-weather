import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { fetchLocation } from '../actions';

export default function WeatherIndex() {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchLocation(city));
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="City Name"
        id="name"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
