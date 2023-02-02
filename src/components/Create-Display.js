import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

const CreateDisplay = () => {
  let weather = useSelector((state) => state.weather);

  const handleAverage = (data, measurement) => {
    const average = array => array.reduce((a, b) => a+b) / array.length
    let correct = 0;

    if(measurement === 'temperature') {
      correct = Math.round(average(data))
      return <h6>{correct}&deg;F</h6>
    } else if (measurement === 'pressure') {
      correct = Math.round(average(data))
      return <h6>{correct} <small>hPa</small></h6>
    } else if (measurement === 'humidity') {
      correct = Math.round(average(data))
      return <h6>{correct}%</h6>
    };
  }

 const handleDisplay = () => {
  console.log(weather[0])
  let data = [];
  let cityName = '';
  if(weather.length >= 1) {
    weather.map((city, index) => {
      let cityInfo = [];
      for (const key in city) {
        if(key === 'name') {
          cityName = <Col key={index.toString()} style={{textAlign: 'center'}}>{city[key]}</Col>
        } else {
          cityInfo.push(
            <Col key={city.id}>
              <Sparklines data={city[key]}>
                <SparklinesLine />
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
              <div key={city.toString()} style={{textAlign: 'center'}}>{handleAverage(city[key], key)}</div>
            </Col>
            )
        }
      }
      data.push(<Row className="align-items-center mt-5 ms-5">{cityName}{cityInfo}</Row>)
    })
  };
  return data;
 }

  return (
    <Container>
        {handleDisplay()}
    </Container>
  );
}

export default CreateDisplay;