import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { React, useEffect, useState } from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


import { fetchCity } from '../actions';




const CitiesIndex = () => {      

    const cities = useSelector(state => state.cities)   //Names payload.data cities   
    /*
    useEffect(() => {
        getData();
    }, [cities]);
*/
    const [city, setCity] = useState("");
    
    let tempArray = [];
    let pressureArray = [];
    let humidityArray = [];
    let cityNames = [];
    
    //let tempData = [];
    //let pressureData = [];
    //let humidityData = [];

    const dispatch = useDispatch();    
    
    
    async function handleButtonClick (data) {     
        await dispatch(fetchCity(data));  
                             
    };   
    
    function getData () {  //iterates through api call (5 total) and creates arrays of needed values
        
        if (!_.isEmpty(cities)) {       
            for (let i = 0; i < cities.length; i++) {  
                    cityNames = cityNames.concat(city)
                for (let j = 0; j < cities[i].list.length; j += 8) {                      
                    tempArray = tempArray.concat(cities[i].list[j].main.temp)
                    pressureArray = pressureArray.concat(cities[i].list[j].main.pressure)                                      
                    humidityArray = humidityArray.concat(cities[i].list[j].main.humidity)                               
            }
            }     
        }
        console.log(tempArray) 
        

    } 

    function renderCities() {                  
        getData();
        console.log(cityNames)
        console.log(tempArray)
        if (!_.isEmpty(cities)) {                  
            return  (    //map/iterate through array of objects rendering them to the DOM
                <tr>                                 
                    <td>{city}</td>
                    <td>
                    <Sparklines data={tempArray}>       
                        <SparklinesLine />
                        <SparklinesReferenceLine type="mean" />
                    </Sparklines>                    
                    </td>
                    <td>
                    <Sparklines data={pressureArray}>
                        <SparklinesLine />
                        <SparklinesReferenceLine type="mean" />
                    </Sparklines>
                    </td>
                    <td>
                    <Sparklines data={humidityArray}>
                        <SparklinesLine />
                        <SparklinesReferenceLine type="mean" />
                    </Sparklines> 
                    </td>           
                    
                </tr>
                    
                
                    
                     
            )
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
            <tbody>{renderCities()}</tbody>                                  
        </Table>    
               
        </div>
    )
}

export default CitiesIndex;


