import axios from "axios";

export const FETCH_CITY = "FETCH_CITY";

export const fetchCity = () => {
    const request = axios.get();

    return {
        type: FETCH_CITY,
        payload: request
    }
}