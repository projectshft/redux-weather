import { useState } from "react";
import { useDispatch } from "react-redux";
import { addForecast } from "../actions";

const NewCity = (props) => {
  // have state outside of api state for newCity to pass to addForecast action
  const [newCity, setCity] = useState("");

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addForecast({
        newCity,
      })
    );  
    // clear form input after submission
    setCity('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="container">
        <div className="row align-items-end">
          <div className="form-group col-md-6 offset-md-3">
            <input
              className="form-control"
              type="text"
              id="input-city"
              placeholder="Enter a City"
              value={newCity}
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </div>
          <div className="form-group col-md">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
        <br />
      </div>
    </form>
  );
};

export default NewCity;
