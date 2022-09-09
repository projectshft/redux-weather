import { useState } from "react";


const SearchNew = () => {
  const [city, setCity] = useState("");

const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log('hi');
  


  return (
    <form onSubmit={handleFormSubmit}>

      <div className='form-group'>
        <input type='text' className='form-control' value={city} placeholder="Get a 5-day forecast for your favorite cities" onChange={(e) => setCity(e.target.value)}></input>
      <button type='submit' className='btn btn-primary'>Search</button>
      </div>
    </form>
  );
};
}

export default SearchNew;
      