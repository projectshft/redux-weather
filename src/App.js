import "./App.css";
import SearchBar from "./components/Search";
import WeatherView from "./components/View";

function App() {
  return (
    <div className="App">
      <h3> Redux Weather </h3>
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
