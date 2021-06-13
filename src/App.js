import React from "react";
//components
import Search from "./components/Search";
//style
import GlobalStyle from "./gloablStyle";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Search />
    </div>
  );
};

export default App;
