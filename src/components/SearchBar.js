import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchBar() {
  return (
    <Container className="col-4 pt-4">
      <Form>
        <Form.Group className="mb-3" controlId="formSearch">
          <Form.Control type="text" placeholder="Enter city here" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default SearchBar;