import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { React, useEffect, useState } from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

import { fetchCity } from '../actions';
import { render } from '@testing-library/react';


const CitiesIndex = (props) => {   
    const defaultCity = "Portland";
    
    useEffect(() => {
        dispatch(fetchCity(defaultCity));

    }, []);    

    const [city, setCity] = useState("");
    const [temperatures, setTemps] = useState([]);
    const [pressures, setPressures] = useState([]);
    const [humidities, setHumidity] = useState([]);
    const dispatch = useDispatch();    

    const cities = useSelector(state => state.cities)   
        
    const handleFormSubmit = (e) => {
        e.preventDefault();
    };
    
    function handleButtonClick (data) { 
        dispatch(fetchCity(data));                        
    };
    
    function getData () {
        for (let i = 0; i < cities.length; i++) {
            console.log(cities[i]);
            setTemps(temperatures => [...temperatures, cities[i].main.temp])
            setPressures(pressures => [...pressures, cities[i].main.pressure])
            setHumidity(humidities => [...humidities, cities[i].main.humidity])
        }        
        
    }
    
    function renderCities() {             
        if (!_.isEmpty(cities)) {         
            return  (                
                <tr className="city-info-row" >
                    <td className="city-name">{city}</td>                    
                        <Sparklines data={temperatures}>
                            <SparklinesLine />
                            <SparklinesReferenceLine type="mean" />
                        </Sparklines>
                        
                        <Sparklines data={pressures}>
                            <SparklinesLine />
                            <SparklinesReferenceLine type="mean" />
                        </Sparklines>
                    
                        <Sparklines data={humidities}>
                            <SparklinesLine />
                            <SparklinesReferenceLine type="mean" />
                        </Sparklines>                   
                </tr>
            )
        }        
         return <div>No cities have been selected</div>        
}   
    
    return (
        <form onSubmit={handleFormSubmit}>
        
        <div className="text-xs-right">
            <input
            onChange={event => setCity(event.target.value)}            
            className='form-control'
            name='city'></input>                     
            <Button type="submit" className="btn btn-primary" 
            onClick={() => handleButtonClick(city), () => getData()} >
            Add a City
            </Button>
        </div>
        <hr />        
        <Table responsive>
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (F)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th> 
                </tr>                   
            </thead>        
            <tbody className="list-group">{renderCities()}</tbody>           
        </Table>        
        </form>
    )
}

export default CitiesIndex;


