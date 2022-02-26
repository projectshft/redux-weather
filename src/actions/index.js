import axios from "axios";

export const FETCH_CHARTS = "FETCH_POSTS";

const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast?q=austin&units=imperial&appid=73d02479adb6279b02fdb623c43367cb";

export function fetchCharts() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_CHARTS,
    payload: request
  };
}
