import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Header = () => {
  return (
    <Container className='table table-bordered align-items-center'>
      <Row className='my-5 mx-5 '>
        <Col><h5 style={{textAlign: "center"}}>City</h5></Col>
        <Col><h5 style={{textAlign: "center"}}>Temperature(F)</h5></Col>
        <Col><h5 style={{textAlign: "center"}}>Pressure(hPa)</h5></Col>
        <Col><h5 style={{textAlign: "center"}}>Humidity(%)</h5></Col>
      </Row>
    </Container>
    
  )
}

export default Header