import './App.css';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

// weather api key
const apiKey = 'e762b32d14efd802e7f067526402633f';
// placeholder for URL search
const searchInput = "";

// current day and five day forecast URLs
const todaysForecastURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=imperial`;

const fiveDayForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&appid=${apiKey}&units=imperial`;

// placeholder sample date for Sparklines component
const sampleData = [];

// Sparklines mean chart component template
const sparkLineMeanChart = (
  <Sparklines data={sampleData}>
      <SparklinesLine />
      <SparklinesReferenceLine type="mean" />
  </Sparklines>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form class="search-form">
          <div class="form-group">
            <input type="text" id="search-query" class="form-control"     placeholder="City">
            </input>
            <button type="button" class="btn btn-primary search">Search</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
