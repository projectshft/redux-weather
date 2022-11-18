import { useState } from 'react';
import { Row, Col, InputGroup, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchLatitudeLongitude } from '../actions';

const SearchBar = () => {
  const [query, setQuery] = useState('sdfsdf');

  const dispatch = useDispatch();

  const handleSubmitClick = () => {
    console.log('clicked');
    dispatch(fetchLatitudeLongitude(query));
  };
  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <InputGroup className="my-3">
          <InputGroup.Text
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
