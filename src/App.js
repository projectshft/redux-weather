import "./App.css";
import SearchBar from "./components/Search";
// import Test from "./components/test";

import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const weather = useSelector((state) => state.weather);

  useEffect(() => {
    // console.log(weather);
    // console.log(weather.locations[0]);
  }, [weather]);
  console.log(weather.locations[0]);

  return (
    <div className="App">
      {/* {weather} */}
      <h3> Redux Weather </h3>
      <SearchBar />
      {weather.locations.map((data) => (
        <div>{data.name}</div>
      ))}
      {/* <div>{weather.locations[0]}</div> */}
      {/* <Test /> */}
    </div>
  );
}

export default App;
