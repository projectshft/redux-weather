import './App.css';
import {
  Container,
  Row,
  Form,
  FormControl,
  Button,
  Table,
  InputGroup,
} from 'react-bootstrap';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCity } from './actions';

function App() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const queryCity = e.target.elements.query.value;
    e.preventDefault();
    dispatch(fetchCity(queryCity));
  };

  const cities = useSelector((state) => state.cities);

  const renderCities = () =>
    cities.cityList.map((city, index) => (
      <tr key={index}>
        <td>{city.name}</td>
        <td>
          <Sparklines data={city.temperature} height={60} width={200}>
            <SparklinesLine color="orange" />
            <SparklinesReferenceLine
              type="mean"
              style={{
                stroke: 'red',
                strokeOpacity: 0.75,
                strokeDasharray: '3, 3',
              }}
            />
          </Sparklines>
          {city.avgTemp}&#176;F
        </td>
        <td>
          <Sparklines data={city.pressure} height={60} width={200}>
            <SparklinesLine color="lime" />
            <SparklinesReferenceLine
              type="mean"
              style={{
                stroke: 'red',
                strokeOpacity: 0.75,
                strokeDasharray: '3, 3',
              }}
            />
          </Sparklines>
          {city.avgPressure} hPa
        </td>
        <td>
          <Sparklines data={city.humidity} height={60} width={200}>
            <SparklinesLine color="turquoise" />
            <SparklinesReferenceLine
              type="mean"
              style={{
                stroke: 'red',
                strokeOpacity: 0.75,
                strokeDasharray: '3, 3',
              }}
            />
          </Sparklines>
          {city.avgHumidity}%
        </td>
      </tr>
    ));

  return (
    <div className="App">
      <Container>
        <Row style={{ padding: 30 }}>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Get a 5-day forecast for your favorite cities"
                id="query"
              />
              <Button variant="info" type="submit">
                Submit
              </Button>
            </InputGroup>
          </Form>
        </Row>
        <Row>
          <Table hover>
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature (&#176;F)</th>
                <th>Pressure (hPa)</th>
                <th>Humidity (%)</th>
              </tr>
            </thead>
            <tbody>{renderCities()}</tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default App;
