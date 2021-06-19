import React from "react";
//redux
import { useSelector } from "react-redux";

const Weather = ({ children }) => {
  const { isLoading } = useSelector((state) => state.weather);

  return (
    <div>
      <>{!isLoading && <div>{children}</div>}</>
    </div>
  );
};

export default Weather;
