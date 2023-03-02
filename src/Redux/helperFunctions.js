import { useEffect, useRef } from "react";


//Get 5 day Temperature
export const getTemp = (api) => {
  const index = [0, 3, 11, 19, 27];
  return index.map((index) => Math.round(api.list[index].main.temp))
}
//get 5 day Pressure
export const getPres = (api) => {
  const index = [0, 3, 11, 19, 27];
  return index.map((index) => api.list[index].main.pressure)
}
//get 5 day Humidity
export const getHum = (api) => {
  const index = [0, 3, 11, 19, 27];
  return index.map((index) => api.list[index].main.humidity)
}

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value; //assign the value of ref to the argument
  },[value]); //this code will run when the value of 'value' changes
  return ref.current; //in the end, return the current ref value.
}




