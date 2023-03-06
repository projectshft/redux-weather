import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../Redux/slices/apiSlice";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(city));
    setCity("")
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search"
        ></input>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div></div>
    </div>
  );
};

export default SearchBar;
