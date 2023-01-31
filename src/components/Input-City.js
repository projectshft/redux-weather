import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from '../action-creators/actions';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const InputCity = () => {
  const [city, setCity] = useState('');
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch(); 

  const handleDisplay = () => {
    dispatch(fetchWeather(city)) 
  }

  const handleDisplay1 = () => {
    console.log(weather)
  }


  return(
  <Container>
    <Row className="justify-content-md-center mt-4" xs={1} md={2} gap={3}>
      <Col >
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button variant="primary" id="button-addon2" onClick={handleDisplay}>
            Button
          </Button>
          <Button variant="primary" id="button-addon2" onClick={handleDisplay1}>
            Console
          </Button>
        </InputGroup>
      </Col>
    </Row>
  </Container>

  )
}

export default InputCity;

// it loops through weather looking for the property humidity. It returns an array with that object and then we use map to display the data.




// if(weather.length === 3) {
//   const humidityData = weather.filter((measurement) => {
//     measurement.hasOwnProperty('humidity') 
//      return measurement.humidity;
//   });

//   if(humidityData) {
//     return humidityData[0].humidity.map((data) => <li>{data}</li>);
//   }
// } else (console.log('wait'))