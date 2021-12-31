import { Table, Button, Container, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { React, useEffect, useState } from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


import { fetchCity } from '../actions';




const CitiesIndex = () => {      

    const cities = useSelector(state => state.cities)   //Names payload.data cities   
    const [city, setCity] = useState("");
    
    
    const dummyData = [23, 27, 32, 30, 26];
    let names = cities.map(city => city.city.name);
    let tempData = cities.map(city => city.list.slice(0, 5).map(data => data.main.temp));
    let pressureData = cities.map(city => city.list.slice(0, 5).map(data => data.main.pressure));
    let humidityArray = cities.map(city => city.list.slice(0, 5).map(data => data.main.humidity));

    let numCities = names.length;

          
    
        

    const dispatch = useDispatch();    

    useEffect(() => {           
    }, [dispatch, fetchCity, city]);
    
    
    async function handleButtonClick (data) {     
        await dispatch(fetchCity(data));                               
    };   

    
    
    

    function renderCities() {         
        console.log(cities)  
        
        if (!_.isEmpty(cities)) { 
             return(
                <tbody>
                {cities.map((city) => 
                <Row className = 'mb-4 mt-4' md={4}>
                    <Col>                        
                        {city.city.name}                             
                    </Col> 
                    {renderTemperatures(city)}                 
                </Row>
                )}                  
                </tbody>  
                )        
        }        
             return <div>No cities have been selected</div>        
    }

    function renderTemperatures(city) {
        
        
        console.log(numCities.indexOf)
        console.log(tempData)
        return (
         <Col>    
        {tempData.map((data) =>  
            
                                   
                <Sparklines data={data}>       
                <SparklinesLine />
                <SparklinesReferenceLine type="mean" />
                </Sparklines>          
        )} 
        </Col>
        )

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
        {renderCities()}                             
        </Table>    
        
        </div>
    )
}

export default CitiesIndex;

/*
 function renderCities() {         
        console.log(cities)  
        
        if (!_.isEmpty(cities)) { 
             return(
                <tbody>
                {cities.map((city) => 
                <Row className = 'mb-4 mt-4' md={4}>
                    <Col>                        
                        {city.city.name}                             
                    </Col> 
                    {renderTemperatures(city)}                 
                </Row>
                )}                  
                </tbody>  
                )        
        }        
             return <div>No cities have been selected</div>        
    }

    function renderTemperatures(city) {
        console.log(tempData)
        return (
         <Col>    
        {tempData.map((data) =>  
                                   
                <Sparklines data={data}>       
                <SparklinesLine />
                <SparklinesReferenceLine type="mean" />
                </Sparklines>          
        )} 
        </Col>
        )

    }
        */