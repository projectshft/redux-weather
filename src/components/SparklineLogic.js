export const tempArray = (data) => {
  return data.list.map(e => e.main.temp)
}