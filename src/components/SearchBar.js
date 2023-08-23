import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { fetchCoordinates } from '../actions';

function SearchBar() {
  const dispatch = useDispatch();

  const handleSubmit = (event, query) => {
    event.preventDefault();
    dispatch(fetchCoordinates(query))
  };
  
  return (
    <Container className="col-4 pt-4">
      <Form onSubmit={(event) => handleSubmit(event, event.target.search.value)}>
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