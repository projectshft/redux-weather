import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { React, useEffect, useState } from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

import { fetchCity } from '../actions';



const CitiesIndex = () => {   
    const dummyData = [2, 8, 10, 19, 32]  //Values used to test sparklines

    useEffect(() => {
        getData();
    }, []);

    const [city, setCity] = useState("");
    const [temperatures, setTemps] = useState([]);
    const [pressures, setPressures] = useState([]);
    const [humidities, setHumidity] = useState([]);    
    
    let searchedCity = [{}]

    const dispatch = useDispatch();    
    const cities = useSelector(state => state.cities)   //Names payload.data cities   
    
    async function handleButtonClick (data) {     //Error: Only stores values correctly after third button click
        await dispatch(fetchCity(data));  
        getData();                      
    };
    
    function getData () {  //iterates through api call (5 total) and creates arrays of needed values
        if (!_.isEmpty(cities)) {                                      
        
            for (let i = 0; i < cities.length; i++) {  
                for (let j = 0; j < cities[i].list.length; j += 8) {                                          
                    setTemps(temperatures => [...temperatures, cities[i].list[j].main.temp])                    
                    setPressures(pressures => [...pressures, cities[i].list[j].main.pressure])
                    setHumidity(humidities => [...humidities, cities[i].list[j].main.humidity])                
            }
        } 
            
        searchedCity = [...searchedCity, {cityName: city, temps: temperatures, pressure: pressures, humidity: humidities}]         
        }
    } 
    
    function renderCities(rowData) {                  
        if (!_.isEmpty(cities)) {                  
            return rowData.map((row) => (    //map/iterate through array of objects rendering them to the DOM
                <tr className="city-info-row" key={row}>                    
                    <td className="city-name">{row.cityName}</td> 
                                         
                    <Sparklines data={temperatures}>       
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
                    </tr> //Error: Sparklines work with DummyData and component state values (see temperatures table).  Map function incorrect?             
             
            ))
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
            <tbody className="list-group">{renderCities(searchedCity)} </tbody>                
        </Table>              
        </div>
    )
}

export default CitiesIndex;


