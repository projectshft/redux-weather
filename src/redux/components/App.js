import SearchResults from "./SearchResults";
import { Form, FormControl, Button } from 'react-bootstrap';
import config from "../../config";
import axios from "axios";
import { useDispatch } from "react-redux";
import { searchCity } from "../actions/actions-index";

const city = 'London'
const key = config.MY_API_KEY

function App() {
  const dispatch = useDispatch()
  
  // "https://api.openweathermap.org/data/2.5/forecast/?q=Austin&units=imperial&appid=303f064fa97c38222657765c89499f12"
  
  const fetchWeather = function() {
    axios.get('https://api.openweathermap.org/data/2.5/forecast/?q=' + city + '&units=imperial&appid=' + key)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    })
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <br />
        <Form inline className="d-flex mb-3">
          <FormControl type="text" placeholder="Enter a city..." className="mr-sm-2" />
          <Button
            variant="outline-success"
            onClick={() => dispatch(searchCity())}
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