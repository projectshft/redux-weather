import { useState } from "react";
import { fetchForecast } from "../actions";


const SearchNew = () => {
  const [city, setCity] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
  fetchForecast(city);
  }


  return (
    <form onSubmit={handleFormSubmit}>
      <div className='input-group' id="search-bar">
        <input 
          type='text' className='form-control rounded' value={city} placeholder="Get a 5-day forecast for your favorite cities" onChange={(e) => setCity(e.target.value)}>
        </input>
      <button type='submit' className='btn btn-outline-primary'>Search</button>
      </div>
    </form>
  );

}

export default SearchNew;
      