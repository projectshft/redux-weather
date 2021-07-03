import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addForecast } from "../actions";

const NewCity = (props) => {
  const [city, setCity] = useState("");
  // const [temps, setTemps] = useState("");
  // const [press, setPress] = useState("");
  // const [humid, setHumid] = useState("");

  //const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    // e.preventDefault();

    // dispatch(
    //   addForecast({
    //     city,
    //   })
    // );
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
}

export default NewCity;
