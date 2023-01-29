import SearchResults from "./SearchResults";
import { Form, FormControl, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { searchCity } from "../actions/actions-index";

function App() {
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    const city = event.target.city.value;
    dispatch(searchCity(city));
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <br />
        <Form inline className="d-flex mb-3" onSubmit={handleSubmit}>
          <FormControl 
            type="text" 
            placeholder="Enter a city..." 
            className="mr-sm-2" 
            name="city"
          />
          <Button
            variant="outline-success"
            type="submit"
            >Search
          </Button>
        </Form>
        <hr />
        <SearchResults />
      </div>
    </div>
  );
}

export default App;