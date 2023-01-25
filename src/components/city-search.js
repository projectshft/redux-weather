import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';

const CitySearch = () => {


  return (
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Get a five-day forecast in your favorite cities">
        </Form.Control>
        <Button variant="dark" type="submit">Submit</Button>
      </Form>
  )
}

export default CitySearch