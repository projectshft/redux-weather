import { useState } from 'react';
import { Row, Col, InputGroup, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  fetch5DayWeatherForLocation,
  fetchCurrentWeatherForLocation,
  fetchLatitudeLongitude,
  fetchWeatherData,
  addWeatherData,
} from '../actions';

const SearchBar = () => {
  const [query, setQuery] = useState('sdfsdf');

  const dispatch = useDispatch();

  const handleCurrentLocationClick = async () => {
    const id = Date.now();

    const success = (pos) => {
      console.log('success');
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      dispatch(fetch5DayWeatherForLocation(lat, lon, id));
      dispatch(fetchCurrentWeatherForLocation(lat, lon, id));
    };

    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error);

    debugger;
  };

  // const handleSubmitClick = () => {
  //   const latLon = fetchLatitudeLongitude(query);
  //   const id = Date.now();

  //   latLon.then((res) => {
  //     const { lat } = res.data[0];
  //     const { lon } = res.data[0];

  //     dispatch(fetch5DayWeatherForLocation(lat, lon, id));
  //     dispatch(fetchCurrentWeatherForLocation(lat, lon, id));
  //   });
  // };
  const handleSubmitClick = async () => {
    const weatherData = await fetchWeatherData(query);

    const id = Date.now();

    dispatch(addWeatherData(weatherData, id));
  };

  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <InputGroup className="my-3">
          <InputGroup.Text
            onClick={handleCurrentLocationClick}
            role="button"
            className="btn btn-primary"
            id="search-current-location"
          >
            CL
          </InputGroup.Text>
          <Form.Control
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            placeholder="Enter a city to find weather information..."
          />
          <InputGroup.Text
            onClick={handleSubmitClick}
            role="button"
            className="btn btn-primary"
            id="search-button"
          >
            Search
          </InputGroup.Text>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default SearchBar;
