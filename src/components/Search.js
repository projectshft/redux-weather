import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../Redux/actions/apiSlice";


const SearchBar = () => {
  const [city, setCity] = useState("");
  const {temperature} = useSelector(state => state.weather);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather("marmora"));
    console.log(temperature)
  })


  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchWeather(city));
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input className="textbox" type="text" required value={city} onChange={(e) =>setCity(e.target.value)} placeholder="Search"></input>
        <button>Search</button>
      </form>
      <div></div>

    </div>
   );
}
 
export default SearchBar;