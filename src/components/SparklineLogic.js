export const tempArray = (data) => {
  return data.list.map(e => e.main.temp)
}

export const pressureArray = (data) => {
  return data.list.map(e => e.main.pressure)
}