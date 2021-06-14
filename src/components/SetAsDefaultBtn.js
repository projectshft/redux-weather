import React from "react";
import { useDispatch } from "react-redux";
import { setDefaultCity } from "../actions";

export default function SetAsDefaultBtn({ cityName }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setDefaultCity(cityName));
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="btn btn-sm btn-outline-info"
    >
      Set As Default City
    </button>
  );
}
