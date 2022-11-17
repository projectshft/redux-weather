import { Row, Col, InputGroup, Form } from 'react-bootstrap';

const SearchBar = () => (
  <Row className="justify-content-center">
    <Col md={6}>
      <InputGroup className="my-3">
        <InputGroup.Text
          role="button"
          type="submit"
          className="btn btn-primary"
          id="search-current-location"
        >
          CL
        </InputGroup.Text>
        <Form.Control placeholder="Enter a city to find weather information..." />
        <InputGroup.Text
          role="button"
          type="submit"
          className="btn btn-primary"
          id="search-button"
        >
          Search
        </InputGroup.Text>
      </InputGroup>
    </Col>
  </Row>
);

export default SearchBar;
