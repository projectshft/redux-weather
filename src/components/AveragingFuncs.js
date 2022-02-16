export const AverageTempForCity = (data) => {
  const updatedArr = data.list
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

export const AveragePressureForCity = (data) => {
  const updatedArr = data.list
  const forecastList = [];
  updatedArr.map(
    e => {
      return forecastList.push(e.main.pressure)
    }
  )

  const sum = forecastList.reduce((a, b) => a + b, 0);
  const avg = Math.floor(sum / forecastList.length)

  return avg;
}

export const AverageHumidityForCity = (data) => {
  const updatedArr = data.list
  const forecastList = [];
  updatedArr.map(
    e => {
      return forecastList.push(e.main.humidity)
    }
  )

  const sum = forecastList.reduce((a, b) => a + b, 0);
  const avg = Math.floor(sum / forecastList.length)

  return avg;
}