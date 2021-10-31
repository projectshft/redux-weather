import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import _ from 'lodash';

import { fetchCity, fetchCities } from '../actions';


const CitiesIndex = (props) => {   
    const [city, setCity] = useState("");
    const cities = useSelector(state => state.cities);
    const dispatch = useDispatch();   

    useEffect(() => {
        dispatch(fetchCities());
    }, [fetchCities]);
    
    const handleFormSubmit = (data) => {
        console.log(fetchCities())
        console.log(fetchCity(data))
        
        dispatch(            
            fetchCity(data)
        );
    }   
    
    function renderCities() {
        if (!_.isEmpty(cities)) {
            
            return cities.map((dataID) => (                
                <tr className="city-info-row" key={dataID}>
                    <td className="city-name">{cities.city.name}</td>                    
                    <td>{cities.list[dataID].main.temp}</td>
                    <td>{cities.list[dataID].main.pressure}</td>
                    <td>{cities.list[dataID].main.humidity}</td>
                </tr>
            ))
        }
        
        
        return <div>No cities have been selected</div>
            
    }

    return (
        <form>
        <div>
        <div className="text-xs-right">
            <input
            onChange={event => setCity(event.target.value)}            
            className='form-control'
            name='city'></input>                     
            <Link className="btn btn-primary" onClick={handleFormSubmit(city)} >
            Add a City
            </Link>
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