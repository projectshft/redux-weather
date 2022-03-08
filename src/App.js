import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from './features/search-bar/search-bar';
import ForecastList from './features/forecast/ForecastList';
import {fetchCityForecast} from './features/forecast/forecastSlice';


const App = () => {
    const forecasts = useSelector((state) => state.forecasts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCityForecast('houston'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchCityForecast]);

    return (
        <div className="container">
            <h1 className="text-center">Redux Weather Eval</h1>
            <SearchBar />
            <hr></hr>
            <ForecastList forecasts={forecasts} />
        </div>
    )
}

export default App;