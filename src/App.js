import CityNameSearch from "./components/cityNameSearch";
import WeatherTable from "./components/weather-table";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <Container className="md-4">
      <CityNameSearch />
      <WeatherTable />
    </Container>
  )
}

export default App