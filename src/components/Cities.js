import { useSelector } from 'react-redux';
import City from './City';

const renderCities = arr => {
    // debugger;
    // console.dir(arr);
    // debugger;
    if(arr.length < 1) {
        console.log('there are no cities yet');
        return <span>No city data yet (this is just a placeholder)</span>
    };
    return arr.map(city => {
        // return <span>{city.name}</span>
        return (
            <City id={city.id} weather={city.weather}/>
        )
    })
}

const Cities = (props) => {
    const cities = useSelector(state => state.cities.cities);
    // console.dir(cities);
    return (
        <div>
            {renderCities(cities)}
        </div>
    )
}

export default Cities;