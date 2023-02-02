import React from 'react'
import CreateDisplay from './components/Create-Display';
import InputCity from './components/Input-City';
import Header from './components/Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import './App.css';





function App () {



  return (
    <Container className='align-items-center'>
      <Row className='ms-5 me-5'>
        <Col>
          <InputCity />
          <Header />
          <CreateDisplay />
        </Col>
      </Row>
    </Container>
  )
}

export default App;

//the issue we are having is that useEffect is going before everything else in Display-Humidity. So we can't get it to wait till we type something in for state we are screwed. 
