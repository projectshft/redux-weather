import { fetchForecast } from "../actions/index";
import { useDispatch } from "react-redux";
import { useState } from "react";

const CitySearch = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('')

  const onSubmitClick = () => {
    dispatch(fetchForecast(inputValue));
  }

  return (
    <div className="row mb-3">
      <div className="col-md-10 offset-md-1">
        <div className="input-group">
          <input type="text" className="form-control" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Get a five day forecast in your favorite cities" />
          <div className="input-group-append" >
            <button className="btn btn-primary" type="button" onClick={onSubmitClick}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CitySearch;