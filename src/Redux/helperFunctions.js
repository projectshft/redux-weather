export const getTemp = (api) => {
  const index = [0, 3, 11, 19, 27];
  return index.map((index) => api[index].main.temp)
}

export const getPres = (api) => {
  const index = [0, 3, 11, 19, 27];
  return index.map((index) => api[index].main.pressure)
}

export const getHum = (api) => {
  const index = [0, 3, 11, 19, 27];
  return index.map((index) => api[index].main.humidity)
}