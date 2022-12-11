import './App.css';
import Heading from './components/Heading';
import SearchBar from './components/SearchBar';
import WeatherTable from './components/WeatherTable';
import { Provider } from "react-redux";


function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <SearchBar/>
      <WeatherTable />
    </div>
  );
}

export default App;
