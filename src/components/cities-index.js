import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { React, useEffect, useState } from 'react';
import _ from 'lodash';

import { fetchCity } from '../actions';
import { render } from '@testing-library/react';


const CitiesIndex = (props) => {   
    
    const [city, setCity] = useState("");
    const cities = useSelector(state => state.cities);
    const dispatch = useDispatch();     
    
        
    const handleFormSubmit = (e) => {
        e.preventDefault();
    };
    
    function handleButtonClick (data) { 
        console.log(cities)
        dispatch(fetchCity(data)
        );
    }
    
    
    function renderCities() {        
        if (!_.isEmpty(cities)) {  
                        

            return cities.list.splice(0, 5).map((dateID, i) => (                
                <tr className="city-info-row" key={dateID}>
                    <td className="city-name">{cities.city.name}</td>                    
                    <td>{cities.list[i].main.temp}</td>
                    <td>{cities.list[i].main.pressure}</td>
                    <td>{cities.list[i].main.humidity}</td>
                </tr>
            ))
        }
    
    
    return <div>No cities have been selected</div>
        
} 
    
    
    
    
    return (
        <form onSubmit={handleFormSubmit}>
        <div>
        <div className="text-xs-right">
            <input
            onChange={event => setCity(event.target.value)}            
            className='form-control'
            name='city'></input>                     
            <Button type="submit" className="btn btn-primary" onClick={() => handleButtonClick(city)} >
            Add a City
            </Button>
        </div>
        <hr />        
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (F)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th> 
                </tr>                   
            </thead>        
            <tbody className="list-group">{renderCities()}        
            </tbody>
        </Table>
        </div>
        </form>
    )
}

export default CitiesIndex;


