import Header from './Header';
import SearchBar from './SearchBar';
import Weather from '../containers/Weather';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Weather />
    </div>
  );
}

export default App;
