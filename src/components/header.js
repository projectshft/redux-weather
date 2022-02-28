import { Row,Col, Container, InputGroup, Button, FormControl, Table } from "react-bootstrap";
import InputSection from './input-section'

const header = function (props) {
  return (
    <Container>
      <Row>
        <Col >
          <div>
            <div className="text-center">
              <h1>Weather App</h1>
            </div>
            <div className="container">
              <div>
                {props.children}
              </div>
            </div> 
          </div>
        </Col>
      </Row>
    </Container>    
  )    
};

export default header;