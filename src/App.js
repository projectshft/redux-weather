import SearchBar from "./components/search-bar";

const App = (props) => {
  return (
    <div>
      <div className='jumbotron text-center'>
        <div className="container">
          <h1 className="jumbotron-heading">Weather App</h1>
          <br></br>
          <hr></hr>
          <SearchBar />
          <hr></hr>
          <br></br>
        </div>
      </div>
      <div className='container'>
        
      </div>
    </div>
  )
};

export default App;
