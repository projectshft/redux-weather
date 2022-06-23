import { useState, useEffect } from 'react';
import { useDispatch, useSelector, getState } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
// import {selectForecasts} from './features/forecast/forecastSlice'
import { fetchForecast } from './features/forecast/forecastSlice';
// import { forecastSlice } from './features/forecast/forecastSlice';


const Prompt = () => {
  const dispatch = useDispatch();

  const [city, setCity] = useState("enter city");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchForecast(city));
  }
   
  const handleChange = (event) => {
    setCity(event.target.value);
  };


  return (
    <div>
      <Form.Group >
        <Form.Control
          type="text"
          value={city}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</Button>   
      </Form.Group>

      <Container>
        <Row>
          <Col>City</Col>
          <Col>Temperature (F)</Col>
          <Col>Pressure (hPa)</Col>
          <Col>Humidity (%)</Col>
        </Row>
       </Container>
      
    </div>
  )
};

export default Prompt;
