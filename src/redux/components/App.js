import SearchResults from "./SearchResults";
import { Form, FormControl, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="container">
      <div className="row mt-3">
        <br />
        <Form inline className="d-flex mb-3">
          <FormControl type="text" placeholder="Enter a city..." className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <hr />
        <SearchResults />
      </div>
    </div>
  );
}

export default App;