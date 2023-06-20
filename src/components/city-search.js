import { fetchWeather } from "../actions/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CitySearch = () => {
  const [city, citySet] = useState('');
  const dispatch = useDispatch('');

  const handleWeatherDisplay = () => {
    dispatch(fetchWeather(city))
  }

  return (
    <Container>
      <Row>
        <Col>
          <input className="form-control" type="text" placeholder="City" aria-label="City" value={city} onChange={(e) => citySet(e.target.value)}/>
          <button type="button" onClick={handleWeatherDisplay} class="btn btn-primary">Submit</button>
        </Col>
      </Row>
    </Container>
  )

  }


export default CitySearch;