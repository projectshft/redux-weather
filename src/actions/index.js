export const addCityName = (value) => {
  return {
    type: 'add-city-name',
    payload: {
      value
    }
  }
}

export const addPressure = (city, value) => {
  return {
    type: 'add-pressure',
    payload: {
      city,
      value
    }
  }
}

export const addHumidity = (city, value) => {
  return {
    type: 'add-humidity',
    payload: {
      city,
      value
    }
  }
}

export const addTemperature = (city, value) => {
  return {
    type: 'add-temperature',
    payload: {
      city,
      value
    }
  }
}
