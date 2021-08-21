import CityTable from './city-table'

function App() {
  return(
  <div className="container">
    
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <input type="text" className="form-control" id="city-input" placeholder="Get a five-day forecast in your favorite cities"></input>
      </div>
      <div className="col">
        <button type="button" className="btn btn-primary">Search</button>
      </div>
      <hr></hr>
    </div>
    
    <div className="row">
      <CityTable />
    </div>

  </div>
  )
}

export default App;
