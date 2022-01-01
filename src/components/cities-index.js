import { Button, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { React, useEffect, useState } from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { fetchCity } from '../actions';


const CitiesIndex = () => {      

    const cities = useSelector(state => state.cities)   //Names payload.data cities   
    const [city, setCity] = useState("");
    const dispatch = useDispatch();    

    useEffect(() => {           
    }, [dispatch, fetchCity, city]);    
    
    async function handleButtonClick (data) {     
        await dispatch(fetchCity(data));                               
    };      
    
    //Map through state values for all desired values
    function renderCities() {          
        if (!_.isEmpty(cities)) { 
             return(
                <div>
                {cities.map((city) => 
                <Row className = 'mb-4 mt-4' md={4}>
                    <Col width={3} class="header-col">                        
                        {city.city.name}                             
                    </Col>                  
                    <Col>    
                        <Sparklines data={city.list.slice(0, 5).map(temperatures => temperatures.main.temp)}>       
                        <SparklinesLine color="orange" />
                        <SparklinesReferenceLine type="mean" />
                        </Sparklines>
                    </Col> 
                    <Col>                                     
                        <Sparklines data={city.list.slice(0, 5).map(temperatures => temperatures.main.pressure)}>       
                        <SparklinesLine color="green" />
                        <SparklinesReferenceLine type="mean" />
                        </Sparklines>                            
                    </Col>   
                    <Col>                                     
                        <Sparklines data={city.list.slice(0, 5).map(temperatures => temperatures.main.humidity)}>       
                        <SparklinesLine color="black" />
                        <SparklinesReferenceLine type="mean" />
                        </Sparklines>                            
                    </Col>                                                  
                </Row>                
                )}                  
                </div>                
                )        
        }        
             return <div>No cities have been selected</div>        
    }     
    //Initial render with column headers
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
        <Row className = 'mb-4 mt-4' md={4}>
            <Col class="header-col">City</Col>
            <Col class="header-col">Temperature (F)</Col>
            <Col class="header-col">Pressure (hPa)</Col>
            <Col class="header-col">Humidity (%)</Col>                                 
        </Row>  
        <hr />  
        {renderCities()} 
        </div>
    )
}

export default CitiesIndex;

