import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Weather from './Weather';
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherData } from "./actions/types";


const App = () => {
  const weather = useSelector ((state) => state.weatherReducer)
  const dispatch = useDispatch() 
  const [city, setCity] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherData(city))
    setCity(e.target.elements.city.value);
  }

  return (
    <div style={{textAlign: "center"}}>
      <h1>Weather Redux</h1>
      <Form inline onSubmit={handleSearch}>
        <FormControl type="text" placeholder="Enter city name"  style={{width:'50%'}} name="city"/>
        <Button variant="primary" type="submit">Search</Button>
      </Form>
      <Weather city={city} />
    </div>
  );
}

export default App;
