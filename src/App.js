import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/header';
import CitySearch from './components/city-search';
import CreateDisplay from './components/weather-display';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

  <Container className='align-item-center'>
    <Row className='ms-5'>
      <Col>
        <CitySearch />
        <Header />
        <CreateDisplay/>
      </Col>
    </Row>
  </Container>
  )


}
  
    

export default App;
