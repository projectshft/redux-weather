import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Header = () => {
  return (
    <Container className='top-header align-items-center'>
      <Row className='mt-5 ms-5'>
        <Col><h6 style={{textAlign: 'center'}}>City</h6></Col>
        <Col><h6 style={{textAlign: 'center'}}>Temperature(F)</h6></Col>
        <Col><h6 style={{textAlign: 'center'}}>Pressure(hPa)</h6></Col>
        <Col><h6 style={{textAlign: 'center'}}>Humidity(%)</h6></Col>
      </Row>
    </Container>
  )
}

export default Header