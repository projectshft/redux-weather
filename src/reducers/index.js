import { FETCH_COORDINATES, FETCH_WEATHER } from "../actions";

const initialState = { weatherList: [] }

const reducer = function(state = initialState, action) {
    switch (action.type) {
      case FETCH_WEATHER:
        console.log('payload', action.payload)
        const temps = action.payload.map(a=> a.main.temp)
        function sliceIntoChunks(arr, chunkSize) {
            const res = [];
            for (let i = 0; i < arr.length; i += chunkSize) {
                const chunk = arr.slice(i, i + chunkSize);
                res.push(chunk);
            }
            return res;
        }
        const fiveDays = sliceIntoChunks(temps, 5)
        const arrOfAverages = []
        function getAverage(temps, oneDay){
        for (let i = 0; i < fiveDays.length; i++) {
            console.log(fiveDays[i])
           arrOfAverages.push(fiveDays[i].reduce((a,b)=>a+b,0) / fiveDays[i].length)
        }
    }
            return {
                temps: temps,
                avgTemps: arrOfAverages
            }
        }
    }


export default reducer