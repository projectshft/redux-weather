import { useDispatch } from "react-redux";
import { fetchCity } from "../actions";

const SearchForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(
            fetchCity()
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col col-11">
                    <input type="text" name="text" placeholder="Get a five-day forecast in your favorite cities"/>
                </div>
                <div className="col col-1">
                    <button type="submit" className="btn btn-secondary btn-sm">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default SearchForm;