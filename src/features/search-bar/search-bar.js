import {useState} from "react";
import { useDispatch } from 'react-redux';


const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const dispatch = useDispatch();
    

    const handleSearch = () => {
        // dispatch(fetchForecast(searchQuery))
    }

    return(
        <div className="input-group mb-3 col-8 mx-auto">
            <input type="text" className="form-control" placeholder="Get the forecast for your favorite city" 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            <div className="input-group-append pointer"
                onClick={handleSearch}
            >
                <span className="input-group-text">Search</span>
            </div>
        </div>
    )
}

export default SearchBar;