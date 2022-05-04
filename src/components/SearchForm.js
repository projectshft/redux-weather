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

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(
            fetchCity(cityInput)
        );
        setCityInput('');
    }

    return (
        <form onSubmit={handleSubmit} className="SearchForm">
            <div className="row">
                <div className="col col-11">
                    <input type="text" name="text" value={cityInput} onChange={handleInputChange} placeholder="Get a five-day forecast in your favorite cities"/>
                </div>
                <div className="col col-1">
                    <button type="submit" className="btn btn-secondary btn-sm">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default SearchForm;