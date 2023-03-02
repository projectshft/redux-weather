import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {weatherRequest} from "../Redux/actions/apiCall";



const SearchBar = () => {
  const [city, setCity] = useState("");
  const temp = useSelector(state => state.temperature);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(weatherRequest(city));
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input className="textbox" type="text" required value={city} onChange={(e) =>setCity(e.target.value)} placeholder="Search"></input>
        <button>Search</button>
      </form>
      <div>{temp}</div>

    </div>
   );
}
 
export default SearchBar;