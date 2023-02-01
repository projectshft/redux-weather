import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

const CreateDisplay = () => {
  let weather = useSelector((state) => state.weather);

 const handleDisplay = () => {
  let data = [];
  if(weather.length > 1) {
    weather.map((city) => {
      let cityInfo = [];
      for (const key in city) {
        cityInfo.push(
          <Col>
            <Sparklines data={city[key]}>
              <SparklinesLine />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </Col>
          )
      }
      data.push(<Row>{cityInfo}</Row>)
    })
  }
  return data
 }

  return (
    <div>
        {handleDisplay()}
    </div>
  )
}

export default CreateDisplay;