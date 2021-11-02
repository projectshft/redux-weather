import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { React, useEffect, useState } from 'react';
import _ from 'lodash';

import { fetchCity } from '../actions';


const CitiesIndex = (props) => {   
    const [city, setCity] = useState("");
    const cities = useSelector(state => state.cities);
    const dispatch = useDispatch();     
    
        
    function handleFormSubmit (data) {             
        dispatch(            
            fetchCity(data)
        );
    }        
        
        

    console.log(cities);
    
    console.log(city);
    
    
    return (
        <form>
        <div>
        <div className="text-xs-right">
            <input
            onChange={event => setCity(event.target.value)}            
            className='form-control'
            name='city'></input>                     
            <Button className="btn btn-primary" onClick={handleFormSubmit(city)} >
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
            <tbody className="list-group">{}        
            </tbody>
        </Table>
        </div>
        </form>
    )
}

export default CitiesIndex;


