import './App.css';
import Heading from './components/Heading';
import SearchBar from './components/SearchBar';
import WeatherHeading from './components/WeatherHeading';
import { Provider } from "react-redux";


function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <SearchBar/>
      <WeatherHeading />
    </div>
  );
}

export default App;
