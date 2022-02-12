export const AverageTempForCity = (arr) => {
  debugger;
  const updatedArr = arr[0].list
  const forecastList = [];
  updatedArr.map(
    e => {
      return forecastList.push(e.main.temp)
    }
  )

  const sum = forecastList.reduce((a, b) => a + b, 0);
  const avg = Math.floor(sum / forecastList.length)

  return avg;
}