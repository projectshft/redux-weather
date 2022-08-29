import { FETCH_WEATHER } from "../actions";


const weatherReducer = (state= [], action) => {
    switch (action.type) {
        case FETCH_WEATHER:
            const weatherInfo = action.payload.data.list.map((info)=> {
                return {
                    temperature: info.main.temp,
                    pressure: info.main.pressure,
                    humidity: info.main.humidity
                }
            });
            const cityName= action.payload.data.city.name;
            let weatherStat = {};
            weatherInfo.forEach((obj) => {
                Object.keys(obj).forEach((key) => {
                  weatherStat[key] = (weatherStat[key] || []).concat([obj[key]]);
                });
              });
              weatherStat["city"] = cityName;
              return [weatherStat, ...state];

        default:
           return state
    }
};

export default weatherReducer;