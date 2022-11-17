import { Container } from 'react-bootstrap';
import Header from './Header';
import SearchBar from './SearchBar';
import Weather from '../containers/Weather';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="main-container">
        <SearchBar />
        <Weather />
      </Container>
    </div>
  );
}

export default App;
