import { useState } from 'react';
import { useDispatch } from "react-redux";  
import { displayWeather } from "../actions";

const SearchBar = () => {
    const [term,setTerm]=useState('')
    const dispatch = useDispatch();

    const handleChange=(e) => setTerm(e.target.value)

    const handleClick = () =>dispatch(displayWeather(term))

        return (
          <div className="search-bar ">
              <div className="form-group">
            <input 
            value={term}
            placeholder='put here your city'
            onChange={handleChange}
            />
            <button onClick={handleClick} type="button" className="btn btn-primary">Search</button>
          </div>
          </div>
        );
}

export default SearchBar