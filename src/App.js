import React from "react";
import SearchBar from "./container/search_bar";
import WeatherIndex from "./container/weather_index"


const App = () =>{
  return(
    <div className="col-md-6 offset-md-3">
      <SearchBar />
      <br></br>
      <WeatherIndex />
    </div>
  )
}

export default App;