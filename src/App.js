import CityNameSearch from "./components/cityNameSearch";
import WeatherTable from "./components/weatherTable";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import WeatherHeader from "./components/weatherHeader";

const App = () => {
  return (
    <Container className="md-4">
      <WeatherHeader />
      <CityNameSearch />
      <WeatherTable />
    </Container>
  )
}

export default App