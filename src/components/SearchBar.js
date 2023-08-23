import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function SearchBar() {

const apiKey = '94b98533e038ecd1e982b96426143136';
const ROOT_URL = 'https://api.openweathermap.org';

  const fetchCoordinates = async (event, query) => {
    event.preventDefault();
    console.log(query);
    const response = await axios.get(`${ROOT_URL}/geo/1.0/direct?q=${query}&appid=${apiKey}`);
  
    console.log(response);
  }
  
  return (
    <Container className="col-4 pt-4">
      <Form onSubmit={(event) => fetchCoordinates(event, event.target.search.value)}>
        <Form.Group className="mb-3" controlId="formSearch">
          <Form.Control type="text" name="search" placeholder="Enter city here" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default SearchBar;