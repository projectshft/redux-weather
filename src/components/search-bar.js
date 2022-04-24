import { useDispatch } from "react-redux";
import { addCity } from "../actions"
import { useState } from "react";

const Search = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addCity(name));
    setName('');
  }

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit} className="align-items-center row">
        <div className="col-10">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Get a five-day forecast for you favorite cities"
          ></input>
        </div>
        <div className="col-2">
          <button
            className="btn-primary form-control"
            type="submit"
          >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Search;