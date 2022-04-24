import { useDispatch } from "react-redux";
import { addCity } from "../actions"
import { useState } from "react";

const Search = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const handleFormSubmit = () => {
    dispatch(addCity(name));
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="search-form justify-content-center row container">
        <div className="col-9">
          <input
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Get a five-day forecast for you favorite cities"
          ></input>
        </div>
        <div className="col-2">
          <button
            className="btn-primary col-2 form-control"
            type="submit"
          >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Search;