import { fetchForecast } from "../actions";

const searchBar = () => {

  return (

    <div id= "bar" className= "input-group">
      <input type="text" id="search-city" className="form-control rounded" placeholder="Get a 5-day forecast in your favorite cities" aria-label="Search" aria-describedby="search-addon" />
      
      <button type="button" className="btn btn-outline-primary" onClick={fetchForecast}>Search</button> 
      
    </div>
   
  );
};

export default searchBar;