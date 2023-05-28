import "./App.css";
import SearchBar from "./components/Search";
import WeatherView from "./components/View";

function App() {
  
 
  return (
    <div className="App">
      <h1 className="title"> Redux Weather </h1>
      <h4 className="title">5 Day Hi's and Low's</h4>
      <SearchBar />
      <div class="container text-center">
        <div class="row align-items-start">
          <h3 class="label col">Temperature</h3>
          <h3 class="label col">Pressure</h3>
          <h3 class="label col">Humidity</h3>
        </div>
      </div>
      <WeatherView />
    </div>
  );
}

export default App;
