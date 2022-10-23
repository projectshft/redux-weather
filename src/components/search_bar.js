import React from "react";
import { fetchWeather } from "../actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

const SearchBar = (props) => {
  const [city, setCity] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();

    
    dispatch(fetchWeather(city));
    return false;
  };

  return (
    <div>
      <br></br>

      <Row>
        <Col>
          <Form.Control
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="get a 5-day forecast for your favorite cities"
          />
        </Col>
        <Col>
          <Button variant="primary" type="submit" onClick={handleSearch}>
            Search
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBar;
