import React from "react";
import "./HeaderFooter.css";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          WeatherSearch
        </a>
      </nav>
    </div>
  );
}

export default Header;
