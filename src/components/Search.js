import React, { useState } from "react";
import styled from "styled-components";
//redux
import { useDispatch } from "react-redux";
import { loadWeatherData } from "../actions/weatherAction";

const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  //event listeners
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSearchButton = () => {
    if (!input) {
      alert("This field is required. Please enter city.");
    } else {
      dispatch(loadWeatherData(input));
      setInput("");
    }
  };

  return (
    <div>
      <StyledHeader>
        <h1>Redux Weather</h1>
      </StyledHeader>
      <StyledSearch>
        <input
          className="search-bar"
          placeholder="Search city weather"
          value={input}
          onChange={handleInput}
        ></input>
        <button onClick={handleSearchButton}>Search</button>
      </StyledSearch>
    </div>
  );
};

const StyledHeader = styled.div`
  min-height: 10vh;
  background-color: #f2f2f1;
  text-align: center;
  padding-top: 2rem;
  font-family: "Lobster", cursive;
  margin-bottom: 2rem;
  h1 {
    color: #ec6e4c;
  }
`;

const StyledSearch = styled.div`
  text-align: center;
  input {
    width: 30%;
    margin-right: 1rem;
    height: 1.5rem;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }
  button {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 3px solid #48484a;
    background: transparent;
    color: white;
    background-color: #48484a;
    transition: all 0.3s ease;
    &:hover {
      background-color: #ec6e4c;
      color: white;
    }
  }
`;

export default Search;
