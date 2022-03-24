import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from './features/search-bar/search-bar';
import ForecastList from './features/forecast/ForecastList';
import {fetchCityForecast, 
    selectDefaultCity,
    selectForecasts,
    selectLoading,
    selectError
} from './features/forecast/forecastSlice';


const App = () => {
    const forecasts = useSelector(selectForecasts);
    const defaultCity = useSelector(selectDefaultCity);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCityForecast(defaultCity));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);


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