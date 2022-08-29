import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App container">
      <Header />
      <Routes>
        <Route index element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
