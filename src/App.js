//App component which acts as a container for all other components
import React from "react";
import SearchBar from "./container/search_bar";
import WeatherList from "./container/weather_list"

const App = () =>{
  return(
    <div className="col-md-8 offset-md-2">
      <SearchBar />
      <br></br>
      <WeatherList />
    </div>
  )
}

export default App;