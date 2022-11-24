import { FETCH_WEATHER } from "../actions";

function getAverages (temps, arr, fiveDays) {
    for (let i = 0; i < fiveDays.length; i++) {
     arr.push(Math.floor(fiveDays[i].reduce((a,b)=>a+b,0) / fiveDays[i].length))
    }
    return arr;
  }

function divideIntoDays(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

const initialState = {
    items: []
}

const reducer = function(state=initialState, action) {
    switch (action.type) {
      case FETCH_WEATHER:
        console.log('payload', action.payload)
        const list= action.payload.list
        const temps = list.map(a=> a.main.temp)
        const pressures = list.map(a=> a.main.pressure)
        const humidities = list.map(a=> a.main.humidity)
        const oneDay = 8;
        const fiveDayTemps = divideIntoDays(temps, oneDay)
        const fiveDayPressures = divideIntoDays(pressures, oneDay)
        const fiveDayHumidities = divideIntoDays(humidities, oneDay)
        const tempArr = []
        const pressureArr = []
        const humidityArr = []
        const avgTemps = getAverages(temps, tempArr, fiveDayTemps)
        const avgPressures = getAverages(pressures, pressureArr, fiveDayPressures)
        const avgHumidities = getAverages(humidities, humidityArr, fiveDayHumidities)
        const avgCeptionTemp = avgTemps.reduce((a,b)=>a+b,0) / avgTemps.length
        const avgCeptionPressure = avgPressures.reduce((a,b)=>a+b,0) / avgPressures.length 
        const avgCeptionHumidity = avgHumidities.reduce((a,b)=>a+b,0) / avgHumidities.length 
       
        let weatherObj = {
            avgTemps: avgTemps || [],
            avgPressures: avgPressures  || [],
            avgHumidities: avgHumidities || [],
            avgCeptionTemp: avgCeptionTemp || '',
            avgCeptionPressure: avgCeptionPressure || '',
            avgCeptionHumidity: avgCeptionHumidity || '',
            city: action.payload.city.name  
        }
            return {
                items: [weatherObj, ...state.items]
            }   
            default:
                return state;
        };
    }


export default reducer