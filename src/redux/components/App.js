import SearchResults from "./SearchResults";
import { Form, FormControl, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { searchCity } from "../actions/actions-index";
import { useState } from "react";

function App() {
  const dispatch = useDispatch()
  const [validationError, setValidationError] = useState('')
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const city = event.target.city.value;
    if (!city) {
      setValidationError('City is required.');
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(city)) {
      setValidationError('City can only contain letters and spaces.');
      event.target.city.value = ''
      return;
    }
    setValidationError('');
    try {
      await dispatch(searchCity(city));
    } catch (error) {
      setValidationError('Enter a valid city name and try again.');
    }
    event.target.city.value = ''
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
        { validationError && <div className="text-danger">{validationError}</div> }
        <hr />
        <SearchResults />
      </div>
    </div>
  );
}

export default App;