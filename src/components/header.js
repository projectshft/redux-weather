import { Row,Col, Container, InputGroup, Button, FormControl } from "react-bootstrap";

const header = function (props) {

  return (
    <Container>
      <Row>
        <Col xs={{ span: 10, offset:1}} >
          <div>
            <div className="text-center">
              <h1>Weather App</h1>
              <InputGroup className="mb-4">
                <FormControl></FormControl>
                <Button>
                  Search
                </Button>
              </InputGroup>
            </div>
            <hr />
            <div className="container">
              {props.children}
            </div> 
          </div>
          Hello
        </Col>
      </Row>
    </Container>    
  )    
};

export default header;