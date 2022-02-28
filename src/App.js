import { Container, Row, Col } from 'react-bootstrap';

import ChartTable from './components/ChartTable';
import SearchBar from './components/SearchBar';

const App = () => (
  <Container fluid>
    <Row>
      <Col md={{ span: 10, offset: 1 }}>
        <h1 className="display-3 text-center m-4">Weather App 2.0</h1>
        <hr />
        <SearchBar />
        <ChartTable />
      </Col>
    </Row>
  </Container>
);

export default App;
