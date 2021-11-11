import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { React, useEffect, useState } from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

import { fetchCity } from '../actions';



const CitiesIndex = () => {   
    
    const [city, setCity] = useState("");
    const [temperatures, setTemps] = useState([]);
    const [pressures, setPressures] = useState([]);
    const [humidities, setHumidity] = useState([]);    
    const [cityCollection, setCityCollection] = useState([{}]); //create state variable for the collection of searched cities

    const dispatch = useDispatch();    
    const cities = useSelector(state => state.cities)   //Names payload.data cities
        
    const handleFormSubmit = (e) => {
        e.preventDefault();
    };
    
    async function handleButtonClick (data) {     
        await dispatch(fetchCity(data));  
        getData();                      
    };
    
    function getData () {  //iterates through api call (5 total) and creates arrays of needed values
        console.log(cities)
        for (let i = 0; i < cities.length; i+=8) {   
            console.log(cities[i].main.temp);      
            setTemps(temperatures => [...temperatures, cities[i].main.temp])
            setPressures(pressures => [...pressures, cities[i].main.pressure])
            setHumidity(humidities => [...humidities, cities[i].main.humidity])
            console.log(temperatures)
        }
        
        const searchedCity = {temps: temperatures, pressure: pressures, humidity: humidities};  //Stores needed values in state array of objects
        setCityCollection(cityCollection => [...cityCollection, {searchedCity}])  //begins to work after the third button click.  Why?
        console.log(searchedCity)
        console.log(cityCollection);
        
        
    }
    
    function renderCities() {             
        if (!_.isEmpty(cities)) {         
            return  cityCollection.map((row) => {              //map/iterate through array of objects rendering them to the DOM
                <tr className="city-info-row" key={row}>                    
                    <td className="city-name">{city}</td>                    
                        <Sparklines data={row.temps}>
                            <SparklinesLine />
                            <SparklinesReferenceLine type="mean" />
                        </Sparklines>
                        
                        <Sparklines data={row.pressure}>
                            <SparklinesLine />
                            <SparklinesReferenceLine type="mean" />
                        </Sparklines>
                    
                        <Sparklines data={row.humidity}>
                            <SparklinesLine />
                            <SparklinesReferenceLine type="mean" />
                        </Sparklines>                   
                </tr>
            
        })
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
            <Button type="primary" className="btn btn-primary" 
            onClick={() => handleButtonClick(city)} >
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


