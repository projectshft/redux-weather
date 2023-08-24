import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { fetchLocation } from '../actions';

function SearchBar() {
  const dispatch = useDispatch();

  const handleSubmit = (event, query) => {
    event.preventDefault();
    event.target.search.value = '';
    dispatch(fetchLocation(query));
  };

  return (
    <Container className="col-4 pt-4">
      <Form
        className="d-flex justify-content-between"
        onSubmit={(event) => handleSubmit(event, event.target.search.value)}
      >
        <Form.Group className="flex-grow-1 me-3 mb-3" controlId="formSearch">
          <Form.Control
            type="text"
            name="search"
            placeholder="Enter city here"
            required
          />
        </Form.Group>
        <Button className="mb-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default SearchBar;
