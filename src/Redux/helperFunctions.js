//Get 5 day Temperature
export const getTemp = (api) => {
  const index = [0, 3, 11, 19, 27];
  return index.map((index) => Math.round(api[index].main.temp))
}
//get 5 day Pressure
export const getPres = (api) => {
  const index = [0, 3, 11, 19, 27];
  return index.map((index) => api[index].main.pressure)
}
//get 5 day Humidity
export const getHum = (api) => {
  const index = [0, 3, 11, 19, 27];
  return index.map((index) => api[index].main.humidity)
}