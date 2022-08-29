import React, { useEffect } from 'react'
import averageCalculator from './averageCalculator';
import { useSelector } from 'react-redux';
// import FiveDayGraph from './FiveDayGraph';
import { Sparklines, SparklinesLine, SparklinesReferenceLine  } from 'react-sparklines'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WeatherRow = () => {
  const forecastArray = useSelector((state) => state.forecastState)
  if(forecastArray.order.length > 0){
    return forecastArray.order.map((fc) => {
      const forecastElement = forecastArray.entries[fc]
      const name = forecastElement.name
      const temp = forecastElement.temp
      const tempAvg = averageCalculator(temp)
      const humidity = forecastElement.humidity
      const humidityAvg = averageCalculator(humidity)
      const pressure = forecastElement.pressure
      const pressureAvg = averageCalculator(pressure)
      console.log(`City name: ${name}`)
      console.log(`temp: ${temp}`)
      console.log(forecastArray.order);

      return <Container>
                <Row className='graphSection row' key={fc}>
                  <Col>
                  <h2 className='col'>{name}</h2>
                  </Col>
                  <Col>
                  <Sparklines data={temp}><SparklinesLine color="red" className="slgraph col"/>
                  <SparklinesReferenceLine type='mean' />
                  </Sparklines>
                  <h4>Temperature: {tempAvg}</h4>
                  </Col>
                  <Col>
                  <Sparklines data={humidity}><SparklinesLine color="blue" className="slgraph col"/>
                  <SparklinesReferenceLine type='mean' />
                  </Sparklines>
                  <h4>Humidity: {humidityAvg}</h4>
                  </Col>
                  <Col>
                  <Sparklines data={pressure}><SparklinesLine color="green" className="slgraph col"/>
                  <SparklinesReferenceLine type='mean' />
                  </Sparklines>
                  <h4>Pressure: {pressureAvg}</h4>
                  </Col>
                </Row>
                <hr />
              </Container>
          }
          )
            

    } else {
      return (
        <div>
        <h2>No cities to display</h2>
        </div>
      )
    }
}
    
export default WeatherRow