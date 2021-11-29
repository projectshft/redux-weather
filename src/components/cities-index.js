import '../App.css';
import {
  Container,
  Row,
  Form,
  FormControl,
  InputGroup,
  Button,
  Table,
} from 'react-bootstrap';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCity } from '../actions';

const CitiesIndex = () => {
  const dispatch = useDispatch();
  const textInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    textInput.current.focus();

    const queryCity = textInput.current.value;
    if (!queryCity) {
      alert('Please enter the name of a city to see its forecast');
      textInput.current.value = '';
    } else {
      dispatch(fetchCity(queryCity));
      textInput.current.value = '';
    }
  };

  const cities = useSelector((state) => state.cities);

  const renderCities = () =>
    cities.cityList.map((city, index) => (
      <tr key={index}>
        <td style={{ verticalAlign: 'middle' }}>{city.name}</td>
        <td>
          <Sparklines data={city.temperature} height={60} width={200}>
            <SparklinesLine color="orange" />
            <SparklinesReferenceLine
              type="avg"
              style={{
                stroke: 'magenta',
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
              type="avg"
              style={{
                stroke: 'magenta',
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
              type="avg"
              style={{
                stroke: 'magenta',
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
        <Row style={{ padding: 40 }}>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <FormControl
                type="text"
                ref={textInput}
                placeholder="Get a 5-day forecast for your favorite cities"
                id="query"
                autoFocus
              />
              <Button variant="info" type="submit">
                Submit
              </Button>
            </InputGroup>
          </Form>
        </Row>
        <Row>
          <Table hover variant="dark">
            <thead>
              <tr>
                <th style={{ width: '16%' }}>City</th>
                <th style={{ width: '28%' }}>Temperature (&#176;F)</th>
                <th style={{ width: '28%' }}>Pressure (hPa)</th>
                <th style={{ width: '28%' }}>Humidity (%)</th>
              </tr>
            </thead>
            <tbody>{renderCities()}</tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
};

export default CitiesIndex;
