const initialWeatherState = {
    error: false,
    success: false,
    data: {}
};

const weatherReducer = (state = initialWeatherState, action) => {

    const GET_WEATHER = {
        PENDING: "GET_WEATHER_PENDING",
        SUCCESS: "GET_WEATHER_SUCCESS",
        REJECTED: "GET_WEATHER_REJECTED"
      }

    switch (action.type) {
        case GET_WEATHER.SUCCESS:
            return {
                ...state,
                success: true,
                data: action.payload
            };
        case GET_WEATHER.REJECTED:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};