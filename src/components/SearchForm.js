import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCity } from "../actions";
import './SearchForm.css';

const SearchForm = () => {
    const [cityInput, setCityInput] = useState('');

    const dispatch = useDispatch();

    const handleInputChange = (evt) => {
        setCityInput(evt.target.value);
    }

    //prevent cities from being able to be retrieved using numbers, which the api does allow but would not be reasonable user interface
    const handleKeyDown = evt => {
        let keyCode = evt.keyCode;
        if (keyCode >= 48 && keyCode <= 57) {
            evt.preventDefault();
        }
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(
            fetchCity(cityInput.trim())
        );
        setCityInput('');
    }

    return (
        <form onSubmit={handleSubmit} className="SearchForm">
            <div className="row">
                <div className="col col-11">
                    <input className="form-control" type="text" name="text" value={cityInput} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder="Get a five-day forecast in your favorite cities" />
                </div>
                <div className="col col-1">
                    <button type="submit" className="btn btn-secondary btn-md">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default SearchForm;