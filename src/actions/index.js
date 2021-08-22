import { bindActionCreators } from "redux"

export const addTemperature = (temperature) => {
  return {
    type: 'TEMPERATURE/ADD_TEMPERATURE',
    temperature: temperature,
  }
}