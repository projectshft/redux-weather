import { Row,Col, Container } from "react-bootstrap";

const header = function (props) {
  return (
    <Container>
      <Row>
        <Col >
          <div>
            <div className="text-center">
              <h1>Redux Weather App</h1>
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