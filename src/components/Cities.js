import { useSelector } from 'react-redux';
import City from './City';

import './Cities.css';

const renderCities = arr => {
    if(arr.length > 0) {
        return arr.map(city => {
            return (
                <City id={city.id} weather={city.weather} name={city.name} averages={city.averages}/>
            )
        });
    };
}

const Cities = (props) => {
    const cities = useSelector(state => state.cities.cities);
    return (
        <div className="Cities container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">City</th>
                        <th scope="col">Temperature (F)</th>
                        <th scope="col">Pressure (hPa)</th>
                        <th scope="col">Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>{renderCities(cities)}</tbody>
            </table>
        </div>
    )
}

export default Cities;