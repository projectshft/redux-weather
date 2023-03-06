import "./App.css";
import SearchBar from "./components/Search";
import WeatherView from "./components/View";

function App() {
  
 
  return (
    <div className="App">
      <h1 className="title"> Redux Weather </h1>
      <h4 className="title">5 Day Averages</h4>
      <SearchBar />
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="label col">Temperature</div>
          <div class="label col">Pressure</div>
          <div class="label col">Humidity</div>
        </div>
      </div>
      <WeatherView />
    </div>
  );
}

export default App;
