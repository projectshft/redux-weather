import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WeatherDisplay = () => {
  const weather = useSelector((state) => state.weather);

  const handleAvg = (data, measurement) => {
    const average = array => array.reduce((a, b) => a + b) / array.length;
    let correct = 0;

    if (measurement === 'temperature') {
      correct = Math.round(average(data));
      return <h6>{correct}&deg;F</h6>;
    } else if (measurement === 'pressure') {
      correct = Math.round(average(data));
      return <h6>{correct} <small>hPa</small></h6>;
    } else if (measurement === 'humidity') {
      correct = Math.round(average(data));
      return <h6>{correct}%</h6>;
    }
  };

  const handleWeatherDisplay = () => {
    let data = [];
    let cityName = '';

    if (weather.length >= 1) {
      weather.forEach((city) => {
        let cityInfo = [];
        for (const key in city) {
          if (key === 'name') {
            cityName = <Col key={key} style={{ textAlign: 'center' }}>{city[key]}</Col>;
          } else {
            cityInfo.push(
              <Col key={key}>
                <Sparklines data={city[key]}>
                  <SparklinesLine />
                  <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <div key={`${city.name}-${key}`} style={{ textAlign: 'center' }}>
                  {handleAvg(city[key], key)}
                </div>
              </Col>
            );
          }
        }
        data.push(
          <Row key={city.name} className="align-items-center mt-4 ms-4">
            {cityName}
            {cityInfo}
          </Row>
        );
      });
    }

    return data;
  };

  return (
    <Container>
      {handleWeatherDisplay()}
    </Container>
  );
};

export default WeatherDisplay;
