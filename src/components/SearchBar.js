import { Col, InputGroup, Button, FormControl } from 'react-bootstrap';

const SearchBar = () => {
  const handleSubmit = () => {};

  return (
    <Col md={{ span: 8, offset: 2 }}>
      <InputGroup className="pt-2 mb-3" onSubmit={handleSubmit}>
        <FormControl
          placeholder="Enter City Name or Zip Code"
          aria-label="City Search"
          aria-describedby="location-search"
        />
        <Button variant="outline-secondary" type="submit" id="button-addon2">
          Search
        </Button>
      </InputGroup>
    </Col>
  );
};

export default SearchBar;
