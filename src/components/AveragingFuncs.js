export const averageTempForCity = (arr) => {
  const forecastList = [];
  
  arr.map(
    data => {
      return data.list.map(
        data => {
          const temp = data.main.temp;
          return forecastList.push(temp)
        }
      )
    }
  )

  const sum = forecastList.reduce((a, b) => a + b, 0);
  const avg = Math.floor(sum / forecastList.length)

  return avg;
}