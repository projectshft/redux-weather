import { useState } from "react";
import { useDispatch } from "react-redux";
import { weatherRequest } from "../Redux/actions/apiCall";



const SearchBar = () => {
  const [city, setCity] = useState("");
  
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
    </div>
   );
}
 
export default SearchBar;