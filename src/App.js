import React, { useEffect } from "react";
//components
import Search from "./components/Search";
import DefaultCity from "./components/DefaultCity";
import Weather from "./components/Weather";
import WeatherData from "./components/WeatherData";
//style
import GlobalStyle from "./gloablStyle";

//redux
import { useDispatch } from "react-redux";
import {
  makeDefaultCity,
  loadDefaultCityForecast,
  loadDefaultCityCurrent,
  loadIsLoading,
} from "./actions/makeDefaultAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("city")) {
      dispatch(loadIsLoading());
      dispatch(makeDefaultCity(localStorage.getItem("city")));
      dispatch(loadDefaultCityForecast(localStorage.getItem("city")));
      dispatch(loadDefaultCityCurrent(localStorage.getItem("city")));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <GlobalStyle />
      <Search />
      <DefaultCity />
      <Weather>
        <WeatherData />
      </Weather>
    </div>
  );
};

export default App;
