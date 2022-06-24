import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';



const ForecastSkeleton = ({city, temp, pressure, humidity, key}) => {
    return (
      <Container key={key}>
      <Row>
        <Col>{city}</Col>
        <Col>
          <Sparklines data={temp}>
            <SparklinesLine/>
            <SparklinesReferenceLine type="mean" />
          </Sparklines>

          {temp.reduce((a, b) => a + b, 0)/temp.length} F
        </Col>
        <Col>
          <Sparklines data={pressure}>
            <SparklinesLine/>
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
          {pressure.reduce((a, b) => a + b, 0)/pressure.length} hPa
        </Col>
        <Col>
          <Sparklines data={humidity}>
          <SparklinesLine/>
          <SparklinesReferenceLine type="mean" />
          </Sparklines>
          {humidity.reduce((a, b) => a + b, 0)/humidity.length} %
        </Col>
      </Row>
     </Container>
    )
    };

export const Forecast = () => {

  const forecasts = useSelector(state => state.forecast.forecasts);
  if(forecasts.length > 0)
    {
      return (
      <div> { 
          forecasts.map((forecast) => (
            <ForecastSkeleton 
              city={forecast.city}
              temp={forecast.fiveDayArray.map(obj=>Math.round(obj.temp))}
              pressure={forecast.fiveDayArray.map(obj=>Math.round(obj.pressure))}
              humidity={forecast.fiveDayArray.map(obj=>Math.round(obj.humidity))}
              key={forecast.city.id}
            />
          ))           
        }
      </div>
    )
      } else {return <div/>}
    } 





