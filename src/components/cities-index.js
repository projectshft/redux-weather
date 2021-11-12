import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { React, useEffect, useState } from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

import { fetchCity } from '../actions';



const CitiesIndex = () => {   
    
    useEffect(() => {
        getData();
    }, []);

    const [city, setCity] = useState("");
    const [temperatures, setTemps] = useState([]);
    const [pressures, setPressures] = useState([]);
    const [humidities, setHumidity] = useState([]);    
    
    let searchedCity = [{cityName: null, temps: null, pressure: null, humidity: null}]

    const dispatch = useDispatch();    
    const cities = useSelector(state => state.cities)   //Names payload.data cities
    
     
    console.log(cities)       
    
    
    async function handleButtonClick (data) {     
        await dispatch(fetchCity(data));  
        getData();                      
    };
    
    function getData () {  //iterates through api call (5 total) and creates arrays of needed values
        if (!_.isEmpty(cities)) {
            searchedCity = [{cityName: null, temps: null, pressure: null, humidity: null}]                           
        
            for (let i = 0; i < cities.length; i++) {  
                for (let j = 0; j < cities[i].list.length; j += 8) {                        
                    setTemps(temperatures => [...temperatures, cities[i].list[j].main.temp])
                    setPressures(pressures => [...pressures, cities[i].list[j].main.pressure])
                    setHumidity(humidities => [...humidities, cities[i].list[j].main.humidity])                
            }
        }
            console.log(temperatures)
            
            searchedCity = [...searchedCity, {cityName: city, temps: temperatures, pressure: pressures, humidity: humidities}]    // will be rebuilt each time and mapped through for render to DOM
            console.log(searchedCity.temps)
                
            
    
        }
    } 
        
        
        
        
    
    
    function renderCities() {             
        if (!_.isEmpty(cities)) {         
            return  searchedCity.map((cityRow, index) => {  //map/iterate through array of objects rendering them to the DOM
                <span>                     
                    <Sparklines data={cityRow.temps}>
                        <SparklinesLine />
                        <SparklinesReferenceLine type="mean" />
                    </Sparklines>
                    
                    <Sparklines data={cityRow.pressure}>
                        <SparklinesLine />
                        <SparklinesReferenceLine type="mean" />
                    </Sparklines>
                
                    <Sparklines data={cityRow.humidity}>
                        <SparklinesLine />
                        <SparklinesReferenceLine type="mean" />
                    </Sparklines>   </span>          
                
             
        })
    }        
         return <div>No cities have been selected</div>        
    }   
    
    return (
        <div>
        
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
        </Table>      
        <div className="list-group">{renderCities()}</div>        
        </div>
    )
}

export default CitiesIndex;


