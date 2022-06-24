import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import { InputGroup, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { fetchForecast } from './features/forecast/forecastSlice';


const Prompt = () => {
  const dispatch = useDispatch();

  const [city, setCity] = useState("enter city");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchForecast(city));
    setCity("enter city");
  }
   
  const handleChange = (event) => {
    setCity(event.target.value);
  };


  return (
    <div>
      <Container>
      <InputGroup className="mb-3">
        <FormControl
          type="text"
          value={city}
          onChange={handleChange}
          aria-describedby="basic-addon2"
        />
        <Button 
          onClick={handleSubmit} 
          type="submit" 
          className="btn btn-primary"
          id="button-addon2"
          >Submit
        </Button>   
      </InputGroup>
      </Container>

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
